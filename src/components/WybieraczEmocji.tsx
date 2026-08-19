"use client";

import { useEffect, useMemo, useState } from "react";
import TabelaMapyEmocji from "./TabelaMapyEmocji";
import { EMOCJE, type Emocja } from "@/lib/emocje";
import { pytanieZProblemem } from "@/lib/materialy";

/** Usuwa polskie znaki diakrytyczne, żeby „zalosc" znalazło „Żałość". */
function uprosc(tekst: string): string {
  return tekst
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l");
}

/**
 * Modal z pełną Kartą Kodu Emocji — klikasz emocję zamiast wpisywać ją ręcznie.
 * Zostaje otwarty po wyborze, bo w jednej sesji uwalnia się zwykle kilka emocji.
 */
export default function WybieraczEmocji({
  onWybierz,
  onZamknij,
  liczbaWybranych,
  problemy = [],
}: {
  onWybierz: (emocja: Emocja) => void;
  onZamknij: () => void;
  liczbaWybranych: number;
  /** Nazwy problemów z sesji — wchodzą w miejsce podkreślnika w pytaniu otwierającym. */
  problemy?: string[];
}) {
  const [szukaj, setSzukaj] = useState("");
  const [ostatnia, setOstatnia] = useState<string | null>(null);

  useEffect(() => {
    const naKlawisz = (e: KeyboardEvent) => {
      if (e.key === "Escape") onZamknij();
    };
    document.addEventListener("keydown", naKlawisz);

    // Przy otwartej mapie przewija się sama mapa, a nie formularz pod spodem.
    const poprzedni = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", naKlawisz);
      document.body.style.overflow = poprzedni;
    };
  }, [onZamknij]);

  const pasujace = useMemo(() => {
    const fraza = uprosc(szukaj.trim());
    if (!fraza) return undefined;
    return new Set(
      EMOCJE.filter((e) => uprosc(e.pl).includes(fraza) || uprosc(e.en).includes(fraza)).map(
        (e) => e.id,
      ),
    );
  }, [szukaj]);

  const wybierz = (e: Emocja) => {
    onWybierz(e);
    setOstatnia(e.pl);
  };

  const nazwyProblemow = problemy.map((p) => p.trim()).filter(Boolean);

  return (
    <div className="modal-tlo" role="dialog" aria-modal="true" aria-label="Karta Kodu Emocji">
      <div className="modal">
        <div className="modal-naglowek">
          <h2 style={{ margin: 0 }}>Karta Kodu Emocji</h2>
          <button type="button" className="btn btn-obrys btn-maly" onClick={onZamknij}>
            Gotowe{liczbaWybranych > 0 ? ` (${liczbaWybranych})` : ""}
          </button>
        </div>

        <ol className="pytanie-otwierajace">
          {nazwyProblemow.length > 0 ? (
            nazwyProblemow.map((p) => (
              <li key={p}>
                Zapytaj: <strong>„{pytanieZProblemem(p)}”</strong>
              </li>
            ))
          ) : (
            <li>
              Zapytaj: <strong>„{pytanieZProblemem()}”</strong>
            </li>
          )}
          <li>Określ, jakiego typu jest to uwięziona emocja (rodzaj wybierzesz przy emocji).</li>
          <li>Określ kolumnę, potem wiersz, potem konkretną emocję i kliknij ją poniżej.</li>
        </ol>

        <div className="pole">
          <input
            type="text"
            value={szukaj}
            onChange={(e) => setSzukaj(e.target.value)}
            placeholder="Szukaj emocji (np. rozgoryczenie, guilt)…"
            aria-label="Szukaj emocji"
            autoFocus
          />
        </div>

        {ostatnia && (
          <p className="sukces" role="status">
            Dodano: <strong>{ostatnia}</strong>. Wybierz kolejną albo kliknij „Gotowe".
          </p>
        )}

        <TabelaMapyEmocji onWybierz={wybierz} widoczne={pasujace} />

        {pasujace?.size === 0 && (
          <p className="pusto">Żadna emocja nie pasuje do frazy „{szukaj}".</p>
        )}
      </div>
    </div>
  );
}
