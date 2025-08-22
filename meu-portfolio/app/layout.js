import Footer from "./components/Profiles/Footer";
import "./globals.css";

export const metadata = {
  title: "Vinicius Anderson",
  description: "Atividade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {}
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {children}
        <Footer /> {}
      </body>
    </html>
  );
}