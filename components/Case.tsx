// Building blocks shared by every case study page (ViX Micro now, confibud next).
import Image from "next/image";
import Link from "next/link";
import styles from "./Case.module.css";

/* Hero: label, big title, one-line lead, cover image and the overview table */
export function CaseHero({
  label,
  title,
  lead,
  cover,
  overview,
}: {
  label: string;
  title: string;
  lead: string;
  cover: { src: string; alt: string; width: number; height: number };
  overview: { term: string; detail: string }[];
}) {
  return (
    <header className={styles.hero}>
      <div className="container">
        <Link href="/#work" className={styles.back}>
          ← All work
        </Link>
        <p className="label">
          <span className="dot" aria-hidden="true" /> {label}
        </p>
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.lead}>{lead}</p>
      </div>

      <div className={`container ${styles.coverWrap}`}>
        <Image
          src={cover.src}
          alt={cover.alt}
          width={cover.width}
          height={cover.height}
          priority
          sizes="(max-width: 1200px) 100vw, 1200px"
          className={styles.cover}
        />
      </div>

      <div className="container">
        <dl className={styles.overview}>
          {overview.map((item) => (
            <div key={item.term}>
              <dt>{item.term}</dt>
              <dd>{item.detail}</dd>
            </div>
          ))}
        </dl>
      </div>
    </header>
  );
}

/* A numbered chapter of the case study */
export function Section({
  number,
  title,
  children,
}: {
  number: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className={`container ${styles.section}`}>
      <div className={styles.sectionHead}>
        <span className={styles.number}>{number}</span>
        <h2 className={styles.sectionTitle}>{title}</h2>
      </div>
      <div className={styles.sectionBody}>{children}</div>
    </section>
  );
}

/* Smaller heading inside a section */
export function Subhead({ children }: { children: React.ReactNode }) {
  return <h3 className={styles.subhead}>{children}</h3>;
}

/* Body text kept to a comfortable reading width */
export function Prose({ paragraphs }: { paragraphs: string[] }) {
  return (
    <div className={styles.prose}>
      {paragraphs.map((p) => (
        <p key={p}>{p}</p>
      ))}
    </div>
  );
}

/* Highlighted quote or key insight */
export function Callout({ children, kicker }: { children: React.ReactNode; kicker?: string }) {
  return (
    <blockquote className={styles.callout}>
      {kicker && <p className="label">{kicker}</p>}
      <p>{children}</p>
    </blockquote>
  );
}

/* An image with a caption.
   wide: lets it break out of the text column.
   tone: "card" = white frame (photos), "dark" = dark panel (flows with white arrows),
         "plain" = no frame at all (transparent PNGs). */
