// Data model for ESTA's three Schools and 20 courses + CAMET coming-soon center.
export type Course = {
  title: string;
  subtitle?: string;
  duration: string;
  image: string;
  highlights: string[];
  outcomes: string[];
  audience: string[];
  price?: string;
  customPricing?: boolean;
};

export type School = {
  id: string;
  code: string;
  name: string;
  tagline: string;
  description: string;
  courses: Course[];
};

const img = (id: string) =>
  `https://images.unsplash.com/${id}?w=1200&auto=format&fit=crop&q=70`;

import camet1 from "@/assets/camet/Merged_1_and_more_1.jpg.asset.json";
import camet3 from "@/assets/camet/Merged_1_and_more_3.jpg.asset.json";
import camet4 from "@/assets/camet/Merged_1_and_more_4.jpg.asset.json";
import camet5 from "@/assets/camet/Merged_1_and_more_5.jpg.asset.json";
import camet6 from "@/assets/camet/Merged_1_and_more_6.jpg.asset.json";
import cametBh1 from "@/assets/camet/Merged_Backhoe_and_more_1.jpg.asset.json";
import cametBh2 from "@/assets/camet/Merged_Backhoe_and_more_2.jpg.asset.json";
import cametBh3 from "@/assets/camet/Merged_Backhoe_and_more_3.jpg.asset.json";
import cametBh4 from "@/assets/camet/Merged_Backhoe_and_more_4.jpg.asset.json";

export const cametGallery: { url: string; caption: string }[] = [
  { url: camet1.url, caption: "High-horsepower utility tractor — cab class" },
  { url: camet5.url, caption: "Compact 4WD utility tractor" },
  { url: camet4.url, caption: "Mid-range tractor with canopy" },
  { url: camet6.url, caption: "Walking tractor with rotary tiller" },
  { url: camet3.url, caption: "Two-wheel diesel walking tractor" },
  { url: cametBh3.url, caption: "Combine harvester (rice & grain)" },
  { url: cametBh4.url, caption: "Tracked combine harvester" },
  { url: cametBh1.url, caption: "Wheel loader / backhoe combination" },
  { url: cametBh2.url, caption: "Compact backhoe loader" },
];

