"use client";

import { useEffect, useState } from "react";

import { cn } from "@/lib/utils";

function NavLinks({ links }) {
  const [activeHref, setActiveHref] = useState(null);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    let frame = null;

    // La section active est la dernière dont le haut a passé le milieu de
    // l'écran ; aucune tant qu'on est sur la hero. Recalculée à chaque
    // scroll, donc juste même après un saut direct (Home, "Retour en haut").
    const updateActive = () => {
      frame = null;
      const middle = window.innerHeight / 2;
      // En bas de page, la dernière section (courte) n'atteint jamais le
      // milieu de l'écran : on la force active
      const isAtBottom =
        window.innerHeight + window.scrollY >=
        document.documentElement.scrollHeight - 2;
      const current = isAtBottom
        ? sections.at(-1)
        : sections.findLast(
            (section) => section.getBoundingClientRect().top <= middle,
          );
      setActiveHref(current ? `#${current.id}` : null);
    };

    // requestAnimationFrame : au plus un calcul par image affichée
    const handleScroll = () => {
      if (frame === null) frame = requestAnimationFrame(updateActive);
    };

    updateActive();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (frame !== null) cancelAnimationFrame(frame);
    };
  }, [links]);

  return (
    <ul className="text-muted flex items-center gap-5 text-sm sm:gap-7">
      {links.map((link) => {
        const isActive = link.href === activeHref;

        return (
          <li key={link.href}>
            <a
              href={link.href}
              aria-current={isActive ? "true" : undefined}
              className={cn(
                // py-1 / -my-1 : zone tactile plus haute sans changer la hauteur de la nav
                "hover:text-foreground hover:decoration-accent -my-1 inline-block rounded-sm py-1 underline-offset-8 transition-colors duration-200 ease-out hover:underline",
                isActive && "text-foreground decoration-accent underline",
              )}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}

export default NavLinks;
