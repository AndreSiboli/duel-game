import "./globals.scss";
import { Roboto } from "next/font/google";
import { GameProvider } from "../@context/GameContext";

const roboto = Roboto({ subsets: ["latin"], weight: ["400", "500", "700"] });

export const metadata = {
  title: "Game",
  description: "Rock, paper, scissors, lizard, spock game.",
  author: "André Siboli",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <GameProvider>{children}</GameProvider>
      </body>
    </html>
  );
}
