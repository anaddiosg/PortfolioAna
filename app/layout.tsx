import type { Metadata } from "next";
import { Bricolage_Grotesque, Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hero, site } from "@/content/site";
import "./globals.css";

// Fonts are downloaded at build time and served from your own site (faster, private).
// Each one becomes a CSS variable that globals.css uses.
// Bricolage Grotesque for headlines (used in Light, weight 300), Geist for body text.
const display = Bricolage_Grotesque({ subsets: ["latin"], variable: "--font-display" });
const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

// What appears in the browser tab and when the link is shared.
export const metadata: Metadata = {
  metadataBase: new URL("https://anadedios.vercel.app"),
  title: `${site.name} · ${site.role}`,
  description: `${hero.headline} ${hero.highlight}`,
  // How the link looks when it's shared on LinkedIn, WhatsApp, Slack, etc.
  openGraph: {
    type: "website",
    siteName: `${site.name} · ${site.role}`,
    locale: "en_US",
    title: `${site.name} · ${site.role}`,
    description: `${hero.headline} ${hero.highlight}`,
  },
  twitter: { card: "summary_large_image" },
};

// The layout wraps every page: header on top, footer at the bottom.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} ${mono.variable}`}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
