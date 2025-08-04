import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Virtuální fitness trenér | GYMTOUR",
    template: "%s | GYMTOUR"
  },
  description: "Virtuální prohlídka Vaší posilovny, která opravdu zaujme!."
}
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
Aktualizace metadata (title + description)
