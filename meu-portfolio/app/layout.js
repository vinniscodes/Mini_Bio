import Footer from "./components/Profiles/Footer"; // 1. Importe o Footer
import "./globals.css";

export const metadata = {
  title: "Vinicius Anderson",
  description: "Atividade.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      {/* 2. Adicione as classes para o layout flex */}
      <body style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        {children}
        <Footer /> {/* 3. Adicione o componente Footer aqui */}
      </body>
    </html>
  );
}