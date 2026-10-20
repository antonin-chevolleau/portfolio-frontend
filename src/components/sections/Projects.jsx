import Image from "next/image";

import ExternalLink from "@/components/ui/ExternalLink";
import Tag from "@/components/ui/Tag";

// TODO : remplacer par mes vrais projets (ou déplacer dans un fichier de données)
// Un seul projet doit avoir `featured: true` : c'est le projet phare.
// `image` est optionnel : { src: "/projects/xxx.png", alt, width, height }
// `id` est optionnel : ancre du projet, pour y pointer depuis Compétences (ex. id: "projet-xxx" -> href "#projet-xxx")
const projects = [
  {
    featured: true,
    title: "TODO Projet phare",
    context: "Projet Epitech",
    summary: "TODO Une phrase qui dit ce que fait le projet.",
    details: [
      { label: "Problème", value: "TODO Ce qu’il fallait résoudre." },
      { label: "Approche", value: "TODO Comment je m’y suis pris." },
      {
        label: "Résultat",
        value: "TODO Ce que ça a donné, chiffré si possible.",
      },
    ],
    tags: ["TODO", "TODO", "TODO"],
    links: [
      { label: "Code", href: "https://github.com/TODO" },
      { label: "Write-up", href: "https://TODO" },
    ],
  },
  {
    title: "TODO Projet 2",
    context: "Projet perso",
    summary: "TODO Une phrase qui dit ce que fait le projet.",
    tags: ["TODO", "TODO"],
    links: [{ label: "Code", href: "https://github.com/TODO" }],
  },
  {
    title: "TODO Projet 3",
    context: "Box HackTheBox",
    summary: "TODO Une phrase qui dit ce que fait le projet.",
    tags: ["TODO", "TODO"],
    links: [{ label: "Write-up", href: "https://TODO" }],
  },
];

function Projects() {
  const featuredProject = projects.find((project) => project.featured);
  const otherProjects = projects.filter((project) => !project.featured);

  return (
    <section
      id="projets"
      aria-labelledby="projets-title"
      className="border-border border-t"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2
            id="projets-title"
            className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Projets
          </h2>
          <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
            Ce que j’ai construit, testé ou attaqué, avec le code à l’appui.
          </p>
        </div>

        {featuredProject && (
          <article
            id={featuredProject.id}
            aria-labelledby="projet-phare-title"
            className="border-border bg-surface/60 mt-12 grid grid-cols-1 gap-10 rounded-xl border p-6 sm:p-8 lg:grid-cols-12 lg:gap-12 lg:p-10"
          >
            <div className="lg:col-span-5">
              <p className="text-muted font-mono text-sm">
                {featuredProject.context}
              </p>
              <h3
                id="projet-phare-title"
                className="text-foreground mt-3 text-2xl font-semibold tracking-tight sm:text-3xl"
              >
                {featuredProject.title}
              </h3>
              <p className="text-muted mt-4 text-base leading-relaxed">
                {featuredProject.summary}
              </p>

              <ul
                aria-label="Technologies"
                className="mt-6 flex flex-wrap gap-2"
              >
                {featuredProject.tags.map((tag, index) => (
                  <li key={`${tag}-${index}`}>
                    <Tag>{tag}</Tag>
                  </li>
                ))}
              </ul>

              <ul className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
                {featuredProject.links.map((link) => (
                  <li key={link.label}>
                    <ExternalLink href={link.href}>
                      {link.label}
                      <span className="sr-only">
                        {" "}
                        : {featuredProject.title}
                      </span>
                    </ExternalLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Le projet phare est le seul panneau de la section : pas de carte imbriquée */}
            <div className="lg:col-span-7 lg:self-start">
              {featuredProject.image && (
                <Image
                  src={featuredProject.image.src}
                  alt={featuredProject.image.alt}
                  width={featuredProject.image.width}
                  height={featuredProject.image.height}
                  className="border-border mb-6 w-full rounded-lg border"
                />
              )}
              <dl className="divide-border border-border divide-y border-y">
                {featuredProject.details.map((item) => (
                  <div
                    key={item.label}
                    className="grid grid-cols-1 gap-1 py-4 text-sm sm:grid-cols-4 sm:gap-4"
                  >
                    <dt className="text-muted font-mono">{item.label}</dt>
                    <dd className="text-foreground leading-relaxed sm:col-span-3">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </article>
        )}

        <ul className="divide-border border-border mt-16 divide-y border-y">
          {otherProjects.map((project, index) => (
            <li
              key={`${project.title}-${index}`}
              id={project.id}
              className="grid grid-cols-1 gap-4 py-8 md:grid-cols-12 md:gap-8"
            >
              <div className="md:col-span-4">
                <p className="text-muted font-mono text-sm">
                  {project.context}
                </p>
                <h3 className="text-foreground mt-2 text-lg font-semibold tracking-tight">
                  {project.title}
                </h3>
              </div>

              {/* Tags et liens sous le résumé : une colonne étroite ne tient pas 4 à 6 tags */}
              <div className="md:col-span-8">
                <p className="text-muted max-w-2xl text-base leading-relaxed">
                  {project.summary}
                </p>
                <ul
                  aria-label="Technologies"
                  className="mt-4 flex flex-wrap gap-2"
                >
                  {project.tags.map((tag, index) => (
                    <li key={`${tag}-${index}`}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
                <ul className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
                  {project.links.map((link) => (
                    <li key={link.label}>
                      <ExternalLink href={link.href}>
                        {link.label}
                        <span className="sr-only"> : {project.title}</span>
                      </ExternalLink>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Projects;
