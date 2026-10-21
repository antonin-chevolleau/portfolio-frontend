import { cn } from "@/lib/utils";

function ExternalLink({ href, children, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        // py-2 / -my-2 : zone tactile plus haute sans changer la mise en page
        "text-accent -my-2 inline-flex items-center gap-1 rounded-sm py-2 text-sm font-medium underline-offset-4 hover:underline",
        className,
      )}
    >
      {children}
      {/* Flèche : distingue visuellement un lien externe d'une ancre interne */}
      <svg
        aria-hidden="true"
        viewBox="0 0 12 12"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="size-3 shrink-0"
      >
        <path d="M3.5 8.5l5-5M4.5 3.5h4v4" />
      </svg>
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  );
}

export default ExternalLink;
