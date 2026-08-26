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
    image: timilehin.url,
  },
  {
    name: "Mr. Timilehin Adedoyin",
    role: "Welding & Fabrication Technician",
    years: "10+ years experience",
    image: ayomide.url,
  },
  {
    name: "Mr. Ayomide Abioye",
    role: "Electrical & Solar Installation Technician",
    years: "13+ years experience",
    image: oladimeji.url,
  },
  {
    name: "Mr. David Okonkwo",
    role: "Renewable Energy Specialist",
    years: "8+ years experience",
    image: "/images/instructor-1.jpg",
  },
  {
    name: "Engr. Samuel Nnamdi",
    role: "Instrumentation & Control Engineer",
    years: "12+ years experience",
    image: "/images/instructor-2.jpg",
  },
  {
    name: "Mr. Adeola Fashola",
    role: "Plumbing & Piping Instructor",
    years: "10+ years experience",
    image: "/images/instructor-3.jpg",
  },
  {
    name: "Ms. Chinwe Eze",
    role: "Engineering Design Consultant",
    years: "7+ years experience",
    image: "/images/instructor-4.jpg",
  },
  {
    name: "Engr. Chukwudi Okafor",
    role: "Industrial Automation Expert",
    years: "14+ years experience",
    image: "/images/instructor-5.jpg",
  },
];