import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "GYM TOUR - Virtuální fitness trenér vaší posilovny",
  description: "Moderní způsob jak poznat posilovnu ještě před první návštěvou. 360° virtuální prohlídka s interaktivním trenérem pro vaše zákazníky.",
  keywords: "virtuální prohlídka, fitness trenér, posilovna, 360°, gymtour, virtuální realita",
  authors: [{ name: "GYM TOUR" }],
  openGraph: {
    title: "GYM TOUR - Virtuální fitness trenér",
    description: "360° virtuální prohlídka posilovny s interaktivním trenérem",
    type: "website",
    locale: "cs_CZ"
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="cs">
        <head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#8B5CF6" />
        </head>
        <body className={inter.className}>{children}</body>
    </html>
  );
}