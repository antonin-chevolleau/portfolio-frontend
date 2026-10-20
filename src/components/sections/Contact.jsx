import Button from "@/components/ui/Button";
import { cvHref, email, profileLinks } from "@/data/contact";

// Sans e-mail renseigné, LinkedIn devient le canal principal :
// le bouton « Me contacter » de la hero ne mène jamais à une impasse
const linkedIn = profileLinks.find((link) => link.label === "LinkedIn");

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
            Pour parler d’une alternance à partir de janvier 2027, le plus
            simple est {email ? "un e-mail" : "un message sur LinkedIn"}.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {email ? (
              <Button href={`mailto:${email}`}>M’écrire</Button>
            ) : (
              <Button
                href={linkedIn.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                Me contacter sur LinkedIn
                <span className="sr-only"> (nouvel onglet)</span>
              </Button>
            )}
            {cvHref && (
              <Button href={cvHref} download variant="secondary">
                Télécharger mon CV
              </Button>
            )}
          </div>

          {/* Adresse visible pour pouvoir la copier sans ouvrir de client mail */}
          {email && (
            <p className="text-muted mt-6 font-mono text-sm">
              <a
                href={`mailto:${email}`}
                className="text-accent rounded-sm underline-offset-4 hover:underline"
              >
                {email}
              </a>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}

export default Contact;
