import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dziennik sesji — Kod Emocji",
  description: "Osobisty dziennik sesji Kodu Emocji wg metodologii dr. Bradleya Nelsona",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pl">
      <body>
        <header className="pasek bez-druku">
          <div className="pasek-wnetrze">
            <Link href="/" className="pasek-nazwa">
              Dziennik sesji — Kod Emocji
            </Link>
            <nav className="pasek-nawigacja">
              <Link href="/">Portfolio</Link>
              <Link href="/mapa-emocji">Mapa Emocji</Link>
              <Link href="/ustawienia">Ustawienia</Link>
            </nav>
          </div>
        </header>
        <main className="strona">{children}</main>
      </body>
    </html>
  );
}
