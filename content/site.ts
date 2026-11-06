// All the text on the site lives here, so you can edit copy
// without touching the layout. Change a string, save, push: done.

export const site = {
  name: "Ana De Dios Gibson",
  role: "Product Designer",
  location: "Mexico City",
  email: "anaddiosg@gmail.com",
  phone: "+52 56 1012 7359",
  phoneLink: "tel:+525610127359", // same number without spaces, so phones can call it
  linkedin: "https://www.linkedin.com/in/anadedios1",
  cv: "/Ana-De-Dios-CV.pdf",
};

export const hero = {
  // The headline is split in two so the last part can be highlighted.
  headline: "Product Designer who turns ideas into solid interfaces and",
  highlight: "clear, build-ready flows.",
  intro:
    "I design B2C products in education and entertainment, including ViX, TelevisaUnivision's streaming platform, and work side by side with developers so what ships is what was designed.",
};

export const proofPoints = [
  { value: "+35%", label: "young users", source: "ViX Micro, in six months" },
  { value: "326M+", label: "views in its first year", source: "ViX Micro" },
  { value: "2,000+", label: "users in two months", source: "confibud" },
];

export type Project = {
  slug: string;
  title: string;
  tags: string[];
  summary: string;
  metrics: string[];
  image: string;
  imageAlt: string;
  // false = the case study page isn't built yet, so the card doesn't link anywhere.
  ready: boolean;
};

export const projects: Project[] = [
  {
    slug: "vix-micro",
    title: "ViX Micro",
    tags: ["TelevisaUnivision", "Streaming", "Mobile"],
    summary:
      "A vertical, short-form series experience designed to bring younger audiences to TelevisaUnivision's streaming platform.",
    metrics: ["+35% young users", "+20% premium users in Mexico", "6 months"],
    image: "/images/vix-micro-cover.png",
    imageAlt: "A hand holding a phone with the ViX app open on the ViX Micro section",
    ready: false,
  },
  {
    slug: "confibud",
    title: "confibud",
    tags: ["Co-founder", "EdTech", "Mobile + CMS"],
    summary:
      "An educational app for young people, built end to end and side by side with developers, from research to a custom CMS.",
    metrics: ["2,000+ users in two months", "16 articles read per user"],
    image: "/images/confibud-cover.png",
    imageAlt: "A hand holding a phone with the confibud app showing its notifications screen",
    ready: false,
  },
];
