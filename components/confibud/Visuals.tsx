// Diagrams recreated for the confibud case study (the original Adobe XD files were lost).
// They're drawn in code so they stay sharp on any screen.
import styles from "./Visuals.module.css";

/* The business cycle: free content → users → ad revenue → paid contributors → more experts */
export function Flywheel() {
  const box = (cx: number, cy: number, main = false) => (
    <rect
      x={cx - 105}
      y={cy - 30}
      width={210}
      height={60}
      rx={12}
      className={main ? styles.fwMain : styles.fwBox}
    />
  );
  return (
    <figure className={styles.flywheel}>
      <svg viewBox="0 0 760 430" role="img" aria-labelledby="fw-title">
        <title id="fw-title">
          confibud's business cycle: free, reliable articles bring young users; curated ads generate
          revenue; revenue pays contributors; more experts write more articles. Users never pay.
        </title>
        <defs>
          <marker id="fw-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
            <path d="M0 0L10 5L0 10z" className={styles.fwArrowHead} />
          </marker>
        </defs>
        <g className={styles.fwLines}>
          <path d="M486 92 Q 570 110 610 160" markerEnd="url(#fw-arrow)" />
          <path d="M620 226 Q 620 292 578 334" markerEnd="url(#fw-arrow)" />
          <path d="M420 370 L 340 370" markerEnd="url(#fw-arrow)" />
          <path d="M182 334 Q 140 292 140 226" markerEnd="url(#fw-arrow)" />
          <path d="M150 160 Q 190 110 274 92" markerEnd="url(#fw-arrow)" />
        </g>

        {box(380, 80, true)}
        <text x="380" y="76" className={styles.fwNameMain}>Free, reliable articles</text>
        <text x="380" y="96" className={styles.fwSubMain}>the core of the product</text>

        {box(625, 194)}
        <text x="625" y="190" className={styles.fwName}>More young users</text>
        <text x="625" y="210" className={styles.fwSub}>podcasts + Instagram Lives</text>

        {box(525, 370)}
        <text x="525" y="366" className={styles.fwName}>Ad revenue</text>
        <text x="525" y="386" className={styles.fwSub}>curated Google Ads</text>

        {box(235, 370)}
        <text x="235" y="366" className={styles.fwName}>Paid contributors</text>
        <text x="235" y="386" className={styles.fwSub}>paid per article</text>

        {box(135, 194)}
        <text x="135" y="190" className={styles.fwName}>More experts writing</text>
        <text x="135" y="210" className={styles.fwSub}>profiles + visibility</text>

        <text x="380" y="236" className={styles.fwCenter}>Users never pay</text>
        <text x="380" y="262" className={styles.fwCenterSub}>reliable information, free for everyone</text>
      </svg>
      <figcaption>confibud&apos;s business cycle · recreated for this case study</figcaption>
    </figure>
  );
}

/* Information architecture: categories → article anatomy */
export function InfoArchitecture({ categories, anatomy }: { categories: string[]; anatomy: string[] }) {
  return (
    <figure className={styles.ia}>
      <div className={styles.iaRoot}>confibud</div>
      <div className={styles.iaArrow} aria-hidden="true">↓</div>
      <p className={styles.iaLabel}>5 launch categories, chosen with users</p>
      <ul className={styles.iaCategories}>
        {categories.map((c) => (
          <li key={c}>{c}</li>
        ))}
      </ul>
      <div className={styles.iaArrow} aria-hidden="true">↓</div>
      <p className={styles.iaLabel}>Every article, same structure</p>
      <ol className={styles.iaArticle}>
        {anatomy.map((a) => (
          <li key={a}>{a}</li>
        ))}
      </ol>
      <p className={styles.iaExtras}>
        Also in the app: notifications · ask a question · contributor profiles (added after testing)
      </p>
      <figcaption>Information architecture · recreated for this case study</figcaption>
    </figure>
  );
}

