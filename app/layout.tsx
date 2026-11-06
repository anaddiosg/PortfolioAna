import type { Metadata } from "next";
import { Instrument_Serif, Geist, Geist_Mono } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { hero, site } from "@/content/site";
import "./globals.css";

// Fonts are downloaded at build time and served from your own site (faster, private).
// Each one becomes a CSS variable that globals.css uses.
const serif = Instrument_Serif({
  weight: "400",
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-serif",
});
const sans = Geist({ subsets: ["latin"], variable: "--font-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--font-mono" });

// What appears in the browser tab and when the link is shared.
export const metadata: Metadata = {
  title: `${site.name} · ${site.role}`,
  description: `${hero.headline} ${hero.highlight}`,
};

// The layout wraps every page: header on top, footer at the bottom.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable} ${mono.variable}`}>
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
