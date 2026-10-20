import Image from "next/image";

import ExternalLink from "@/components/ui/ExternalLink";
import Tag from "@/components/ui/Tag";

// TODO : remplacer par mes vrais projets (ou déplacer dans un fichier de données)
// Un seul projet doit avoir `featured: true` : c'est le projet phare.
// `image` est optionnel : { src: "/projects/xxx.png", alt, width, height }
const projects = [
  {
    featured: true,
    title: "TODO Projet phare",
    context: "Projet Epitech",
    summary: "TODO Une phrase qui dit ce que fait le projet.",
    details: [
      { label: "Problème", value: "TODO Ce qu'il fallait résoudre." },
      { label: "Approche", value: "TODO Comment je m'y suis pris." },
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
            aria-labelledby="projet-phare-title"
            className="mt-12 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-16"
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
                    <ExternalLink href={link.href}>{link.label}</ExternalLink>
                  </li>
                ))}
              </ul>
            </div>

            {/* Même langage visuel que l'encadré de la hero */}
            <div className="border-border bg-surface/60 overflow-hidden rounded-xl border lg:col-span-7">
              {featuredProject.image && (
                <Image
                  src={featuredProject.image.src}
                  alt={featuredProject.image.alt}
                  width={featuredProject.image.width}
                  height={featuredProject.image.height}
                  className="border-border w-full border-b"
                />
              )}
              <dl className="divide-border divide-y px-5">
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
          {otherProjects.map((project) => (
            <li
              key={project.title}
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

              <p className="text-muted text-base leading-relaxed md:col-span-5">
                {project.summary}
              </p>

              <div className="flex flex-col gap-4 md:col-span-3 md:items-end">
                <ul
                  aria-label="Technologies"
                  className="flex flex-wrap gap-2 md:justify-end"
                >
                  {project.tags.map((tag, index) => (
                    <li key={`${tag}-${index}`}>
                      <Tag>{tag}</Tag>
                    </li>
                  ))}
                </ul>
                <ul className="flex flex-wrap gap-x-6 gap-y-2">
                  {project.links.map((link) => (
                    <li key={link.label}>
                      <ExternalLink href={link.href}>{link.label}</ExternalLink>
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
