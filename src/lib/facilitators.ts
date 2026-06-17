import habeeb from "@/assets/facilitators/habeeb.jpg.asset.json";
import oladimeji from "@/assets/facilitators/oladimeji.jpg.asset.json";
import timilehin from "@/assets/facilitators/timilehin.jpg.asset.json";
import ayomide from "@/assets/facilitators/ayomide.jpg.asset.json";

export type Facilitator = {
  name: string;
  role: string;
  years: string;
  image: string;
};

export const facilitators: Facilitator[] = [
  {
    name: "Mr. Habeeb Ahmed",
    role: "Machining, Welding & Fabrication Technician",
    years: "10+ years experience",
    image: habeeb.url,
  },
  {
    name: "Engr. Oladimeji Oladipo",
    role: "Electrical & Solar Installation Engineer",
    years: "15+ years experience",
    image: oladimeji.url,
  },
  {
    name: "Mr. Timilehin Adedoyin",
    role: "Welding & Fabrication Technician",
    years: "10+ years experience",
    image: timilehin.url,
  },
  {
    name: "Mr. Ayomide Abioye",
    role: "Electrical & Solar Installation Technician",
    years: "13+ years experience",
    image: ayomide.url,
  },
];