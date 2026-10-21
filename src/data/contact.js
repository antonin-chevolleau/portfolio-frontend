// Coordonnées partagées par la hero et la section Contact.
// Tant qu'une valeur vaut null, l'élément qui en dépend n'est pas affiché :
// pas de lien mort ni de 404 en ligne.

// TODO : renseigner mon adresse e-mail
export const email = null;

// TODO : déposer le CV dans public/ puis mettre son chemin (ex. "/cv-antonin-chevolleau.pdf")
export const cvHref = null;

export const profileLinks = [
  {
    label: "GitHub",
    handle: "Mon GitHub",
    href: "https://github.com/antonin-chevolleau/",
  },
  {
    label: "HackTheBox",
    handle: "Mon profil HTB",
    href: "https://profile.hackthebox.com/profile/01a0a48f-de3f-718f-b854-f7fae1247984",
  },
  {
    label: "LinkedIn",
    handle: "Mon LinkedIn",
    href: "https://www.linkedin.com/in/antonin-chevolleau",
  },
];
