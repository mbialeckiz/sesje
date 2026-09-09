import type { Metadata, Viewport } from "next";
import Link from "next/link";
import PrzelacznikMotywu from "@/components/PrzelacznikMotywu";
import PrzyciskMaterialow from "@/components/PrzyciskMaterialow";
import { SKRYPT_MOTYWU } from "@/lib/motyw";
import "./globals.css";

export const metadata: Metadata = {
  title: "Dziennik sesji — Kod Emocji",
  description: "Osobisty dziennik sesji Kodu Emocji wg metodologii dr. Bradleya Nelsona",
};

export const viewport: Viewport = {
  // Pola formularzy i paski przewijania mają iść za motywem strony.
  colorScheme: "light dark",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    // Atrybut data-motyw dokłada skrypt poniżej, więc serwerowy HTML celowo
    // się nie zgadza z tym, co widzi React po nawodnieniu.
    <html lang="pl" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: SKRYPT_MOTYWU }} />
      </head>
      <body>
        <header className="pasek bez-druku">
          <div className="pasek-wnetrze">
            <Link href="/" className="pasek-nazwa">
              Dziennik sesji — Kod Emocji
            </Link>
            <nav className="pasek-nawigacja">
              <Link href="/">Portfolio</Link>
              <Link href="/mapa-emocji">Mapa Emocji</Link>
              <PrzyciskMaterialow />
              <Link href="/ustawienia">Ustawienia</Link>
              <PrzelacznikMotywu />
            </nav>
          </div>
        </header>
        <main className="strona">{children}</main>
      </body>
    </html>
  );
}
