// The About page: /about
// Text lives in content/about.ts.
import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { about } from "@/content/about";
import { site } from "@/content/site";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: `About · ${site.name}`,
  description: about.headline,
};

export default function AboutPage() {
  return (
    <>
      {/* INTRO: story on the left, photo on the right */}
      <section className={`container ${styles.intro}`}>
        <div className={styles.introText}>
          <p className="label">
            <span className="dot" aria-hidden="true" /> About
          </p>
          <h1 className={styles.headline}>{about.headline}</h1>
          <div className={styles.story}>
            {about.story.map((p) => (
              <p key={p}>{p}</p>
            ))}
          </div>
          <a href={site.cv} className={styles.cvButton} target="_blank" rel="noopener">
            Download my CV ↗
          </a>
        </div>
        <div className={styles.photo}>
          <Image
            src={about.photo.src}
            alt={about.photo.alt}
            width={about.photo.width}
            height={about.photo.height}
            priority
            sizes="(max-width: 900px) 80vw, 420px"
          />
        </div>
      </section>

      {/* HOW I WORK */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>How I work</h2>
        <ol className={styles.principles}>
          {about.principles.map((p, i) => (
            <li key={p.title}>
              <span className={styles.number}>{String(i + 1).padStart(2, "0")}</span>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* EXPERIENCE */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Experience</h2>
        <ol className={styles.experience}>
          {about.experience.map((job) => (
            <li key={job.company}>
              <span className={styles.years}>{job.years}</span>
              <div>
                <h3>
                  {job.role} <span className={styles.company}>· {job.company}</span>
                </h3>
                <p>{job.text}</p>
                {job.link && (
                  <Link href={job.link.href} className={styles.caseLink}>
                    {job.link.label} →
                  </Link>
                )}
              </div>
            </li>
          ))}
        </ol>
      </section>

      {/* RECOMMENDATIONS */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>What people I&apos;ve worked with say</h2>
        <ul className={styles.quotes}>
          {about.recommendations.map((r) => (
            <li key={r.name}>
              <blockquote>&ldquo;{r.quote}&rdquo;</blockquote>
              <p className={styles.quoteName}>{r.name}</p>
              <p className={styles.quoteRole}>{r.role}</p>
              <p className={styles.quoteRelation}>{r.relation}</p>
            </li>
          ))}
        </ul>
        <a href={site.linkedin} className={styles.caseLink} target="_blank" rel="noopener">
          Read the full recommendations on LinkedIn ↗
        </a>
      </section>

      {/* SKILLS, TOOLS, EDUCATION */}
      <section className={`container ${styles.section}`}>
        <h2 className={styles.sectionTitle}>Skills, tools and education</h2>
        <dl className={styles.details}>
          {about.details.map((d) => (
            <div key={d.term}>
              <dt>{d.term}</dt>
              <dd>{d.detail}</dd>
            </div>
          ))}
        </dl>
      </section>
    </>
  );
}
