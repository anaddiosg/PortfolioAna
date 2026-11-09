// All the text of the ViX Micro case study.
// Edit any string here and the page updates; the layout lives in app/work/vix-micro/page.tsx.

export const vixMicro = {
  title: "ViX Micro",
  label: "Case study · TelevisaUnivision",
  lead: "Bringing a younger audience to TelevisaUnivision's streaming platform with one-minute vertical series.",
  cover: {
    src: "/images/vix-micro/hero-catalog.jpg",
    alt: "Dozens of phones showing ViX Micro key art for different vertical series",
    width: 1440,
    height: 540,
  },

  overview: [
    { term: "Role", detail: "Product Designer · led the end-to-end design" },
    {
      term: "Team",
      detail: "Product, Production and an external engineering agency · Finance as the requesting stakeholder",
    },
    { term: "Timeline", detail: "5 weeks of product design, then launch and iteration" },
    { term: "Platforms", detail: "iOS · Android" },
    { term: "Tools", detail: "Figma · v0 · Maze · AI-assisted research tools" },
    { term: "Outcome", detail: "+35% young users and +20% premium users in Mexico in six months" },
  ],

  context: [
    "ViX launched in 2022 as TelevisaUnivision's answer to declining TV subscriptions: a way to bring its audience into a digital, on-demand experience across mobile and smart TVs. By 2024 it had around 50 million monthly active users.",
    "Most of them, roughly 70%, were adults who came for soap operas and live sports. Younger users made up about 30%, and they mostly came for live sports without exploring the rest of the catalog.",
  ],
  problem: [
    "ViX was great at keeping the audience it already had, but it wasn't attracting younger users. The app was built for people who already knew what they wanted to watch: structured navigation, a large catalog and long episodes.",
    "The request came from Finance: they needed a way to attract younger audiences, and they needed it fast. That deadline shaped every decision that followed.",
  ],
  question:
    "How might we design an experience that matches the way younger audiences consume content today, without losing the users who already love ViX?",

  researchIntro:
    "I combined three sources to understand the gap between how young people consume video and what ViX offered:",
  researchSources: [
    {
      title: "Internal behavioral data",
      text: "How users discovered content, which sections they used, how long they stayed and where they dropped off.",
    },
    {
      title: "Benchmarks",
      text: "Short-form platforms (TikTok, Instagram Reels, Snapchat) and streaming services (Max, Prime Video, Netflix), focusing on session length and discovery mechanics.",
    },
    {
      title: "Conversations with potential users aged 16–25",
      text: "About the platforms and formats they use every day. I used Maze and AI-assisted research tools to explore early hypotheses and refine the interview questions before talking to them.",
    },
  ],
  findings: [
    { value: "4/5", text: "mainly watch short-form video on TikTok and Instagram Reels." },
    { value: "4/5", text: "prefer content they can finish in under two minutes, with no long-term commitment." },
    { value: "4/5", text: "use their phone as their main device for video." },
  ],
  insight:
    "Young users aren't short on content, they're overwhelmed by it. They rely on passive, feed-driven discovery instead of searching, and short content works as an entry point to longer stories.",
  hypotheses: [
    "Young users need a lighter, more immediate way to discover content than browsing a large catalog.",
    "Discovery should feel passive and continuous, like the platforms they already use.",
    "Less friction in the first interaction will increase engagement, especially on mobile.",
    "An immersive format can bridge the gap between discovering content and watching it.",
  ],

  alternatives: [
    { title: "Improve the existing browsing", text: "Better categories and more visible entry points.", chosen: false },
    {
      title: "A dedicated hub for young audiences",
      text: "Curated sections, leaving most of the work to writers and producers.",
      chosen: false,
    },
    { title: "A new immersive, lightweight discovery experience", text: "", chosen: true },
  ],
  alternativesNote:
    "The first two were easier to build, but they still relied on active browsing, which is exactly what young users don't do. We chose the third: harder, but aligned with how they already consume content.",
  interactionModel: [
    "I defined ViX Micro as a new vertical-first section inside the mobile app, built around one-minute episodes. The core decision was to remove the first choice: instead of asking users what to watch, content plays right away, so they can start watching passively.",
    "From there, I designed how users enter the experience, move between episodes and exit without losing their place in the rest of the app. We also proposed new UX patterns, key art and title structures for the format.",
    "The design reached beyond the interface: a one-minute vertical format changes how stories are written, shot and produced, which became the hardest part of the project (more below). And because ViX's adult audience was happy with the platform, every decision had to work for them too.",
  ],

  prototyping:
    "I used AI-assisted prototyping tools like v0 to explore interaction models quickly and cut iteration time. Instead of polishing one idea at a time, I could test several ways of entering, swiping and choosing the next episode, then refine the strongest one and validate it with real users from different audience types.",
  stakeholdersIntro:
    "Designing the experience was only half the work. The other half was getting three very different teams to build it, on a tight deadline.",
  stakeholders: [
    {
      team: "Finance",
      text: "Set the goal and the pace. Every proposal had to be something we could launch quickly, so speed was a design constraint from day one, not an afterthought.",
    },
    {
      team: "Production",
      text: "Was the biggest challenge. A one-minute vertical format meant asking production teams to change the way they had worked for years: scripts rewritten into one-minute chapters, no more than two or three people per scene, different cameras for vertical framing, and simpler sets that read on a phone screen. Convincing teams with a format proven over decades to rethink it completely was the hardest part of the project, and also what made ViX Micro possible.",
    },
    {
      team: "Engineering",
      text: "An external agency, was my partner throughout. I worked hand in hand with them from the first proposals to make sure every idea was feasible within our launch window, and I supervised their work so that what they built matched the approved designs.",
    },
  ],
  mvp: [
    "We launched with just 6 titles, available to every ViX user. Keeping it small let us learn from real behavior with little risk. We watched three signals: whether people started watching right away, how long they stayed and whether they kept watching more than one piece.",
    "Alongside the analytics (completion rate, session length, continuation), we interviewed a group of users who had tried the experience, to understand how they felt about control, navigation and the format itself.",
  ],
  dropOffs: [
    { step: "Entry → start watching", value: 20, label: "20%" },
    { step: "Start → finish a title", value: 38, label: "~38%" },
    { step: "Finish → watch another", value: 40, label: "40%" },
  ],
  dropOffNote:
    "The biggest drop came after finishing a title, which pointed straight at our next decision.",

  decisionsIntro: "The reception was very positive, and the MVP showed us what to fix.",
  decisions: [
    {
      title: "From autoplay to a selection layer",
      text: "At first, the next title played automatically as soon as one ended, so users never had to search. In interviews, users told us it felt too much like TikTok: it removed friction, but it also removed their sense of control, which matters in a streaming context. I replaced autoplay with a selection layer: when a title ends, users land on a menu and choose what to watch next. This targeted the biggest drop-off, right after finishing a title.",
    },
    {
      title: "Fixing the episode order",
      text: "Episodes weren't always presented in the right sequence, which broke the story. I restructured the content so episodes always follow a clear, logical order.",
    },
    {
      title: "An episode selector",
      text: "To jump to a specific episode, users had to click \"next\" or \"previous\" through all of them. I added a selector menu to go straight to the one they wanted.",
    },
    {
      title: "Sharing",
      text: "We added a share button so users could send a Micro to friends on other platforms. For now, only ViX users can open those links.",
    },
  ],
  decisionsNote:
    "I worked these changes through with the engineering agency and reviewed their implementation, so they shipped exactly as designed. Together, they made ViX Micro feel like part of a streaming platform rather than a social feed: less friction, but with clarity and story continuity.",

  sixMonths: [
    { value: "+35%", label: "Young users" },
    { value: "+20%", label: "Premium users in Mexico" },
    { value: "82%", label: "Of users who finished a title were 18–28, our target" },
    { value: "64%", label: "Of those were new to ViX" },
    { value: "+40%", label: "Screen time" },
    { value: "31 min", label: "Average time in the Micro section" },
    { value: "65", label: "Micros in the catalog, across 5 genres" },
  ],
  sixMonthsNote:
    "Drama and comedy led the way, and 31 minutes on average means users were watching a whole title without stopping.",
  yearOneIntro: "ViX Micro's first year, as a product built together with Product, Engineering and Production:",
  yearOne: [
    { value: "326M+", label: "Views on ViX" },
    { value: "84", label: "Micros released" },
    { value: "145", label: "Micros produced" },
    { value: "600+", label: "Actors" },
    { value: "60+", label: "Writers" },
    { value: "1.3B+", label: "Views on social media" },
    { value: "8.5M+", label: "Social media followers" },
    { value: "24M+", label: "Engagements" },
  ],
  yearOneNote:
    "The format also opened doors for new talent: productions can test new actors without committing to a full TV series or soap opera.",

  next: [
    {
      title: "Surfacing what performs best.",
      text: "We grouped titles by engagement and tested different levels of visual exposure, such as assigning several key visuals to a title and rotating them. Over time, this can grow into a data-driven system for prioritizing content and personalizing recommendations.",
    },
    {
      title: "Sharing as a growth channel.",
      text: "ViX blocks screenshots for copyright reasons, so sharing has to happen inside the product. We're prototyping links that let non-users watch a single episode, turning Micros from an engagement feature into a way to bring in new users.",
    },
  ],
  learnings: [
    "Designing for young audiences wasn't only about removing friction. It was about knowing when users need control, clarity and context. Autoplay was the most frictionless option, and it was the wrong one for a streaming platform.",
    "I also learned that launching a new format is as much about people as it is about screens. The interface was only one piece: the project worked because Finance, Production and Engineering could all see why each design decision mattered to them.",
    "If I kept working on ViX Micro, I'd focus on personalization and on strengthening the path from short-form discovery to long-form viewing.",
  ],
};
