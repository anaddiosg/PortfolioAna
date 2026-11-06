import Link from "next/link";
import { site } from "@/content/site";
import styles from "./Header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        {/* Wordmark: links back to Home */}
        <Link href="/" className={styles.wordmark} aria-label={`${site.name}, home`}>
          A<span className="dot" aria-hidden="true" />DIOS
        </Link>

        <nav aria-label="Main">
          <ul className={styles.nav}>
            <li>
              <Link href="/#work">Work</Link>
            </li>
            <li>
              <Link href="/#contact">Contact</Link>
            </li>
            <li>
              <a href={site.cv} className={styles.cv} target="_blank" rel="noopener">
                CV
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
