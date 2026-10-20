function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-border border-t">
      <div className="text-muted mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 px-6 py-8 text-sm">
        <p>© {year} Antonin Chevolleau</p>
        <a
          href="#contenu"
          className="hover:text-foreground rounded-sm transition-colors duration-200 ease-out"
        >
          Retour en haut
        </a>
      </div>
    </footer>
  );
}

export default Footer;
