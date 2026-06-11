// Data model for ESTA's three Schools and 20 courses + CAMET coming-soon center.
export type Course = {
  title: string;
  subtitle?: string;
  duration: string;
  image: string;
  highlights: string[];
  outcomes: string[];
  audience: string[];
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

export const schools: School[] = [
  {
    id: "sves",
    code: "SVES",
    name: "School of Vocational & Entrepreneurship Studies",
    tagline: "Industrial trades, engineering crafts and enterprise capacity.",
    description:
      "Eight workshop-led programs covering mechanical, electrical, renewable, design, fabrication and enterprise development tracks.",
    courses: [
      {
        title: "Computer Aided Design (CAD)",
        subtitle: "AutoCAD & SolidWorks",
        duration: "3 Months",
        image: img("photo-1581092335397-9583eb92d232"),
        highlights: ["2D drafting and detailing","3D modeling and simulation","Mechanical component design","Industrial drawing standards","Project-based learning"],
        outcomes: ["Produce professional engineering drawings","Design mechanical components and assemblies","Support fabrication and manufacturing processes"],
        audience: ["Engineering students and graduates","Technicians and fabricators","Architects and designers"],
      },
      {
        title: "Welding & Fabrication Technology",
        duration: "3 Months Basic / 6 Months Advanced",
        image: img("photo-1504917595217-d4dc5ebe6122"),
        highlights: ["Arc welding","MIG and TIG welding","Metal cutting and shaping","Structural fabrication","Equipment maintenance and safety"],
        outcomes: ["Fabricate metal structures and equipment","Support construction and oil & gas operations","Establish small-scale fabrication enterprises"],
        audience: ["School leavers","Artisans","Technical professionals","Entrepreneurs"],
      },
      {
        title: "Electrical & Instrumentation",
        duration: "3 Months Basic / 6 Months Advanced",
        image: img("photo-1581092580497-e0d23cbdf1dc"),
        highlights: ["Residential and industrial wiring","Electrical panel installation","Instrumentation fundamentals","Fault detection and maintenance","Safety compliance"],
        outcomes: ["Perform professional electrical installations","Maintain industrial systems","Operate as certified technicians"],
        audience: ["Aspiring electricians","Engineering students","Technical professionals","Entrepreneurs"],
      },
      {
        title: "Solar Design & Installation",
        duration: "3 Months",
        image: img("photo-1509391366360-2e959784a276"),
        highlights: ["Solar system components","System sizing and design","Installation techniques","Battery storage systems","Renewable energy fundamentals"],
        outcomes: ["Install residential and small commercial solar arrays","Provide technical maintenance","Start solar installation businesses"],
        audience: ["Technicians","Engineers","Entrepreneurs","Renewable energy enthusiasts"],
      },
      {
        title: "Pottery & Ceramics Technology",
        duration: "3 Months",
        image: img("photo-1565193566173-7a0ee3dbe261"),
        highlights: ["Clay preparation techniques","Kiln operations","Ceramics molding and finishing","Product design","Commercial production methods"],
        outcomes: ["Produce commercial ceramic products","Establish local pottery businesses","Support indigenous manufacturing"],
        audience: ["Creative entrepreneurs","Artisans","Youth and women empowerment groups"],
      },
      {
        title: "Enterprise Development Training",
        duration: "2–3 Days Intensive",
        image: img("photo-1556761175-5973dc0f32e7"),
        highlights: ["Business planning and strategy","Financial management","Costing and pricing","Market positioning","Scaling and sustainability"],
        outcomes: ["Develop viable business models","Improve operational efficiency","Increase profitability","Access new markets"],
        audience: ["Entrepreneurs","Startups","MSMEs","Cooperatives","Youth-led enterprises"],
      },
      {
        title: "Fitting & Machining",
        duration: "3 Months",
        image: img("photo-1565939446707-77f74cb24c19"),
        highlights: ["Precision measurement","Lathe operations","Milling machine setups","Component tolerances","Industrial workshop safety"],
        outcomes: ["Machine custom industrial spare parts","Read engineering blueprints","Execute component refitting"],
        audience: ["Technical graduates","Maintenance mechanics","Manufacturing technicians"],
      },
      {
        title: "Plumbing & Pipefitting",
        duration: "3 Months",
        image: img("photo-1607472586893-edb57bdc0e39"),
        highlights: ["Blueprint interpretation","Pipe threading and joining","Industrial valve layouts","Pressure testing","Drainage infrastructure"],
        outcomes: ["Install commercial fluid routing systems","Troubleshoot piping networks","Execute residential layouts"],
        audience: ["Apprentices","Construction technicians","Property development artisans"],
      },
    ],
  },
  {
    id: "saas",
    code: "SAAS",
    name: "School of Agriculture & Agro-Allied Studies",
    tagline: "Farming, advisory and agro-processing capacity for Africa.",
    description:
      "Four farmer-facing and agribusiness programs designed to lift yield, profitability and value-chain participation — with the CAMET flagship center launching January 2027.",
    courses: [
      {
        title: "Training for Farmers",
        duration: "2–3 Days Intensive",
        image: img("photo-1500595046743-cd271d694d30"),
        highlights: ["Improved seedlings and animal breeds","Modern farming techniques","Soil management","Irrigation systems","Post-harvest handling"],
        outcomes: ["Increase crop yield and livestock productivity","Improve farm profitability","Reduce production losses"],
        audience: ["Crop farmers","Livestock farmers","Agricultural cooperatives","Agripreneurs"],
      },
      {
        title: "Agricultural Extension Services",
        duration: "2–5 Days Customizable",
        image: img("photo-1625246333195-78d9c38ad449"),
        highlights: ["Farmer engagement strategies","Technology adoption","Value chain development","Climate-smart agriculture","Reporting systems"],
        outcomes: ["Support farmers with improved advisory services","Enhance agricultural value chains","Promote sustainable farming practices"],
        audience: ["Extension officers","NGOs","Government agencies","Agricultural institutions"],
      },
      {
        title: "Agribusiness Development",
        duration: "1 Week Intensive",
        image: img("photo-1464226184884-fa280b87c399"),
        highlights: ["Value-chain mechanics","Agro-commodity market dynamics","Logistics and cold-chain management","Agricultural export standards"],
        outcomes: ["Draft viable farm business plans","Source agricultural funding","Navigate international trade barriers"],
        audience: ["Farm owners","Agricultural investment consultants","Commodity merchants"],
      },
      {
        title: "Agro-Processing",
        duration: "2 Weeks Professional",
        image: img("photo-1542838132-92c53300491e"),
        highlights: ["Raw commodity value-addition protocols","Food safety regulations (NAFDAC)","Modern packaging","Shelf-life extension"],
        outcomes: ["Design localized automated processing lines","Scale product margins","Control food production quality"],
        audience: ["Food processing entrepreneurs","Packaging technicians","Cooperative leaders"],
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
        title: "Climate Change & Carbon Footprint Reduction",
        duration: "3 Days Executive / 2 Weeks Certificate",
        image: img("photo-1532601224476-15c79f2f7a51"),
        highlights: ["Climate change trends","Carbon footprint measurement","ESG frameworks (GRI, TCFD, SASB)","Net-zero operational practices"],
        outcomes: ["Assess climate risks","Measure and mitigate emissions","Formulate corporate sustainability pathways"],
        audience: ["Sustainability professionals","Corporate organizations","Government agencies","NGOs","Energy managers"],
      },
      {
        title: "Community Engagement & Social Impact",
        duration: "3 Days Executive / 2 Weeks Certificate",
        image: img("photo-1531206715517-5c0ba140b2b8"),
        highlights: ["Stakeholder and community mapping","Corporate Social Responsibility (CSR)","Social impact metrics evaluation","Advocacy tools"],
        outcomes: ["Build high-impact community frameworks","Evaluate social interventions","Lead corporate social responsibility initiatives"],
        audience: ["NGOs","Corporate affairs teams","CSR professionals","Community leaders","Social entrepreneurs"],
      },
      {
        title: "Diversity, Equity & Inclusion (DEI)",
        duration: "2 Days Executive / 1 Week Certificate",
        image: img("photo-1573164713988-8665fc963095"),
        highlights: ["Unconscious bias mitigation","Inclusive leadership behaviors","Cultural competence","Equitable workspace policies"],
        outcomes: ["Promote inclusive workplace culture","Address organizational bias","Build equitable systems"],
        audience: ["HR professionals","Corporate executives","Educational institutions","NGO directors","Team leaders"],
      },
      {
        title: "Waste Management & Circular Economy",
        duration: "1 Week Intensive / 1 Month Certificate",
        image: img("photo-1532996122724-e3c354a0b15b"),
        highlights: ["Municipal and industrial waste systems","Circular economy modeling","Material recovery and recycling","Waste-to-value business avenues"],
        outcomes: ["Design green waste-reduction pathways","Optimize environmental sustainability footprints","Identify green business opportunities"],
        audience: ["Environmental specialists","Manufacturers","Waste operators","Entrepreneurs","Startups","Graduates"],
      },
      {
        title: "Corporate Governance & Ethical Leadership",
        duration: "3 Days Executive / 2 Weeks Certificate",
        image: img("photo-1521737604893-d14cc237f11d"),
        highlights: ["Board oversight protocols","Risk architectures","Compliance frameworks","Ethical decision-making","Transparency mechanisms"],
        outcomes: ["Strengthen governance and compliance systems","Improve ethical leadership capacity","Enhance accountability frameworks"],
        audience: ["Executives","Directors","Board members","Entrepreneurs","Compliance professionals"],
      },
      {
        title: "ESG Risk Management",
        duration: "1 Week Executive / 1 Month Advanced",
        image: img("photo-1454165804606-c3d57bc86b40"),
        highlights: ["ESG risk identification metrics","Framework compliance systems","Sustainability disclosures","Data analytics","Resilience planning"],
        outcomes: ["Identify and manage ESG risks","Implement reporting architectures","Align operations with global ESG standards"],
        audience: ["Risk managers","Sustainability officers","Financial institutions","Investors","Analysts","Consultants"],
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
  image: img("photo-1530267981375-f0de937f5f13"),
  programs: [
    { title: "Tractor Assembly Technology", duration: "3 Months Certificate / 6 Months Advanced" },
    { title: "Tractor Diagnostics & Maintenance", duration: "1 Month Basic / 3 Months Professional" },
    { title: "Agricultural Machinery Operations", duration: "2 Weeks Intensive / 1 Month Professional" },
    { title: "Precision Agriculture Technologies", duration: "1 Month Professional / 3 Months Advanced" },
    { title: "Heavy Equipment Maintenance Technology", duration: "3 Months Certificate / 6 Months Advanced" },
    { title: "Farm Mechanization Entrepreneurship", duration: "2 Weeks Executive / 1 Month Professional" },
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
