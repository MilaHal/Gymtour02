import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Virtuální fitness trenér | GYMTOUR",
    template: "%s | GYMTOUR",
  },
  description: "Virtuální prohlídka Vaší posilovny, která opravdu zaujme!",
  type: "website",
  locale: "cs-CZ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={inter.className}>
      <head />
      <body>{children}</body>
    </html>
  );
}

