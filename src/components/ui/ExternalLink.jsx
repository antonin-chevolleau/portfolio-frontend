import { cn } from "@/lib/utils";

function ExternalLink({ href, children, className }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "text-accent rounded-sm font-mono text-sm underline-offset-4 hover:underline",
        className,
      )}
    >
      {children}
      <span className="sr-only"> (nouvel onglet)</span>
    </a>
  );
}

export default ExternalLink;
