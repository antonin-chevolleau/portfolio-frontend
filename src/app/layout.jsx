import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Footer from "@/components/sections/Footer";
import Navbar from "@/components/sections/Navbar";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const title = "Antonin Chevolleau | Portfolio";
const description =
  "Étudiant en Pre-MSc à Epitech, je cherche une alternance en cybersécurité (pentest) à partir de janvier 2027 en Île-de-France. Projets, compétences et parcours.";

export const metadata = {
  title,
  description,
  // Aperçu affiché quand le lien est partagé (LinkedIn, messageries)
  openGraph: { title, description, locale: "fr_FR", type: "website" },
};

export const viewport = {
  // Couleur de la barre du navigateur mobile : même valeur que --color-background
  // (l'API metadata n'accepte pas de variable CSS)
  themeColor: "#0a0a0f",
};

function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main id="contenu">{children}</main>
        <Footer />
      </body>
    </html>
  );
}

export default RootLayout;
