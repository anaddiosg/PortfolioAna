// All the text of the About page. Edit any string here and the page updates.

export const about = {
  headline:
    "I design products that make everyday life a little easier, and I make sure they ship the way they were designed.",
  photo: {
    src: "/images/ana-de-dios.jpg",
    alt: "Portrait of Ana De Dios Gibson",
    width: 900,
    height: 1125,
  },
  story: [
    "I'm a Product Designer based in Mexico City, focused on closing the gap between design and development. I define the information architecture and user flows, including their states and edge cases, so the team understands exactly how things will be built.",
    "I studied Visual Communication, and that foundation still shows in every interface I design. For years, I led the design of confibud, an educational app I co-founded, end to end and side by side with the developers: we reviewed what they were building together, they walked me through the backend, and I made sure every screen was implemented as designed.",
    "Today at TelevisaUnivision, I designed ViX Micro, a vertical short-form format that brought a new, younger audience to ViX.",
    "What drives me is building products that genuinely make people's lives easier.",
  ],

  principles: [
    {
      title: "Design that ships as designed",
      text: "I map flows with every state and edge case, review implementation with developers and follow their work in GitHub, so nothing gets lost between the file and the product.",
    },
    {
      title: "Decisions backed by people and data",
      text: "I start from research and behavior data, and I keep measuring after launch. At ViX Micro, interviews and drop-off data are what led us to replace autoplay with a selection layer.",
    },
    {
      title: "Thinking beyond the screen",
      text: "A product also has to work for the business and for everyone who builds it: Finance, Production, developers, contributors. At confibud, that meant designing how ads could fund the app while keeping it free for users.",
    },
    {
      title: "Visual craft from the start",
      text: "My background in visual communication means interfaces that are clear, consistent and carefully finished.",
    },
  ],

  experience: [
    {
      years: "2023–Present",
      role: "Product Designer",
      company: "TelevisaUnivision & ViX",
      text: "Led the end-to-end design of ViX Micro (+35% young users and +20% premium users in Mexico in six months). I aligned Finance, Production and an external engineering agency to take the format from concept to launch, and in its first year ViX Micro reached 326M+ views.",
      link: { label: "Read the ViX Micro case study", href: "/work/vix-micro" },
    },
    {
      years: "2021–2024",
      role: "Co-founder & Product Designer",
      company: "confibud",
      text: "Built an educational app from research to launch and kept it growing for more than two years, side by side with the developers. 2,000+ users in two months.",
      link: { label: "Read the confibud case study", href: "/work/confibud" },
    },
    {
      years: "2023",
      role: "Graphic Designer",
      company: "Cimentación de Negocios",
      text: "Redesigned the full brand and its identity manual, still in use today. Trained 40 insurance advisors to use digital tools and designed client-facing materials based on their feedback.",
    },
  ],

  details: [
    {
      term: "Skills",
      detail:
        "Product Design · Interaction Design · User Research · Usability Testing · Journey Mapping · Wireframing · Prototyping · Design Systems · Visual Design · Accessibility",
    },
    { term: "Tools", detail: "Figma · Webflow · Framer · Adobe Creative Suite · Visual Studio Code · GitHub" },
    { term: "AI-assisted workflows", detail: "Claude · v0 · Lovable · Figma Make" },
    { term: "Code", detail: "HTML · CSS. This portfolio is built with Next.js and deployed on Vercel." },
    {
      term: "Education",
      detail:
        "UX/UI Designer program at EBAC (in progress) · Bachelor's degree in Visual Communication, Centro de Diseño, Cine y Televisión",
    },
    { term: "Languages", detail: "Spanish (native) · English (advanced) · Portuguese (beginner)" },
  ],

  // Excerpts of the LinkedIn recommendations ("…" marks the parts left out).
  recommendations: [
    {
      quote:
        "She owned the product end to end… What I valued most as a co-founder was how she balanced user needs with our real constraints. She knew when to simplify, she could explain the reasoning behind every decision… Ana thinks like a product owner, not just a designer.",
      name: "Jimena Sánchez González",
      role: "Co-founder of confibud · Senior Consultant at Deloitte",
      relation: "Co-founded confibud with Ana",
    },
    {
      quote:
        "What stands out most is how she turns an idea into something a team can actually build. Ana asks the right questions, thinks through the details others miss, and is insanely driven, always finding ways to get things done. On top of that, she has a strong visual eye that shows in everything she delivers.",
      name: "Paula Yrízar Llaca",
      role: "Graphic Designer and Illustrator",
      relation: "Works with Ana at TelevisaUnivision",
    },
  ],
};
