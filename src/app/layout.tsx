import type { Metadata } from "next";
import { Jost, Quicksand, Open_Sans } from "next/font/google";
import "./globals.css";

/* ─────────────────────────────────────────────
   TYPOS — Charte Les Agents de l'Immobilier
   
   Jost       : titres display (h1, gros statements)
   Quicksand  : sous-titres, h4/h5, labels
   Open Sans  : corps de texte, données techniques
   ───────────────────────────────────────────── */

const jost = Jost({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const quicksand = Quicksand({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const openSans = Open_Sans({
  variable: "--font-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Les Agents de l'Immobilier — Achat, Vente, Estimation",
  description:
    "Agence immobilière indépendante. Achat, vente et estimation de biens immobiliers. Accompagnement personnalisé pour chaque projet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${jost.variable} ${quicksand.variable} ${openSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
