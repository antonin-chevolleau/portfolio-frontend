import { cn } from "@/lib/utils";

// Du plus récent au plus ancien. `status` : "next" (à venir), "current" (en cours) ou "done".
// `description` est optionnelle.
const steps = [
  {
    status: "next",
    period: "2027 – 2029",
    title: "Master of Science Cybersécurité",
    place: "Epitech",
  },
  {
    status: "current",
    period: "2026 – 2027",
    title: "Année préparatoire au Master of Science",
    place: "Epitech",
  },
  {
    status: "done",
    period: "2025 – 2026",
    title: "Formation Intégrateur web",
    place: "OpenClassrooms",
    description: "Titre RNCP de niveau 5 « Développeur informatique »",
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
            Du développement web vers le pentest.
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
                {step.description && (
                  <p className="text-muted mt-3 max-w-2xl text-base leading-relaxed">
                    {step.description}
                  </p>
                )}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

export default Journey;