export function Figure({
  src,
  alt,
  width,
  height,
  caption,
  wide = false,
  phone = false,
  tone = "card",
}: {
  src: string;
  alt: string;
  width: number;
  height: number;
  caption?: string;
  wide?: boolean;
  /* phone: a single phone screen, shown small and centered */
  phone?: boolean;
  tone?: "card" | "dark" | "plain";
}) {
  return (
    <figure
      className={`${styles.figure} ${styles[tone]} ${wide ? styles.wide : ""} ${phone ? styles.phoneFig : ""}`}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        sizes={wide ? "(max-width: 1200px) 100vw, 1200px" : "(max-width: 760px) 100vw, 720px"}
      />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/* Big numbers in a grid */
export function Stats({
  items,
  highlight = false,
}: {
  items: { value: string; label: string }[];
  highlight?: boolean;
}) {
  return (
    <ul className={`${styles.stats} ${highlight ? styles.statsHighlight : ""}`}>
      {items.map((item) => (
        <li key={item.label}>
          <span className={styles.statValue}>{item.value}</span>
          <span className={styles.statLabel}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

/* Cards in a row: options, teams, sources... */
export function Cards({
  items,
}: {
  items: { kicker?: string; title: string; text?: string; highlight?: boolean; tag?: string }[];
}) {
  return (
    <ul className={styles.cards}>
      {items.map((item) => (
        <li key={item.title} className={item.highlight ? styles.cardHighlight : undefined}>
          {(item.kicker || item.tag) && (
            <p className={styles.cardTop}>
              {item.kicker && <span className="label">{item.kicker}</span>}
              {item.tag && <span className={styles.tag}>{item.tag}</span>}
            </p>
          )}
          <h4 className={styles.cardTitle}>{item.title}</h4>
          {item.text && <p className={styles.cardText}>{item.text}</p>}
        </li>
      ))}
    </ul>
  );
}

/* Horizontal bars, e.g. drop-off per step */
export function Bars({ items }: { items: { step: string; value: number; label: string }[] }) {
  const max = Math.max(...items.map((i) => i.value));
  return (
    <ul className={styles.bars}>
      {items.map((item) => (
        <li key={item.step}>
          <span className={styles.barStep}>{item.step}</span>
          <span className={styles.barTrack} aria-hidden="true">
            <span
              className={`${styles.barFill} ${item.value === max ? styles.barMax : ""}`}
              style={{ width: `${(item.value / max) * 100}%` }}
            />
          </span>
          <span className={styles.barValue}>{item.label}</span>
        </li>
      ))}
    </ul>
  );
}

/* Phone screens side by side, each with a short caption */
export function Gallery({
  items,
  narrow = false,
}: {
  items: { src: string; alt: string; caption: string; width: number; height: number }[];
  /* narrow: caps each image at its real size, for low-resolution screens */
  narrow?: boolean;
}) {
  return (
    <div className={`${styles.gallery} ${narrow ? styles.galleryNarrow : ""}`}>
      {items.map((item) => (
        <figure key={item.src} className={`${styles.figure} ${styles.plain}`}>
          <Image
            src={item.src}
            alt={item.alt}
            width={item.width}
            height={item.height}
            sizes="(max-width: 760px) 33vw, 400px"
          />
          <figcaption>{item.caption}</figcaption>
        </figure>
      ))}
    </div>
  );
}

/* A chain of steps with arrows between them (journeys, flows, processes).
   Steps marked "pain" get a highlight; "loop" adds a note that the last step feeds the first. */
export function Steps({
  items,
  caption,
  loop,
}: {
  items: { title: string; note?: string; pain?: boolean }[];
  caption?: string;
  loop?: string;
}) {
  return (
    <figure className={styles.stepsFigure}>
      <ol className={styles.steps}>
        {items.map((item, i) => (
          <li key={item.title} className={item.pain ? styles.stepPain : undefined}>
            <span className={styles.stepNumber}>{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.stepTitle}>{item.title}</span>
            {item.note && <span className={styles.stepNote}>{item.note}</span>}
          </li>
        ))}
      </ol>
      {loop && <p className={styles.loop}>↺ {loop}</p>}
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/* Dated milestones on a vertical line */
export function Timeline({
  items,
  caption,
}: {
  items: { date: string; title: string; text: string }[];
  caption?: string;
}) {
  return (
    <figure className={styles.timelineFigure}>
      <ol className={styles.timeline}>
        {items.map((item) => (
          <li key={item.date}>
            <span className={styles.timelineDate}>{item.date}</span>
            <div>
              <h4>{item.title}</h4>
              <p>{item.text}</p>
            </div>
          </li>
        ))}
      </ol>
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
}

/* A full-width colored band that makes one section stand out */
export function Band({ children }: { children: React.ReactNode }) {
  return <div className={styles.band}>{children}</div>;
}

/* Link to the next case study at the bottom of the page */
export function NextCase({ title, href, ready }: { title: string; href: string; ready: boolean }) {
  return (
    <nav className={`container ${styles.next}`} aria-label="Next case study">
      <p className="label">Next case study</p>
      {ready ? (
        <Link href={href} className={styles.nextTitle}>
          {title} →
        </Link>
      ) : (
        <p className={styles.nextTitle}>
          {title} <span className={styles.soon}>Coming soon</span>
        </p>
      )}
    </nav>
  );
}
