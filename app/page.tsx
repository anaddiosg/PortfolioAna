import ProjectCard from "@/components/ProjectCard";
import { hero, projects, proofPoints, site } from "@/content/site";
import styles from "./page.module.css";

// The Home page ("/"): hero, proof points and selected work.
export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className={`container ${styles.hero}`}>
        <p className={`label ${styles.heroLabel}`}>
          <span className="dot" aria-hidden="true" />
          <span className={styles.name}>{site.name}</span>
          <span>
            {site.role} · {site.location}
          </span>
        </p>

        <h1 className={styles.headline}>
          {hero.headline} <em>{hero.highlight}</em>
        </h1>

        <p className={styles.intro}>{hero.intro}</p>

        {/* Three numbers that prove the claim */}
        <ul className={styles.proof}>
          {proofPoints.map((point) => (
            <li key={point.value}>
              <span className={styles.value}>{point.value}</span>
              <span className={styles.proofLabel}>{point.label}</span>
              <span className={styles.source}>{point.source}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* SELECTED WORK */}
      <section id="work" className={`container ${styles.work}`}>
        <h2 className="label">
          <span className="dot" aria-hidden="true" /> Selected work
        </h2>

        <div className={styles.projects}>
          {projects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
