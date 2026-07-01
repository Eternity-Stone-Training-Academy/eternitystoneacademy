import { mkdir, readdir, readFile, stat, writeFile } from "node:fs/promises";
import { existsSync } from "node:fs";
import { pathToFileURL } from "node:url";
import path from "node:path";

const clientDir = path.resolve("dist/client");
const serverEntry = path.resolve("dist/server/server.js");
const siteOrigin = process.env.SITE_URL || "https://eternitystoneacademy.pages.dev";

const pageRoutes = [
  "/",
  "/programs",
  "/about",
  "/gallery",
  "/gallery/equipment",
  "/gallery/training",
  "/contact",
];

async function getClientEntry() {
  const manifestDir = path.resolve("dist/server/assets");
  if (existsSync(manifestDir)) {
    const files = await readdir(manifestDir);
    for (const file of files.filter((name) => name.includes("tanstack-start-manifest"))) {
      const source = await readFile(path.join(manifestDir, file), "utf8");
      const match = source.match(/clientEntry\s*:\s*["']([^"']+)["']/);
      if (match?.[1]) return match[1];
    }
  }

  const assetsDir = path.join(clientDir, "assets");
  const files = await readdir(assetsDir);
  const indexScripts = [];
  for (const file of files) {
    if (/^index-[\w-]+\.js$/.test(file)) {
      const info = await stat(path.join(assetsDir, file));
      indexScripts.push({ file, size: info.size });
    }
  }
  indexScripts.sort((a, b) => b.size - a.size);
  if (!indexScripts[0]) throw new Error("Could not locate the built browser entry script.");
  return `/assets/${indexScripts[0].file}`;
}

async function getStyleLinks() {
  const assetsDir = path.join(clientDir, "assets");
  const files = await readdir(assetsDir);
  return files
    .filter((file) => file.endsWith(".css"))
    .sort()
    .map((file) => `    <link rel="stylesheet" crossorigin href="/assets/${file}">`)
    .join("\n");
}

async function fallbackHtml() {
  const [clientEntry, styleLinks] = await Promise.all([getClientEntry(), getStyleLinks()]);
  return `<!doctype html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>Eternity Stone Training Academy</title>
    <meta name="description" content="Eternity Stone Training Academy equips learners in Osogbo with practical welding, electrical instrumentation, solar, engineering, renewable energy, and agribusiness skills.">
    <link rel="icon" href="/favicon.ico">
${styleLinks}
    <script type="module" crossorigin src="${clientEntry}"></script>
  </head>
  <body>
    <noscript>Please enable JavaScript to view Eternity Stone Training Academy.</noscript>
  </body>
</html>
`;
}

function pageOutputPath(route) {
  if (route === "/") return path.join(clientDir, "index.html");
  return path.join(clientDir, route.slice(1), "index.html");
}

async function writePage(route, html) {
  const outputPath = pageOutputPath(route);
  await mkdir(path.dirname(outputPath), { recursive: true });
  await writeFile(outputPath, html);
}

async function prerenderWithServer() {
  if (!existsSync(serverEntry)) return null;

  const mod = await import(pathToFileURL(serverEntry).href);
  const app = mod.default ?? mod;
  if (typeof app?.fetch !== "function") return null;

  const rendered = new Map();
  const context = { waitUntil() {}, passThroughOnException() {} };

  for (const route of pageRoutes) {
    const response = await app.fetch(new Request(new URL(route, siteOrigin)), {}, context);
    const contentType = response.headers.get("content-type") ?? "";
    if (response.status >= 500 || !contentType.includes("text/html")) {
      throw new Error(`SSR prerender failed for ${route} with status ${response.status}`);
    }
    rendered.set(route, await response.text());
  }

  const sitemapResponse = await app.fetch(new Request(new URL("/sitemap.xml", siteOrigin)), {}, context);
  if (sitemapResponse.ok) {
    await writeFile(path.join(clientDir, "sitemap.xml"), await sitemapResponse.text());
  }

  return rendered;
}

async function main() {
  await mkdir(clientDir, { recursive: true });

  let renderedPages;
  try {
    renderedPages = await prerenderWithServer();
  } catch (error) {
    console.warn("Static prerender fell back to client-rendered HTML:", error);
  }

  const shell = renderedPages ? null : await fallbackHtml();
  for (const route of pageRoutes) {
    await writePage(route, renderedPages?.get(route) ?? shell);
  }

  const notFoundHtml = renderedPages?.get("/") ?? shell;
  await writeFile(path.join(clientDir, "404.html"), notFoundHtml);

  console.log("Static HTML pages generated in dist/client.");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});