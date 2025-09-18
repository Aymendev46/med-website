import type { Metadata } from "next";
import { Manrope, Playfair_Display } from "next/font/google";
import "./globals.css";

const heading = Playfair_Display({
  variable: "--font-heading",
  subsets: ["latin"],
  display: "swap",
});

const body = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://le-mediterraneen.vercel.app"),
  title: "Le Méditerranéen | Restaurant gastronomique à Oran",
  description:
    "Le Méditerranéen propose une expérience culinaire haut de gamme mêlant héritage algérien et inspiration méditerranéenne dans un cadre d'exception à Oran.",
  openGraph: {
    title: "Le Méditerranéen",
    description:
      "Une adresse d'exception à Oran : cuisine méditerranéenne raffinée, produits frais et héritage algérien.",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Le Méditerranéen",
    description:
      "Découvrez une table d'exception à Oran où la Méditerranée rencontre l'élégance algérienne.",
  },
  alternates: {
    canonical: "https://www.lemediterraneen-oran.com/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${heading.variable} ${body.variable}`}>
        {children}
      </body>
    </html>
  );
}

