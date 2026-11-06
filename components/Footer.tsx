import { site } from "@/content/site";
import styles from "./Footer.module.css";

// The footer doubles as the Contact section, so it's one click away from any page.
export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className="container">
        <p className="label">
          <span className="dot" aria-hidden="true" /> Contact
        </p>

        <h2 className={styles.title}>
          Let&apos;s <em>talk</em>.
        </h2>

        <a href={`mailto:${site.email}`} className={styles.email}>
          {site.email}
        </a>

        <ul className={styles.links}>
          <li>
            <a href={site.linkedin} target="_blank" rel="noopener">
              LinkedIn ↗
            </a>
          </li>
          <li>
            <a href={site.cv} target="_blank" rel="noopener">
              Download CV ↗
            </a>
          </li>
        </ul>

        <p className={styles.legal}>
          © {new Date().getFullYear()} {site.name} · Designed in Figma, built with Next.js
        </p>
      </div>
    </footer>
  );
}
