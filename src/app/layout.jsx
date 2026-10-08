import "./globals.css";

export const metadata = {
  title: "Antonin Chevolleau | Portfolio",
  description: "Mon portfolio", // TODO : modify description
};

function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;
