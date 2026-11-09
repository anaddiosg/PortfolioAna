// All the text of the confibud case study.
// Edit any string here and the page updates; the layout lives in app/work/confibud/page.tsx.

export const confibud = {
  title: "confibud",
  label: "Case study · Co-founder",
  lead: "An educational app that gives young people in Mexico clear, reliable answers to the everyday questions nobody teaches them.",
  cover: {
    src: "/images/confibud/cover.png",
    alt: "confibud's turquoise brand background with its category icons: finance, sexuality, taxes, government procedures, personal growth and student resources",
    width: 1440,
    height: 755,
  },
  appStore: "https://apps.apple.com/mx/app/confibud/id1615639133",

  overview: [
    { term: "Role", detail: "Co-founder & Product Designer · led research, product definition, UX/UI and branding" },
    {
      term: "Team",
      detail: "My co-founder and I as the two partners, a contracted team of two developers, and expert contributors",
    },
    {
      term: "Timeline",
      detail: "About 20 weeks from research to launch in April 2022, then more than two years of iteration",
    },
    { term: "Platforms", detail: "iOS · Android · web CMS" },
    {
      term: "Tools",
      detail:
        "Adobe XD (flows and prototyping) · Illustrator (branding and marketing) · GitHub and VS Code (code reviews and fixes) · Google Analytics (metrics)",
    },
    { term: "Outcome", detail: "2,000+ users in the first two months · 5.0 rating on the App Store" },
  ],

  context:
    "In Mexico, young people finish school without anyone explaining how to file taxes, read a pay slip, handle a government procedure or find reliable information about their sexual health. They learn by trial and error, and mistakes can be risky and expensive.",
  problem: [
    "Young adults struggle to find clear, trustworthy information about daily life topics. When they search on Google or social media, they get long articles, contradictory answers or sources they can't verify. So they end up asking friends and family, who often don't know either.",
    "My co-founder and I wanted to change that with a free app that makes these topics accessible, practical and easy to come back to.",
  ],
  question:
    "How might we turn complex everyday topics into short, reliable answers that young people actually want to read?",

  research: [
    "I ran exploratory research with young adults aged 16–22 to understand how they look for answers to everyday questions: which formats they prefer, which devices they use and how much attention they give to a topic before giving up. From those conversations I built user archetypes and journey maps that guided the rest of the product.",
    "In 2021, we also tested a long list of possible categories with users to find out which mattered most to them. That's how we chose the five we launched with: sexuality, personal finance, taxes, personal growth and feminism.",
  ],
  findings: [
    {
      value: "5/5",
      label: "use their phone as their main device to research everyday topics, especially between tasks or during short breaks.",
    },
    { value: "4/5", label: "get frustrated with long, heavy articles and prefer short explanations or summaries." },
    { value: "4/5", label: "have trouble finding reliable sources on Google or social media." },
    { value: "4/5", label: "end up asking friends or family when they can't find a clear answer online." },
  ],
  journey: [
    { title: "I have a question", note: "About taxes, money, sex or a government procedure" },
    { title: "I search Google or social media", note: "Usually on the phone, between other things" },
    { title: "Long articles, mixed answers", note: "No way to tell which source to trust", pain: true },
    { title: "I ask friends or family", note: "They often don't know either" },
    { title: "Still not sure", note: "Decide by trial and error", pain: true },
  ],
  insight:
    "The problem wasn't a lack of information, it was a lack of trust and clarity. Young people needed answers that were short enough to read on the go and reliable enough to act on.",
  objective:
    "Transform simple and complex everyday topics into short, practical learning moments, backed by experts.",

  architecture:
    "We launched with the five categories users had prioritized, and the content grew from there. Every article followed the same short structure: a clear title, a required image, and the author's name, credentials and social media links. Users always knew what to expect, and who was behind each answer.",
  categories: ["Sexuality", "Personal finance", "Taxes", "Personal growth", "Feminism"],
  articleAnatomy: ["Clear title", "Required image", "Short text", "Author name and credentials", "Social media links"],
  flowsIntro: "I designed three core experiences:",
  flows: [
    {
      title: "Browse by category",
      text: "A home dashboard that groups articles by topic, so users can explore without searching.",
    },
    {
      title: "Stay up to date",
      text: "Notifications for new articles, to bring users back without making them hunt for new content.",
    },
    {
      title: "Ask your own question",
      text: "Users sent their questions privately through the app. We found a professional to answer each one and published the answer as an article, so only the person who asked knew where it came from. Real questions shaped what we published.",
    },
  ],
  questionLoop: [
    { title: "A user asks", note: "Privately, from the app" },
    { title: "We find an expert", note: "A professional in that topic" },
    { title: "The expert answers", note: "Reviewed before publishing" },
    { title: "A new article", note: "Everyone can read it; nobody knows who asked" },
  ],

  devIntro: [
    "This is where confibud taught me the most. As a small team, there was no handoff to hide behind: if a screen shipped differently from the design, it was on me to catch it.",
    "So I worked with the developers every step of the way:",
  ],
  devPractices: [
    {
      title: "Flows with every state",
      text: "I didn't just design the happy path. I designed and tested every state, in the app and in the CMS: empty, loading and error states, plus edge cases like a very long article title on a small screen, so developers didn't have to guess.",
    },
    {
      title: "Learning the backend",
      text: "The developers walked me through how the backend worked. Understanding the data behind each screen helped me design things that were realistic to build and easier to maintain.",
    },
    {
      title: "Reviewing the code",
      text: "I used GitHub and VS Code to follow the developers' work, review their changes and make fixes myself when needed.",
    },
    {
      title: "Implementation reviews",
      text: "We reviewed builds together before every release, so what reached users was exactly what we had designed.",
    },
  ],

  businessIntro:
    "confibud's core belief was that everyone should have access to reliable information for free, so we never charged users. That meant every other piece had to work around it: finding experts, paying them and growing the audience, all on a very small budget.",
  business: [
    {
      title: "Recruiting contributors",
      text: "Every article had to come from someone with real credentials. I searched for professionals in each category, shared useful information about the project and pitched how writing for confibud could grow their visibility and their social media following.",
    },
    {
      title: "Starting without a budget",
      text: "At first we couldn't pay contributors, so we offered visibility, with the plan to start paying per published article from our second year.",
    },
    {
      title: "Keeping it free with ads",
      text: "To make that plan real without charging users, we brought in ads through Google Ads. I designed how ads fit into the platform without getting in the way of reading, and I reviewed which ad requests we accepted so they matched the educational topics we published. This let us start monetizing and pay our contributors.",
    },
    {
      title: "Growing the audience",
      text: "We promoted the app through podcasts and Instagram Lives with users and contributors.",
    },
    {
      title: "Designing for contributors too",
      text: "They were users of the product as well. The CMS, their author profiles and how visible they were in the app were part of what kept them writing.",
    },
  ],

  cmsIntro:
    "An app built on expert content needs a way to produce that content without slowing down. Together with the developers, we designed and built a custom CMS to run confibud end to end:",
  cmsFeatures: [
    "Create and update articles and manage categories.",
    "Review each contributor's information and credentials before approving them.",
    "Review every article before publishing, so experts validated the information before it reached users.",
    "Onboard contributors with role-based access.",
    "Keep a central user database to support product and editorial decisions.",
  ],
  cmsFlow: [
    { title: "A professional applies", note: "Shares credentials and social media" },
    { title: "Credentials reviewed", note: "Approved as a contributor" },
    { title: "Writes in the CMS", note: "Title, image and text" },
    { title: "Reviewed before publishing", note: "Checked for accuracy" },
    { title: "Published", note: "Users get notified" },
  ],
  cmsNote:
    "The CMS let our editorial team publish and update content on their own, so the developers could focus on improving the app instead of handling day-to-day content requests.",

  testingIntro:
    "confibud launched on the App Store in April 2022. I ran usability tests with users and defined the improvements together with the developers. Besides catching bugs, the tests showed us three things:",
  testFindings: [
    {
      title: "Users wanted to know who was behind each answer",
      text: "We added the author's name, photo and social media links to every article. Then we went further and built contributor profiles showing each expert's articles, how many they had published, the categories they wrote for, their social media and a short bio. Later, users could even subscribe to notifications from a specific contributor. Contributors loved it: it made them feel more visible and recognized.",
    },
    {
      title: "Articles with images performed better",
      text: "Users clearly preferred them, so we made an image required for every article and redesigned the article list to show the title, the author, a short preview and a thumbnail.",
    },
    {
      title: "Justified text hurt readability",
      text: "We switched to left-aligned text to avoid the uneven gaps that broke the reading flow.",
    },
  ],
  releasesIntro: "The release history shows how the product kept evolving:",
  releases: [
    { date: "Apr 7, 2022", title: "Launch", text: "Version 1.0 on the App Store." },
    {
      date: "Apr 9, 2022",
      title: "Small screens",
      text: "Improved layout for small screens with long text: the edge cases we had planned for, showing up in the wild.",
    },
    { date: "Apr 12, 2022", title: "Startup fixes", text: "Fixed startup issues in the first week." },
    {
      date: "Jun 30, 2022",
      title: "Notifications",
      text: "Usability improvements and a notification system to bring users back when new articles were published.",
    },
    {
      date: "2022–2024",
      title: "Growing the product",
      text: "Stability improvements, bug fixes, new content, ads to fund the project and accessibility improvements, like an AI feature that reads articles aloud.",
    },
    { date: "Aug 2024", title: "Latest update", text: "The last release on the App Store." },
  ],

  metricsNote:
    "I measured retention from day one and tracked our metrics every month with Google Analytics. We used that data to decide how to improve the app and to plan marketing strategies that brought in more users.",
  results: [
    { value: "2,000+", label: "Users in the first two months" },
    { value: "45+", label: "Expert-reviewed articles published" },
    { value: "16", label: "Articles read per user, on average" },
    { value: "1.8 min", label: "Average reading time per article" },
  ],
  resultsNote:
    "Sixteen articles per user, at under two minutes each, told us the format worked: people weren't reading one answer and leaving, they were coming back for more.",
  review: "I learned about topics I'd always wanted to know, with reliable sources.",
  reviewNote: "App Store review, translated from Spanish · confibud holds a 5.0 rating",

  learnings: [
    "Building confibud from zero taught me that a design is only as good as what ships. Working side by side with developers, understanding the backend and planning for every state made the difference between a good prototype and a product people could rely on.",
    "It also taught me to design for the whole system, not just the screens users see. The CMS, the review flow and the editorial process were as much part of the experience as the app itself.",
    "If I started confibud again today, I'd build trust into the very first version. Our research had already told us that trust was the core problem, but it took usability testing to show us that users wanted to see exactly who was behind each answer. Contributor profiles became one of our most valued features, and they could have been there from day one.",
  ],
};
