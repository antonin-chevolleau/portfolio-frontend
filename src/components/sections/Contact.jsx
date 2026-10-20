import ExternalLink from "@/components/ui/ExternalLink";

// TODO : remplacer par mes vraies coordonnées
const email = "TODO@exemple.com";
// TODO : déposer le CV dans public/ (ex. public/cv-antonin-chevolleau.pdf)
const cvHref = "/TODO-cv.pdf";

const contactChannels = [
  {
    label: "LinkedIn",
    handle: "TODO",
    href: "https://www.linkedin.com/in/TODO",
  },
];

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-border border-t"
    >
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-12 px-6 py-16 md:py-24 lg:grid-cols-12 lg:items-end lg:gap-16">
        <div className="lg:col-span-7">
          <h2
            id="contact-title"
            className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Contact
          </h2>
          <p className="text-muted mt-4 max-w-xl text-base leading-relaxed sm:text-lg">
            Je cherche une alternance en cybersécurité à partir de janvier 2027.
            Le plus simple pour en parler : un e-mail.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <a
              href={`mailto:${email}`}
              className="bg-accent text-background hover:bg-accent/85 rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200 ease-out"
            >
              M’écrire
            </a>
            <a
              href={cvHref}
              download
              className="border-border text-foreground hover:border-muted hover:bg-surface rounded-lg border px-5 py-3 text-sm font-medium transition-colors duration-200 ease-out"
            >
              Télécharger mon CV
            </a>
          </div>
        </div>

        {/* Même format clé/valeur que l'encadré de la hero */}
        <dl className="divide-border border-border divide-y border-y lg:col-span-5">
          <div className="grid grid-cols-3 gap-4 py-3 text-sm">
            <dt className="text-muted font-mono">E-mail</dt>
            <dd className="col-span-2 truncate">
              <a
                href={`mailto:${email}`}
                className="text-accent rounded-sm font-mono text-sm underline-offset-4 hover:underline"
              >
                {email}
              </a>
            </dd>
          </div>
          {contactChannels.map((channel) => (
            <div
              key={channel.label}
              className="grid grid-cols-3 gap-4 py-3 text-sm"
            >
              <dt className="text-muted font-mono">{channel.label}</dt>
              <dd className="col-span-2 truncate">
                <ExternalLink href={channel.href}>
                  {channel.handle}
                </ExternalLink>
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

export default Contact;