export const schools: School[] = [
  {
    id: "sves",
    code: "SVES",
    name: "School of Vocational & Entrepreneurship Studies",
    tagline: "Industrial trades, engineering crafts and enterprise capacity.",
    description:
      "Eleven workshop-led programs covering mechanical, electrical, renewable, CAD design, fabrication and enterprise development tracks.",
    courses: [
      {
        title: "Welding & Fabrication Technology",
        duration: "3 Months",
        price: "₦275,000",
        image: img("photo-1504917595217-d4dc5ebe6122"),
        highlights: ["Arc welding","MIG and TIG welding","Metal cutting and shaping","Structural fabrication","Equipment maintenance and safety"],
        outcomes: ["Fabricate metal structures and equipment","Support construction and oil & gas operations","Establish small-scale fabrication enterprises"],
        audience: ["School leavers","Artisans","Technical professionals","Entrepreneurs"],
      },
      {
        title: "Welding & Fabrication — Professional Diploma",
        duration: "6 Months",
        price: "₦450,000",
        image: img("photo-1504917595217-d4dc5ebe6122"),
        highlights: ["Advanced arc, MIG & TIG welding","Pipe & pressure vessel welding","Weld inspection & quality control","Structural steel fabrication","Workshop supervision & safety leadership"],
        outcomes: ["Work as a certified professional welder","Lead fabrication teams in industrial projects","Set up a full-service fabrication workshop"],
        audience: ["Practising welders upgrading","Fabrication supervisors","Graduates seeking a professional pathway"],
      },
      {
        title: "Electrical Installation",
        duration: "3 Months",
        price: "₦200,000",
        image: img("photo-1581092580497-e0d23cbdf1dc"),
        highlights: ["Residential and industrial wiring","Electrical panel installation","Instrumentation fundamentals","Fault detection and maintenance","Safety compliance"],
        outcomes: ["Perform professional electrical installations","Maintain industrial systems","Operate as certified technicians"],
        audience: ["Aspiring electricians","Engineering students","Technical professionals","Entrepreneurs"],
      },
      {
        title: "Solar PV Design & Installation",
        duration: "3 Months",
        price: "₦250,000",
        image: img("photo-1509391366360-2e959784a276"),
        highlights: ["Solar system components","System sizing and design","Installation techniques","Battery storage systems","Renewable energy fundamentals"],
        outcomes: ["Install residential and small commercial solar arrays","Provide technical maintenance","Start solar installation businesses"],
        audience: ["Technicians","Engineers","Entrepreneurs","Renewable energy enthusiasts"],
      },
      {
        title: "Fitting & Machining",
        duration: "3 Months",
        price: "₦350,000",
        image: img("photo-1616401784845-180882ba9ba8"),
        highlights: ["Precision measurement","Lathe operations","Milling machine setups","Component tolerances","Industrial workshop safety"],
        outcomes: ["Machine custom industrial spare parts","Read engineering blueprints","Execute component refitting"],
        audience: ["Technical graduates","Maintenance mechanics","Manufacturing technicians"],
      },
      {
        title: "Plumbing & Pipefitting",
        duration: "3 Months",
        price: "₦200,000",
        image: img("photo-1607472586893-edb57bdc0e39"),
        highlights: ["Blueprint interpretation","Pipe threading and joining","Industrial valve layouts","Pressure testing","Drainage infrastructure"],
        outcomes: ["Install commercial fluid routing systems","Troubleshoot piping networks","Execute residential layouts"],
        audience: ["Apprentices","Construction technicians","Property development artisans"],
      },
      {
        title: "AutoCAD",
        duration: "6 Weeks",
        price: "₦175,000",
        image: img("photo-1581092335397-9583eb92d232"),
        highlights: ["2D drafting fundamentals","Layers, blocks & annotation","Mechanical & architectural drawings","Layouts, plotting & PDF export","Industry drawing standards"],
        outcomes: ["Produce professional 2D engineering drawings","Support fabrication & construction workflows","Freelance as an AutoCAD draftsperson"],
        audience: ["Engineering & architecture students","Technicians & fabricators","Draftspersons upgrading skills"],
      },
      {
        title: "SolidWorks",
        duration: "6 Weeks",
        price: "₦220,000",
        image: img("photo-1581092335397-9583eb92d232"),
        highlights: ["Parametric 3D part modelling","Assemblies & mates","2D drawings from 3D models","Sheet metal & weldments","Basic simulation & rendering"],
        outcomes: ["Model mechanical components & assemblies","Generate manufacturing-ready drawings","Support product design & fabrication"],
        audience: ["Mechanical engineering students","Product designers","Fabrication engineers"],
      },
      {
        title: "AutoCAD + SolidWorks (Combined)",
        duration: "10 Weeks",
        price: "₦350,000",
        image: img("photo-1581092335397-9583eb92d232"),
        highlights: ["Full AutoCAD 2D workflow","Full SolidWorks 3D workflow","Integrated design projects","Portfolio-ready deliverables","Discounted combined tuition"],
        outcomes: ["Deliver end-to-end 2D & 3D design projects","Work across drafting and modelling roles","Build a competitive design portfolio"],
        audience: ["Serious CAD career-changers","Engineering graduates","Freelance design professionals"],
      },
      {
        title: "Engineering Drawing Fundamentals",
        duration: "4 Weeks",
        price: "₦80,000",
        image: img("photo-1581092335397-9583eb92d232"),
        highlights: ["Orthographic & isometric projection","Dimensioning & tolerancing","Sectional views","Reading technical drawings","Freehand sketching"],
        outcomes: ["Read and interpret engineering drawings","Communicate designs on paper","Prepare for CAD training"],
        audience: ["Technical school leavers","Apprentice technicians","Absolute beginners to design"],
      },
      {
        title: "Entrepreneurship Development",
        duration: "2 Weeks",
        price: "₦75,000",
        image: img("photo-1556761175-5973dc0f32e7"),
        highlights: ["Business planning & strategy","Financial management","Costing and pricing","Market positioning","Scaling & sustainability"],
        outcomes: ["Develop viable business models","Improve operational efficiency","Increase profitability","Access new markets"],
        audience: ["Entrepreneurs","Startups","MSMEs","Cooperatives","Youth-led enterprises"],
      },
    ],
  },
  {
    id: "saas",
    code: "SAAS",
    name: "School of Agriculture & Agro-Allied Studies",
    tagline: "Farming, advisory and agro-processing capacity for Africa.",
    description:
      "Farmer-facing and mechanization programs designed to lift yield, profitability and value-chain participation — with the CAMET flagship centre launching January 2027.",
    courses: [
      {
        title: "Training for Farmers",
        duration: "1 Week",
        price: "₦50,000",
        image: img("photo-1500595046743-cd271d694d30"),
        highlights: ["Improved seedlings and animal breeds","Modern farming techniques","Soil management","Irrigation systems","Post-harvest handling"],
        outcomes: ["Increase crop yield and livestock productivity","Improve farm profitability","Reduce production losses"],
        audience: ["Crop farmers","Livestock farmers","Agricultural cooperatives","Agripreneurs"],
      },
      {
        title: "Agricultural Extension",
        duration: "2 Weeks",
        price: "₦75,000",
        image: img("photo-1625246333195-78d9c38ad449"),
        highlights: ["Farmer engagement strategies","Technology adoption","Value chain development","Climate-smart agriculture","Reporting systems"],
        outcomes: ["Support farmers with improved advisory services","Enhance agricultural value chains","Promote sustainable farming practices"],
        audience: ["Extension officers","NGOs","Government agencies","Agricultural institutions"],
      },
      {
        title: "Agricultural Mechanization",
        duration: "3 Months",
        price: "₦200,000",
        image: cametBh1.url,
        highlights: ["Mechanization principles & farm planning","Implement selection & matching","Operator basics & safety","Cost economics of mechanization","Field practice"],
        outcomes: ["Plan and run mechanized farm operations","Advise farmers on equipment selection","Support mechanization service businesses"],
        audience: ["Farm owners & managers","Agricultural technicians","Mechanization service providers"],
      },
      {
        title: "Tractor Operation & Maintenance",
        duration: "3 Months",
        price: "₦250,000",
        image: camet1.url,
        highlights: ["Tractor controls & safe operation","Hitching & implement operation","Preventive maintenance schedules","Basic diagnostics & repairs","Fuel, hydraulics & lubrication"],
        outcomes: ["Operate tractors safely and productively","Perform routine maintenance & minor repairs","Work as a professional tractor operator"],
        audience: ["Aspiring tractor operators","Farm workers","Mechanization service crews"],
      },
      {
        title: "Agricultural Equipment Maintenance",
        duration: "3 Months",
        price: "₦300,000",
        image: cametBh2.url,
        highlights: ["Diesel engine systems","Hydraulic & transmission systems","Preventive & corrective maintenance","Diagnostics & troubleshooting","Workshop safety & tools"],
        outcomes: ["Diagnose & repair agricultural equipment","Run a farm equipment workshop","Support fleet uptime for mechanization services"],
        audience: ["Mechanics & technicians","Farm workshop supervisors","Fleet maintenance staff"],
      },
    ],
  },
  {
    id: "sses",
    code: "SSES",
    name: "School of Sustainability & ESG",
    tagline: "Climate, governance, DEI and ESG risk for modern organisations.",
    description:
      "Six executive and certificate programs equipping professionals and corporates with measurable sustainability, governance and ESG risk capacity.",
    courses: [
      {
        title: "ESG Fundamentals",
        duration: "2 Weeks",
        price: "₦120,000",
        image: img("photo-1532601224476-15c79f2f7a51"),
        highlights: ["ESG principles & drivers","Global ESG frameworks (GRI, SASB, TCFD)","Materiality assessment basics","Stakeholder mapping","Introduction to ESG reporting"],
        outcomes: ["Explain ESG in a corporate context","Support ESG initiatives at work","Prepare for advanced ESG training"],
        audience: ["Professionals new to ESG","Sustainability team members","Graduates and career switchers"],
      },
      {
        title: "Environmental Management Systems",
        duration: "4 Weeks",
        price: "₦180,000",
        image: img("photo-1532996122724-e3c354a0b15b"),
        highlights: ["ISO 14001 principles","Environmental aspects & impacts","Waste, water & energy management","Compliance & audits","EMS implementation roadmap"],
        outcomes: ["Design and implement an EMS","Support ISO 14001 certification","Reduce operational environmental impact"],
        audience: ["HSE professionals","Operations managers","Manufacturers","Sustainability officers"],
      },
      {
        title: "Carbon Accounting & Reporting",
        duration: "4 Weeks",
        price: "₦200,000",
        image: img("photo-1532601224476-15c79f2f7a51"),
        highlights: ["GHG Protocol basics","Scope 1, 2 & 3 emissions","Carbon inventory & calculations","Emissions reporting standards","Reduction & offset strategies"],
        outcomes: ["Build a corporate carbon inventory","Prepare emissions disclosures","Support net-zero strategy work"],
        audience: ["Sustainability analysts","Finance & risk teams","Environmental consultants"],
      },
      {
        title: "Climate Finance",
        duration: "4 Weeks",
        price: "₦200,000",
        image: img("photo-1454165804606-c3d57bc86b40"),
        highlights: ["Global climate finance landscape","Green bonds & climate-linked instruments","Blended finance & carbon markets","Project bankability","Access to climate funds"],
        outcomes: ["Structure climate-related financial products","Prepare fundable climate projects","Advise organizations on climate finance"],
        audience: ["Bankers & finance professionals","Development finance staff","Climate project developers"],
      },
      {
        title: "Corporate Sustainability",
        duration: "4 Weeks",
        price: "₦250,000",
        image: img("photo-1521737604893-d14cc237f11d"),
        highlights: ["Sustainability strategy design","Integrating ESG into business models","Sustainable supply chains","Stakeholder engagement","Performance metrics & KPIs"],
        outcomes: ["Lead corporate sustainability programmes","Embed ESG in strategy & operations","Report on sustainability performance"],
        audience: ["Executives & senior managers","Sustainability leads","Strategy & operations teams"],
      },
      {
        title: "ESG Reporting & Compliance",
        duration: "4 Weeks",
        price: "₦180,000",
        image: img("photo-1454165804606-c3d57bc86b40"),
        highlights: ["Global reporting frameworks (GRI, ISSB, TCFD, CSRD)","Materiality & data collection","Assurance & verification","Regulatory compliance","Report drafting & disclosure"],
        outcomes: ["Produce compliant ESG reports","Manage disclosure obligations","Coordinate assurance & audit processes"],
        audience: ["Sustainability & compliance officers","Corporate reporting teams","Risk & audit professionals"],
      },
    ],
  },
  {
    id: "corporate",
    code: "CORPORATE",
    name: "Corporate Training & Professional Development",
    tagline: "Tailored capacity development for organisations, teams and partners.",
    description:
      "Customised, in-house and cohort-based programs designed around your organisation's technical, sustainability and workforce goals. Pricing is proposal-based.",
    courses: [
      {
        title: "Technical & Vocational Cohorts",
        duration: "Customisable",
        customPricing: true,
        image: img("photo-1581092335397-9583eb92d232"),
        highlights: ["Welding, electrical, solar & CAD tracks","Custom curriculum design","On-site or ESTA workshop delivery","Assessment & certification","Post-training support"],
        outcomes: ["Upskill technical workforce at scale","Standardise safety & quality practices","Build internal talent pipelines"],
        audience: ["OEMs & industrial firms","Oil & gas contractors","Construction & energy companies"],
      },
      {
        title: "Agricultural & Mechanization Programs",
        duration: "Customisable",
        customPricing: true,
        image: cametBh1.url,
        highlights: ["Farmer cooperative training","Mechanization service crews","Extension officer capacity","Field-based delivery","Impact measurement"],
        outcomes: ["Scale mechanization adoption","Improve farmer productivity","Prepare agencies for large field programmes"],
        audience: ["Government agencies","Development partners","Agribusinesses & cooperatives"],
      },
      {
        title: "ESG & Sustainability Advisory Training",
        duration: "Customisable",
        customPricing: true,
        image: img("photo-1521737604893-d14cc237f11d"),
        highlights: ["Executive ESG briefings","Board & leadership sessions","Reporting & disclosure workshops","Sector-specific ESG risk","Change management support"],
        outcomes: ["Align leadership on ESG strategy","Build in-house sustainability capacity","Prepare for disclosure obligations"],
        audience: ["Boards & C-suite","Sustainability & risk teams","Financial institutions"],
      },
    ],
  },
];

