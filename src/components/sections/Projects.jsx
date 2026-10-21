import Image from "next/image";

import Button from "@/components/ui/Button";
import ExternalLink from "@/components/ui/ExternalLink";
import Tag from "@/components/ui/Tag";
import { profileLinks } from "@/data/contact";

const htbProfile = profileLinks.find((link) => link.label === "HackTheBox");

// Un seul projet doit avoir `featured: true` : c'est le projet phare.
// `image` est optionnel : { src: "/projects/xxx.png", alt, width, height }
// `id` est optionnel : ancre du projet, pour y pointer depuis Compétences (ex. id: "projet-xxx" -> href "#projet-xxx")
const projects = [
  {
    featured: true,
    id: "projet-job-board",
    title: "Tanière Job Board",
    context: "Projet Epitech, full-stack, en équipe",
    summary:
      "Un job board qui liste des offres et permet d’y candidater. Un espace admin gère les entreprises, les utilisateurs, les annonces et les candidatures.",
    details: [
      {
        label: "Problème",
        value:
          "Simplifier la candidature pour les personnes en recherche d’emploi, et mener le projet en équipe.",
      },
      {
        label: "Approche",
        value:
          "Le détail d’une offre s’ouvre dans un menu dépliant, sans changer de page. On candidate directement sur le site, et un utilisateur connecté n’a pas à ressaisir ses informations. Offres paginées, travail d’équipe organisé avec une to-do list.",
      },
      {
        label: "Résultat",
        value:
          "Site fonctionnel en local, conforme au cahier des charges. API REST avec routes protégées, authentification par JWT et sessions, gestion du CORS. Code partagé sur GitHub avec branches et pull requests.",
      },
    ],
    tags: ["React", "FastAPI", "MySQL"],
    links: [
      {
        label: "Code",
        href: "https://github.com/antonin-chevolleau/job-board-epitech",
      },
    ],
  },
  {
    id: "projet-portfolio",
    title: "Portfolio front-end",
    context: "Projet perso, fin de formation OpenClassrooms",
    summary:
      "Le site qui présente mon travail de développeur front-end, avec un back-end NestJS et MongoDB.",
    tags: ["Next.js", "Tailwind CSS", "NestJS", "MongoDB"],
    links: [
      { label: "Code front", href: "https://github.com/Drack0r/Portfolio" },
      {
        label: "Code back",
        href: "https://github.com/Drack0r/Portfolio-Backend",
      },
      {
        label: "Site en ligne",
        href: "https://portfolio-eight-pi-4a67i0fzim.vercel.app/",
      },
    ],
  },
  {
    id: "projet-cjca",
    title: "Certification CJCA (Hack The Box)",
    context: "Apprentissage perso, en cours",
    summary:
      "Ma première certification en cybersécurité (Certified Junior Cybersecurity Associate), que je prépare en ce moment.",
    tags: ["Pentest", "Web", "Réseau", "Linux", "Windows", "Bash"],
    links: [
      {
        label: "Certification",
        href: "https://academy.hackthebox.com/preview/certifications/htb-certified-junior-cybersecurity-associate",
      },
      { label: "Profil Hack The Box", href: htbProfile.href },
    ],
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
            Ce que j’ai construit en développement web, avec le code à l’appui,
            et la certification cyber que je prépare.
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

              {/* Boutons plutôt que liens texte : le code du projet phare est la preuve principale de la section */}
              <ul className="mt-8 flex flex-wrap gap-3">
                {featuredProject.links.map((link) => (
                  <li key={link.label}>
                    <Button
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="secondary"
                    >
                      {link.label}
                      <span className="sr-only">
                        {" "}
                        : {featuredProject.title} (nouvel onglet)
                      </span>
                    </Button>
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
                    <dd className="text-foreground leading-relaxed text-pretty sm:col-span-3">
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