/* One screen in four states, drawn as simple wireframes */
export function StatesMock() {
  return (
    <figure className={styles.states}>
      <div className={styles.statesRow}>
        <div className={styles.stateItem}>
          <div className={styles.phone}>
            <div className={styles.emptyIcon} />
            <span className={styles.lineShort} />
            <span className={styles.lineMid} />
            <span className={styles.button} />
          </div>
          <p className={styles.stateLabel}>Empty</p>
          <p className={styles.stateNote}>What users see when there is nothing to show yet.</p>
        </div>
        <div className={styles.stateItem}>
          <div className={styles.phone}>
            <span className={`${styles.skeleton} ${styles.skeletonImage}`} />
            <span className={styles.skeleton} />
            <span className={`${styles.skeleton} ${styles.skeletonShort}`} />
            <span className={`${styles.skeleton} ${styles.skeletonImage}`} />
            <span className={styles.skeleton} />
          </div>
          <p className={styles.stateLabel}>Loading</p>
          <p className={styles.stateNote}>Placeholders keep the layout stable while articles load.</p>
        </div>
        <div className={styles.stateItem}>
          <div className={styles.phone}>
            <div className={styles.errorIcon}>!</div>
            <span className={styles.lineMid} />
            <span className={styles.lineShort} />
            <span className={styles.button} />
          </div>
          <p className={styles.stateLabel}>Error</p>
          <p className={styles.stateNote}>A clear message and a way to try again.</p>
        </div>
        <div className={styles.stateItem}>
          <div className={styles.phone}>
            <span className={`${styles.skeleton} ${styles.skeletonImage}`} />
            <p className={styles.longTitle}>¿Hay algún impuesto que se paga por uso de Terminal Punto de Venta en Negocios?</p>
            <span className={styles.lineMid} />
          </div>
          <p className={styles.stateLabel}>Edge case: long title</p>
          <p className={styles.stateNote}>Long titles wrap cleanly instead of breaking the card on small screens.</p>
        </div>
      </div>
      <figcaption>States and edge cases · recreated for this case study</figcaption>
    </figure>
  );
}

/* An article before and after usability testing */
export function ArticleBeforeAfter() {
  return (
    <figure className={styles.beforeAfter}>
      <div className={styles.baRow}>
        <div className={styles.baItem}>
          <p className={styles.baLabel}>Before</p>
          <div className={styles.article}>
            <span className={styles.titleBar} />
            <span className={`${styles.titleBar} ${styles.titleBarShort}`} />
            <div className={styles.justified}>
              {Array.from({ length: 7 }).map((_, i) => (
                <span key={i} className={styles.justifiedLine} />
              ))}
            </div>
          </div>
          <ul className={styles.baNotes}>
            <li>No image</li>
            <li>No visible author</li>
            <li>Justified text with uneven gaps</li>
          </ul>
        </div>
        <div className={styles.baItem}>
          <p className={`${styles.baLabel} ${styles.baLabelAfter}`}>After</p>
          <div className={styles.article}>
            <span className={styles.articleImage} />
            <span className={styles.titleBar} />
            <span className={`${styles.titleBar} ${styles.titleBarShort}`} />
            <div className={styles.author}>
              <span className={styles.avatar} />
              <span className={styles.authorLines}>
                <span className={styles.authorName} />
                <span className={styles.authorCred} />
              </span>
              <span className={styles.socials}>
                <span />
                <span />
              </span>
            </div>
            <div className={styles.leftAligned}>
              {[92, 100, 84, 96, 70, 88, 60].map((w, i) => (
                <span key={i} style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
          <ul className={styles.baNotes}>
            <li>Required image</li>
            <li>Author photo, credentials and social links</li>
            <li>Left-aligned text</li>
          </ul>
        </div>
      </div>
      <figcaption>An article before and after usability testing · recreated for this case study</figcaption>
    </figure>
  );
}