export const camet = {
  name: "Center for Agricultural Mechanization & Equipment Technology",
  shortName: "CAMET",
  launch: "Launching January 2027",
  badge: "FLAGSHIP CENTER — LAUNCHING JANUARY 2027",
  summary:
    "Building Africa's next generation of agricultural machinery professionals. Specializing in indigenous technical capacity, tractor assembly, heavy diagnostics, and fleet entrepreneurship.",
  image: camet1.url,
  programs: [
    { title: "Tractor Assembly Technology", duration: "6 Months", price: "₦500,000" },
    { title: "Agricultural Machinery Maintenance", duration: "6 Months", price: "₦500,000" },
    { title: "Heavy Equipment Maintenance", duration: "6 Months", price: "₦600,000" },
    { title: "Precision Agriculture Technologies", duration: "3 Months", price: "₦350,000" },
    { title: "Farm Mechanization Entrepreneurship", duration: "3 Months", price: "₦250,000" },
  ],
  partnerships: [
    "Original Equipment Manufacturers (OEMs)",
    "Federal and State Governments",
    "International Development Partners",
    "Agricultural Finance Institutions",
  ],
  sponsorship:
    "CAMET's Student Sponsorship & Scholarship Program will fund deserving learners — including women in agriculture, rural youth, and cooperative-nominated trainees — through corporate sponsors, government partners and development grants.",
} as const;

export const allCourseTitles: string[] = schools.flatMap((s) => s.courses.map((c) => c.title));
