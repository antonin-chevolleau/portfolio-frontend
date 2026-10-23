import Image from "next/image";

import Button from "@/components/ui/Button";
import { cvHref, profileLinks } from "@/data/contact";

const missionDetails = [
  { label: "Domaine", value: "Cybersécurité, orientée pentest" },
  {
    label: "Formation",
    value: "Epitech, année préparatoire puis MSc Cybersécurité",
  },
  // \u00a0 : espace insécable, le chiffre ne se sépare pas de son unité en fin de ligne
  {
    label: "Rythme",
    value: "4\u00a0semaines en entreprise / 2\u00a0semaines à l’école",
  },
  { label: "Dès", value: "Janvier 2027" },
  { label: "Lieu", value: "Île-de-France" },
];

function Hero() {
  return (
    <section aria-labelledby="hero-title">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-32">
        <div className="lg:col-span-7">
          {/* TODO : remplacer placeholder.svg par ma photo (carrée, ~400×400) */}
          <Image
            src="/placeholder.svg"
            alt="Portrait d’Antonin Chevolleau"
            width={160}
            height={160}
            preload
            className="border-border ring-accent/10 mb-10 size-28 rounded-full border object-cover ring-4 sm:size-32 lg:size-40"
          />
          <h1
            id="hero-title"
            className="text-foreground text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Antonin Chevolleau
          </h1>

          <p className="text-foreground mt-6 max-w-xl text-2xl font-normal tracking-tight text-balance sm:text-3xl">
            J’ai appris à construire, j’apprends maintenant à casser.
          </p>
          <p className="text-muted mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
            Développeur front-end de formation, je souhaite maintenant me former
            à la cybersécurité.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button href="#contact">Me contacter</Button>
            <Button href="#projets" variant="secondary">
              Voir mes projets
            </Button>
            {cvHref && (
              <Button
                href={cvHref}
                target="_blank"
                rel="noopener noreferrer"
                variant="secondary"
              >
                Voir mon CV
                <span className="sr-only"> (PDF, nouvel onglet)</span>
              </Button>
            )}
          </div>
        </div>

        <aside
          aria-labelledby="mission-title"
          className="animate-fade-up border-border bg-surface/60 rounded-xl border motion-reduce:animate-none lg:col-span-5"
        >
          <div className="border-border flex items-center justify-between gap-4 border-b px-5 py-4">
            <h2
              id="mission-title"
              className="text-foreground text-sm font-medium"
            >
              Alternance
            </h2>
            <p className="text-muted flex items-center gap-2 font-mono text-xs">
              <span
                aria-hidden="true"
                className="bg-accent ring-accent/15 size-2 rounded-full ring-4"
              />
              En recherche
            </p>
          </div>

          <dl className="divide-border divide-y px-5">
            {missionDetails.map((item) => (
              <div
                key={item.label}
                className="grid grid-cols-3 gap-4 py-3 text-sm"
              >
                <dt className="text-muted font-mono">{item.label}</dt>
                <dd className="text-foreground col-span-2">{item.value}</dd>
              </div>
            ))}
          </dl>

          <ul className="border-border border-t px-5 py-2">
            {profileLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-3 gap-4 rounded-sm py-2 text-sm"
                >
                  <span className="text-muted font-mono">{link.label}</span>
                  <span className="text-accent col-span-2 truncate font-medium underline-offset-4 group-hover:underline">
                    {link.handle}
                    <span className="sr-only"> (nouvel onglet)</span>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </section>
  );
}

export default Hero;
