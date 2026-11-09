// The confibud case study page: /work/confibud
// Text lives in content/confibud.ts; shared blocks in components/Case.tsx;
// confibud's recreated diagrams in components/confibud/Visuals.tsx.
import type { Metadata } from "next";
import {
  Band,
  CaseHero,
  Callout,
  Cards,
  Figure,
  Gallery,
  NextCase,
  Prose,
  Section,
  Stats,
  Steps,
  Subhead,
  Timeline,
} from "@/components/Case";
import { ArticleBeforeAfter, Flywheel, InfoArchitecture, StatesMock } from "@/components/confibud/Visuals";
import { confibud as c } from "@/content/confibud";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "confibud · Ana De Dios Gibson",
  description: c.lead,
  openGraph: { title: "confibud · Ana De Dios Gibson", description: c.lead },
};

export default function ConfibudCaseStudy() {
  return (
    <article className={styles.page}>
      <CaseHero label={c.label} title={c.title} lead={c.lead} cover={c.cover} overview={c.overview} />
      <div className="container">
        <a href={c.appStore} target="_blank" rel="noopener" className={styles.store}>
          See confibud on the App Store ↗
        </a>
      </div>

      <Section number="01" title="Context and problem">
        <Prose paragraphs={[c.context]} />
        <Subhead>The problem</Subhead>
        <Prose paragraphs={c.problem} />
        <Callout kicker="How might we">{c.question}</Callout>
      </Section>

      <Section number="02" title="Research and what we learned">
        <Prose paragraphs={c.research} />
        <Subhead>What we learned</Subhead>
        <Stats items={c.findings} />
        <Steps
          items={c.journey}
          caption="Journey map: how young people looked for answers before confibud · recreated for this case study"
        />
        <Callout kicker="Key insight">{c.insight}</Callout>
        <Subhead>Objective</Subhead>
        <Prose paragraphs={[c.objective]} />
      </Section>

      <Section number="03" title="Defining the product">
        <Subhead>Information architecture</Subhead>
        <Prose paragraphs={[c.architecture]} />
        <InfoArchitecture categories={c.categories} anatomy={c.articleAnatomy} />

        <Subhead>Key flows</Subhead>
        <Prose paragraphs={[c.flowsIntro]} />
        <Cards items={c.flows.map((f) => ({ title: f.title, text: f.text }))} />
        <Gallery
          items={[
            {
              src: "/images/confibud/screen-home.png",
              alt: "confibud home dashboard with popular categories and new articles",
              caption: "Home dashboard by category",
              width: 687,
              height: 1400,
            },
            {
              src: "/images/confibud/screen-notifications.png",
              alt: "confibud notifications listing the latest articles",
              caption: "Notifications for new articles",
              width: 687,
              height: 1400,
            },
            {
              src: "/images/confibud/screen-ask.png",
              alt: "confibud screen where users type and send their own question",
              caption: "Ask your own question",
              width: 687,
              height: 1400,
            },
          ]}
        />
        <Steps
          items={c.questionLoop}
          loop="Real questions became new articles for everyone"
          caption="From a private question to a published article · recreated for this case study"
        />
      </Section>

      <Section number="04" title="Design and development, side by side">
        <Prose paragraphs={c.devIntro} />
        <Cards items={c.devPractices.map((p) => ({ title: p.title, text: p.text }))} />
        <StatesMock />
      </Section>

      {/* The business section stands out on a turquoise band */}
      <Band>
        <Section number="05" title="Contributors, money and growth">
          <Prose paragraphs={[c.businessIntro]} />
          <Flywheel />
          <Cards
            items={c.business.map((b) => ({
              title: b.title,
              text: b.text,
              highlight: b.title === "Keeping it free with ads",
            }))}
          />
          <Figure
            src="/images/confibud/screen-article.png"
            alt="A confibud article showing the author's name and credentials, save, share and listen options, and an ad at the bottom"
            width={687}
            height={1400}
            caption="A live article: the author and credentials up top, the read-aloud option, and an ad that doesn't interrupt reading. Captured before the switch to left-aligned text."
            tone="plain"
            phone
          />
        </Section>
      </Band>

      <Section number="06" title="The CMS">
        <Prose paragraphs={[c.cmsIntro]} />
        <div className={styles.listProse}>
          <ul>
            {c.cmsFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
        <Figure
          src="/images/confibud/cms.png"
          alt="The confibud CMS on a laptop, showing the contributors list (names and emails blurred for privacy)"
          width={2000}
          height={1081}
          caption="The confibud CMS · contributor names and emails blurred for privacy"
          tone="plain"
        />
        <Steps items={c.cmsFlow} caption="From applicant to published article · recreated for this case study" />
        <Prose paragraphs={[c.cmsNote]} />
      </Section>

      <Section number="07" title="Launch, testing and iteration">
        <Prose paragraphs={[c.testingIntro]} />
        <ol className={styles.findings}>
          {c.testFindings.map((f, i) => (
            <li key={f.title}>
              <span className={styles.findingNumber}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <ArticleBeforeAfter />
        <Subhead>Release history</Subhead>
        <Prose paragraphs={[c.releasesIntro]} />
        <Timeline items={c.releases} caption="Release history from the App Store, April 2022 to August 2024" />
      </Section>

      <Section number="08" title="Results and learnings">
        <Prose paragraphs={[c.metricsNote]} />
        <Subhead>In the first two months</Subhead>
        <Stats items={c.results} highlight />
        <Prose paragraphs={[c.resultsNote]} />
        <Callout kicker={c.reviewNote}>&ldquo;{c.review}&rdquo;</Callout>
        <Subhead>What I learned</Subhead>
        <Prose paragraphs={c.learnings} />
      </Section>

      <NextCase title="ViX Micro" href="/work/vix-micro" ready />
    </article>
  );
}
