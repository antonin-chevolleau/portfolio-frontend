const missionDetails = [
  { label: "Objectif", value: "Alternance en cybersécurité" },
  { label: "Cap", value: "Pentest" },
  { label: "Formation", value: "Epitech, Pre-MSc vers MSc Cybersécurité" },
  { label: "Rythme", value: "4 semaines en entreprise / 2 semaines à l'école" },
  { label: "Dès", value: "Janvier 2027" },
  { label: "Lieu", value: "Île-de-France" },
];

const proofLinks = [
  {
    label: "GitHub",
    handle: "Mon GitHub",
    href: "https://github.com/antonin-chevolleau/",
  },
  {
    label: "HackTheBox",
    handle: "Mon Profil HTB",
    href: "https://profile.hackthebox.com/profile/01a0a48f-de3f-718f-b854-f7fae1247984?utm_medium=copy_url",
  },
  {
    label: "LinkedIn",
    handle: "Mon LinkedIn",
    href: "https://www.linkedin.com/in/antonin-chevolleau",
  },
];

function Hero() {
  return (
    <section
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden"
    >
      {/* Halo très discret derrière le titre */}
      <div
        aria-hidden="true"
        className="bg-accent/10 absolute -top-48 -left-32 -z-10 size-96 rounded-full blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:items-center lg:gap-16 lg:py-32">
        <div className="lg:col-span-7">
          <h1
            id="hero-title"
            className="text-foreground text-5xl font-semibold tracking-tight sm:text-6xl lg:text-7xl"
          >
            Antonin Chevolleau
          </h1>

          <p className="text-foreground/90 mt-6 max-w-xl text-2xl font-normal tracking-tight sm:text-3xl">
            Étudiant à Epitech, je me forme à la cybersécurité.
          </p>

          <p className="text-muted mt-6 max-w-xl text-base leading-relaxed sm:text-lg">
            En Pre-MSc, je prépare le MSc Cybersécurité et je cherche une
            alternance pour apprendre sur le terrain, côté pentest.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href="#projets"
              className="bg-accent text-background hover:bg-accent/85 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200 ease-out"
            >
              Voir mes projets
            </a>
            <a
              href="#contact"
              className="border-border text-foreground hover:border-muted hover:bg-surface rounded-lg border px-5 py-3 text-sm font-medium transition-colors duration-200 ease-out"
            >
              Me contacter
            </a>
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
              Recherche d’alternance
            </h2>
            <p className="text-muted flex items-center gap-2 font-mono text-xs">
              <span
                aria-hidden="true"
                className="bg-accent ring-accent/15 size-2 rounded-full ring-4"
              />
              Disponible
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
            {proofLinks.map((link) => (
              <li key={link.label}>
                <a
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group grid grid-cols-3 gap-4 rounded-sm py-2 text-sm"
                >
                  <span className="text-muted font-mono">{link.label}</span>
                  <span className="text-accent col-span-2 truncate font-mono underline-offset-4 group-hover:underline">
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
