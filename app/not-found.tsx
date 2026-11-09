import Link from "next/link";

// Shown when someone opens a page that doesn't exist.
export default function NotFound() {
  return (
    <section className="container" style={{ paddingBlock: "clamp(80px, 14vw, 160px)" }}>
      <p className="label">
        <span className="dot" aria-hidden="true" /> 404
      </p>
      <h1
        style={{
          marginTop: 24,
          fontFamily: "var(--display)",
          fontWeight: "var(--display-weight)",
          fontSize: "clamp(40px, 7vw, 88px)",
          lineHeight: 1.05,
          letterSpacing: "-0.03em",
        }}
      >
        This page doesn&apos;t exist.
      </h1>
      <p style={{ marginTop: 24, fontSize: 18 }}>
        <Link href="/" style={{ color: "var(--violet)", display: "inline-block", paddingBlock: 6 }}>
          Go back to the home page →
        </Link>
      </p>
    </section>
  );
}
