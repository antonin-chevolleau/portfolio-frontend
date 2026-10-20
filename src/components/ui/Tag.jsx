import { cn } from "@/lib/utils";

function Tag({ children, className }) {
  return (
    <span
      className={cn(
        "bg-accent/10 text-accent inline-flex items-center rounded-full px-2.5 py-1 font-mono text-xs",
        className,
      )}
    >
      {children}
    </span>
  );
}

export default Tag;
