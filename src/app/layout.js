import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import PageTransition from "@/components/PageTransition";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Mon Portfolio",
  description: "Portfolio professionnel",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr" data-theme="dark">
      <head>
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/devicon.min.css" />
      </head>
      <body className={inter.className}>
        <Navbar />
        <main className="pt-16">
          <PageTransition>
            {children}
          </PageTransition>
        </main>
      </body>
    </html>
  );
} 