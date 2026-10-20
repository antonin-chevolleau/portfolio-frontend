import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import Navbar from "@/components/sections/Navbar";

const geistSans = Geist({ subsets: ["latin"], variable: "--font-geist-sans" });
const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

export const metadata = {
  title: "Antonin Chevolleau | Portfolio",
  description: "Mon portfolio", // TODO : modify description
};

function RootLayout({ children }) {
  return (
    <html lang="fr" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="font-sans antialiased">
        <Navbar />
        <main id="contenu">{children}</main>
      </body>
    </html>
  );
}

export default RootLayout;
