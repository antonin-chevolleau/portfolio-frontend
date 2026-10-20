import { cn } from "@/lib/utils";

// TODO : remplacer par mon vrai parcours (ou déplacer dans un fichier de données)
// Du plus récent au plus ancien. `status` : "next" (à venir), "current" (en cours) ou "done".
const steps = [
  {
    status: "next",
    period: "Janvier 2027",
    title: "MSc Cybersécurité, en alternance",
    place: "Epitech",
    description: "TODO Ce que je vise pendant cette alternance.",
  },
  {
    status: "current",
    period: "TODO – aujourd’hui",
    title: "Pre-MSc",
    place: "Epitech",
    description: "TODO Ce que j’y apprends, en une ou deux phrases.",
  },
  {
    status: "done",
    period: "TODO – TODO",
    title: "TODO Diplôme ou expérience précédente",
    place: "TODO Établissement",
    description: "TODO Une phrase de contexte.",
  },
];

const statusLabels = {
  next: "À venir",
  current: "En cours",
  done: "Terminé",
};

function Journey() {
  return (
    <section
      id="parcours"
      aria-labelledby="parcours-title"
      className="border-border border-t"
    >
      <div className="mx-auto max-w-6xl px-6 py-16 md:py-24">
        <div className="max-w-2xl">
          <h2
            id="parcours-title"
            className="text-foreground text-3xl font-semibold tracking-tight md:text-4xl"
          >
            Parcours
          </h2>
          <p className="text-muted mt-4 text-base leading-relaxed sm:text-lg">
            D’où je viens et où je vais.
          </p>
        </div>

        {/* Liste ordonnée : le parcours est une séquence, la ligne verticale la matérialise */}
        <ol className="mt-12 ml-1">
          {steps.map((step, index) => (
            <li
              key={`${step.title}-${index}`}
              className="relative grid grid-cols-1 gap-2 pb-12 pl-6 last:pb-0 md:grid-cols-12 md:gap-8 md:pl-8"
            >
              {/* Segment de ligne jusqu'au point suivant : rien après le dernier */}
              {index < steps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="bg-border absolute top-2.5 -bottom-2.5 left-0 w-px"
                />
              )}
              <span
                aria-hidden="true"
                className={cn(
                  "absolute top-1.5 -left-1 size-2 rounded-full",
                  step.status === "current" &&
                    "bg-accent ring-accent/15 ring-4",
                  step.status === "next" && "border-muted bg-background border",
                  step.status === "done" && "bg-muted",
                )}
              />

              <div className="md:col-span-3">
                <p className="text-muted font-mono text-sm tabular-nums">
                  {step.period}
                </p>
                {statusLabels[step.status] && (
                  <p
                    className={cn(
                      "mt-1 font-mono text-xs",
                      step.status === "current" ? "text-accent" : "text-muted",
                    )}
                  >
                    {statusLabels[step.status]}
                  </p>
                )}
              </div>

              <div className="md:col-span-9">
                <h3 className="text-foreground text-lg font-semibold tracking-tight">
                  {step.title}
                </h3>
                <p className="text-muted mt-1 text-sm">{step.place}</p>
                <p className="text-muted mt-3 max-w-2xl text-base leading-relaxed">
                  {step.description}
                </p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
