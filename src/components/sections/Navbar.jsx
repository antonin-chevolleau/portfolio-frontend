import Link from "next/link";

import NavLinks from "@/components/ui/NavLinks";

// Ancres vers les sections de la page d'accueil
const navLinks = [
  { href: "#projets", label: "Projets" },
  { href: "#competences", label: "Compétences" },
  { href: "#parcours", label: "Parcours" },
  { href: "#contact", label: "Contact" },
];

function Navbar() {
  return (
    <header className="border-border bg-background/80 sticky top-0 z-40 border-b backdrop-blur-md">
      <a
        href="#contenu"
        className="bg-accent text-background sr-only rounded-lg px-4 py-2 text-sm font-medium focus:not-sr-only focus:absolute focus:top-3 focus:left-6"
      >
        Aller au contenu
      </a>

      <nav
        aria-label="Navigation principale"
        className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-x-8 gap-y-2 px-6 py-4"
      >
        <Link
          href="/"
          className="text-foreground rounded-sm text-sm font-semibold tracking-tight"
        >
          Antonin Chevolleau
        </Link>

        <NavLinks links={navLinks} />
      </nav>
    </header>
  );
}

export default Navbar;
