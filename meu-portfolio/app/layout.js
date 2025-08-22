import "./globals.css";

export const metadata = {
  title: "Mini Bio - Atividade Web & Mobile",
  description: "Vinni",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  );
}