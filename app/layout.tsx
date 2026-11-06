import type { Metadata } from "next";
import "./globals.css";

// Metadata = what appears in the browser tab and when the link is shared.
export const metadata: Metadata = {
  title: "Ana De Dios — Portfolio",
  description:
    "Product Designer who turns ideas into solid interfaces and clear, build-ready flows.",
};

// The layout wraps every page of the site.
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
