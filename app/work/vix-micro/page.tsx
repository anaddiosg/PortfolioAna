// The ViX Micro case study page: /work/vix-micro
// Text lives in content/vix-micro.ts; the building blocks live in components/Case.tsx.
import type { Metadata } from "next";
import {
  Bars,
  CaseHero,
  Callout,
  Cards,
  Figure,
  Gallery,
  NextCase,
  Prose,
  Section,
  Stats,
  Subhead,
} from "@/components/Case";
import { vixMicro as c } from "@/content/vix-micro";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "ViX Micro · Ana De Dios Gibson",
  description: c.lead,
};

export default function VixMicroCaseStudy() {
  return (
    <article className={styles.page}>
      <CaseHero label={c.label} title={c.title} lead={c.lead} cover={c.cover} overview={c.overview} />

      <Section number="01" title="Context and problem">
        <Prose paragraphs={c.context} />
        <Figure
          src="/images/vix-micro/vix-desktop.jpg"
          alt="The ViX home page on the web"
          width={2000}
          height={836}
          caption="ViX, TelevisaUnivision's streaming platform"
          wide
        />
        <Subhead>The problem</Subhead>
        <Prose paragraphs={c.problem} />
        <Callout kicker="How might we">{c.question}</Callout>
      </Section>

      <Section number="02" title="Research, insights and hypotheses">
        <Prose paragraphs={[c.researchIntro]} />
        <Cards items={c.researchSources.map((s) => ({ title: s.title, text: s.text }))} />

        <Subhead>What we learned</Subhead>
        <Stats items={c.findings.map((f) => ({ value: f.value, label: f.text }))} />
        <Callout kicker="Key insight">{c.insight}</Callout>

        <Subhead>Hypotheses</Subhead>
        <div className={styles.listProse}>
          <ol>
            {c.hypotheses.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ol>
        </div>
      </Section>

      <Section number="03" title="Alternatives and the interaction model">
        <Subhead>Three directions we considered</Subhead>
        <Cards
          items={c.alternatives.map((a, i) => ({
            kicker: `Option ${i + 1}`,
            title: a.title,
            text: a.text || undefined,
            highlight: a.chosen,
            tag: a.chosen ? "Chosen" : undefined,
          }))}
        />
        <Prose paragraphs={[c.alternativesNote]} />

        <Subhead>The interaction model</Subhead>
        <Prose paragraphs={c.interactionModel} />
        <Figure
          src="/images/vix-micro/flow-mvp.png"
          alt="User flow from opening the ViX app, choosing a profile and reaching the Micros section to watching an episode"
          width={2400}
          height={1820}
          caption="The first flow: from opening the app to watching a Micro"
          wide
          tone="dark"
        />
      </Section>

      <Section number="04" title="Prototyping, stakeholders and MVP">
        <Subhead>Prototyping with AI</Subhead>
        <Prose paragraphs={[c.prototyping]} />

        <Subhead>Getting everyone on board</Subhead>
        <Prose paragraphs={[c.stakeholdersIntro]} />
        <Cards
          items={c.stakeholders.map((s) => ({
            title: s.team,
            text: s.text,
            highlight: s.team === "Production",
            tag: s.team === "Production" ? "Biggest challenge" : undefined,
          }))}
        />

        <Subhead>A focused MVP</Subhead>
        <Prose paragraphs={c.mvp} />

        <Subhead>Where people dropped off</Subhead>
        <Bars items={c.dropOffs} />
        <Prose paragraphs={[c.dropOffNote]} />
      </Section>

      <Section number="05" title="Key decisions after launch">
        <Prose paragraphs={[c.decisionsIntro]} />
        <ol className={styles.decisions}>
          {c.decisions.map((d, i) => (
            <li key={d.title}>
              <span className={styles.decisionNumber}>{String(i + 1).padStart(2, "0")}</span>
              <div>
                <h4>{d.title}</h4>
                <p>{d.text}</p>
              </div>
            </li>
          ))}
        </ol>
        <Prose paragraphs={[c.decisionsNote]} />
        <Figure
          src="/images/vix-micro/flow-final.png"
          alt="Final user flow including the share sheet and the episode selector"
          width={2400}
          height={1496}
          caption="The final flow, with the share button and the episode selector"
          wide
          tone="dark"
        />
        <Gallery
          items={[
            {
              src: "/images/vix-micro/screen-home.png",
              alt: "ViX home screen featuring a ViX Micro title",
              caption: "ViX Micro on the home screen",
              width: 687,
              height: 1400,
            },
            {
              src: "/images/vix-micro/screen-micros.png",
              alt: "The Micros section with a grid of vertical series",
              caption: "The Micros section",
              width: 687,
              height: 1400,
            },
            {
              src: "/images/vix-micro/screen-player.png",
              alt: "Vertical player showing episode 1 with share and episode controls",
              caption: "The vertical player",
              width: 687,
              height: 1400,
            },
          ]}
        />
      </Section>

      <Section number="06" title="Results">
        <Subhead>In the first six months</Subhead>
        <Stats items={c.sixMonths} highlight />
        <Prose paragraphs={[c.sixMonthsNote]} />

        <Subhead>Year one at a glance</Subhead>
        <Prose paragraphs={[c.yearOneIntro]} />
        <Stats items={c.yearOne} />
        <Prose paragraphs={[c.yearOneNote]} />
      </Section>

      <Section number="07" title="What's next and learnings">
        <Subhead>What I'm working on now</Subhead>
        <div className={styles.listProse}>
          <ul>
            {c.next.map((n) => (
              <li key={n.title}>
                <strong>{n.title}</strong> {n.text}
              </li>
            ))}
          </ul>
        </div>
        <Subhead>What I learned</Subhead>
        <Prose paragraphs={c.learnings} />
      </Section>

      <NextCase title="confibud" href="/work/confibud" ready />
    </article>
  );
}
