import ExternalLink from "@/components/ui/ExternalLink";
import Tag from "@/components/ui/Tag";

// TODO : remplacer par mes vraies compétences (ou déplacer dans un fichier de données)
// `proofs` est optionnel : liens vers là où la compétence a été mise en pratique.
// Un `href` qui commence par "#" pointe vers la page : une section ("#projets") ou un projet précis ("#projet-xxx", voir son `id`).
const skillGroups = [
  {
    domain: "Offensif",
    tools: ["TODO", "TODO", "TODO"],
    proofs: [
      { label: "TODO Box HTB", href: "https://TODO" },
      { label: "TODO Projet 2", href: "#projets" },
    ],
  },
  {
    domain: "Défensif",
    tools: ["TODO", "TODO"],
    proofs: [{ label: "TODO", href: "https://TODO" }],
  },
  {
    domain: "Systèmes et réseau",
    tools: ["TODO", "TODO", "TODO"],
  },
  {
    domain: "Développement",
    tools: ["TODO", "TODO", "TODO"],
  },
];

function Skills() {
  return (
    <section
      id="competences"
      aria-labelledby="competences-title"
      className="border-border border-t"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2
            id="competences-title"
            className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Compétences
          </h2>
          <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
            Les outils que j’utilise, et où je les ai mis en pratique.
          </p>
        </div>

        <ul className="divide-border border-border mt-12 divide-y border-y">
          {skillGroups.map((group) => (
            <li
              key={group.domain}
              className="grid grid-cols-1 gap-4 py-6 md:grid-cols-12 md:gap-8"
            >
              <h3 className="text-foreground text-lg font-semibold tracking-tight md:col-span-3">
                {group.domain}
              </h3>

              <div className="md:col-span-9">
                <ul aria-label="Outils" className="flex flex-wrap gap-2">
                  {group.tools.map((tool, index) => (
                    <li key={`${tool}-${index}`}>
                      <Tag>{tool}</Tag>
                    </li>
                  ))}
                </ul>

                {group.proofs && (
                  <div className="mt-4 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
                    <p className="text-muted">Mis en pratique dans</p>
                    <ul className="flex flex-wrap gap-x-6 gap-y-2">
                      {group.proofs.map((proof, index) => (
                        <li key={`${proof.label}-${index}`}>
                          {proof.href.startsWith("#") ? (
                            <a
                              href={proof.href}
                              className="text-accent rounded-sm font-mono text-sm underline-offset-4 hover:underline"
                            >
                              {proof.label}
                            </a>
                          ) : (
                            <ExternalLink href={proof.href}>
                              {proof.label}
                            </ExternalLink>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Skills;
