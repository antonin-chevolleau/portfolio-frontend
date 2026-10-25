# Portfolio | Front-end

Portfolio d’Antonin Chevolleau, étudiant en année préparatoire au MSc Cybersécurité d’Epitech. Il présente mes projets, mes compétences et mon parcours, pour une recherche d’alternance en cybersécurité (pentest) à partir de janvier 2027 en Île-de-France.

## Stack

- [Next.js](https://nextjs.org/) 16 (App Router, Turbopack)
- React 19
- [Tailwind CSS](https://tailwindcss.com/) v4, avec `clsx` et `tailwind-merge` pour composer les classes
- ESLint (`core-web-vitals` de Next.js et tri des imports avec `simple-import-sort`)
- Prettier (plugin Tailwind pour trier les classes)

## Démarrage

Prérequis : Node.js et npm.

```bash
npm install
npm run dev
```

Le site est alors disponible sur http://localhost:3000.

| Commande           | Rôle                                       |
| ------------------ | ------------------------------------------ |
| `npm run dev`      | Serveur de développement                   |
| `npm run build`    | Build de production                        |
| `npm start`        | Lance le build de production               |
| `npm run lint`     | Vérifie le code avec ESLint                |
| `npm run lint:fix` | Corrige automatiquement ce qui peut l’être |

## Structure

```
src/
├── app/
│   ├── globals.css        # Thème Tailwind (couleurs, polices, animations) et styles de base
│   ├── layout.jsx         # Métadonnées, polices, Navbar et Footer
│   └── page.jsx           # Page d'accueil : enchaînement des sections
├── components/
│   ├── sections/          # Hero, Projects, Skills, Journey, Contact, Navbar, Footer
│   └── ui/                # Button, ExternalLink, NavLinks, Tag
├── data/
│   └── contact.js         # Lien du CV et liens de profil (GitHub, Hack The Box, LinkedIn)
└── lib/
    └── utils.js           # cn() : fusion des classes Tailwind
public/                    # CV et images servis tels quels
```

## Modifier le contenu

Le contenu est écrit directement dans les fichiers, sous forme de tableaux en haut de chaque section :

- **Projets** : `projects` dans `src/components/sections/Projects.jsx`. Un seul projet doit avoir `featured: true` (le projet phare). `image` est optionnelle. `id` sert d’ancre (`#projet-xxx`) pour y pointer depuis Compétences.
- **Compétences** : `skillGroups` dans `src/components/sections/Skills.jsx`. `proofs` renvoie vers un projet (`#projet-xxx`) ou un lien externe. `note` remplace la liste d’outils pour un domaine en cours d’apprentissage.
- **Parcours** : `steps` dans `src/components/sections/Journey.jsx`, du plus récent au plus ancien, avec un `status` parmi `next`, `current` ou `done`.
- **Alternance recherchée** : `missionDetails` dans `src/components/sections/Hero.jsx`.
- **CV et profils** : `src/data/contact.js`. Le CV est servi depuis `public/`.

## Accessibilité

- Lien « Aller au contenu » au début de la page
- Un seul style de focus visible pour tous les éléments interactifs
- Animations et défilement fluide désactivés avec `prefers-reduced-motion`
- Liens externes annoncés « (nouvel onglet) » aux lecteurs d’écran
- Section active indiquée dans la navigation avec `aria-current`

## Mirroring

Le workflow `.github/workflows/mirror.yml` pousse chaque commit sur `main` vers le repo Epitech du projet. Il a besoin du secret `EPITECH_PAT` (un token avec accès en écriture à ce repo).
