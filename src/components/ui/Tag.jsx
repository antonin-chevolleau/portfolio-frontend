import { cn } from "@/lib/utils";

function Tag({ children, className }) {
  return (
    <span
      className={cn(
        // Neutre : le cyan reste réservé aux actions, liens et états actifs
        "border-border text-muted inline-flex items-center rounded-full border px-2.5 py-1 font-mono text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Tag;
