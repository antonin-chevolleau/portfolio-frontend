import { cn } from "@/lib/utils";

const variants = {
  primary: "bg-accent text-background hover:bg-accent/85",
  secondary:
    "border-border text-foreground hover:border-muted hover:bg-surface border",
};

// Lien stylé en bouton : toutes les actions du site sont des liens
// (ancres, mailto, téléchargement)
function Button({ variant = "primary", className, ...props }) {
  return (
    <a
      className={cn(
        "rounded-lg px-5 py-3 text-sm font-medium transition-colors duration-200 ease-out",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}

export default Button;
