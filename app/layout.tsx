import "./globals.css";
import React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

// Konfigurace písma Inter
const inter = Inter({ subsets: ["latin"] });

// Definice metadata pro SEO (titulek, popisek, atd.)
export const metadata: Metadata = {
  title: {
    default: "Virtuální fitness trenér | GYMTOUR",
    template: "%s | GYMTOUR",
  },
  description: "Virtuální prohlídka Vaší posilovny, která opravdu zaujme!",
  type: "website",
  locale: "cs_CZ",
};

// RootLayout komponenta (obal pro všechny stránky)
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
