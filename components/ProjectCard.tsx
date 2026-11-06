import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/content/site";
import styles from "./ProjectCard.module.css";

// One card per case study on the Home page.
// While a case study isn't ready, the card shows "Case study in progress" instead of a link.
export default function ProjectCard({ project, index }: { project: Project; index: number }) {
  const content = (
    <>
      <div className={styles.media}>
        <Image
          src={project.image}
          alt={project.imageAlt}
          width={342}
          height={442}
          sizes="(max-width: 760px) 100vw, 40vw"
        />
      </div>

      <div className={styles.body}>
        <p className="label">
          {String(index + 1).padStart(2, "0")} · {project.tags.join(" · ")}
        </p>
        <h3 className={styles.title}>{project.title}</h3>
        <p className={styles.summary}>{project.summary}</p>

        <ul className={styles.metrics}>
          {project.metrics.map((metric) => (
            <li key={metric}>{metric}</li>
          ))}
        </ul>

        <p className={styles.cta}>
          {project.ready ? "Read the case study →" : "Case study in progress"}
        </p>
      </div>
    </>
  );

  return project.ready ? (
    <Link href={`/work/${project.slug}`} className={`${styles.card} ${styles.linked}`}>
      {content}
    </Link>
  ) : (
    <article className={styles.card}>{content}</article>
  );
}
