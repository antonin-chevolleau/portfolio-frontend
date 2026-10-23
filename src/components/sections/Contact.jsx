import Button from "@/components/ui/Button";
import ExternalLink from "@/components/ui/ExternalLink";
import { cvHref, profileLinks } from "@/data/contact";

// LinkedIn est le canal de contact principal : le bouton « Me contacter »
// de la hero mène ici, il doit toujours y trouver une action
const linkedIn = profileLinks.find((link) => link.label === "LinkedIn");
const proofLinks = profileLinks.filter((link) => link.label !== "LinkedIn");

function Contact() {
  return (
    <section
      id="contact"
      aria-labelledby="contact-title"
      className="border-border border-t"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2
            id="contact-title"
            className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Contact
          </h2>
          <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
            Pour parler d’une alternance en pentest à partir de janvier 2027, en
            Île-de-France, le plus simple est de me contacter sur LinkedIn.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Button
              href={linkedIn.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              Me contacter sur LinkedIn
              <span className="sr-only"> (nouvel onglet)</span>
            </Button>
            {cvHref && (
              <Button href={cvHref} download variant="secondary">
                Télécharger mon CV
              </Button>
            )}
          </div>

          {/* Dernier rappel des preuves avant de partir : les profils hors canal de contact principal */}
          <div className="mt-8 flex flex-wrap items-baseline gap-x-6 gap-y-2 text-sm">
            <p className="text-muted">Mes preuves en ligne</p>
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {proofLinks.map((link) => (
                <li key={link.label}>
                  <ExternalLink href={link.href}>{link.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
