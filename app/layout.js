import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = {
  title: "Sadowski Studio – Interaktywne strony 3D i nowoczesny design",
  description:
    "Sadowski Studio projektuje innowacyjne strony internetowe 3D, interaktywne doświadczenia i nowoczesne UI/UX, które angażują użytkowników i wyróżniają markę w sieci.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`bg-background ${inter.className}`}>{children}</body>
    </html>
  );
}
