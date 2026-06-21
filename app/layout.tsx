import type { Metadata } from "next";
import { Inter, Montserrat, Space_Grotesk } from "next/font/google";
import { Footer, Header } from "@/components/LandingSections";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
  variable: "--font-heading",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-body",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-stat",
});

export const metadata: Metadata = {
  title: "KAZELEC | Qualité N°1",
  description:
    "KAZELEC fabrique et distribue des postes transformateurs HT/BT préfabriqués homologués SONELGAZ à Sétif, Algérie.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${montserrat.variable} ${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-[var(--font-body)]">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
