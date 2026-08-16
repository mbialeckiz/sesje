"use client";

import { useEffect, useMemo, useState } from "react";
import { EMOCJE, WIERSZE, type Emocja } from "@/lib/emocje";

/** Usuwa polskie znaki diakrytyczne, żeby „zalosc" znalazło „Żałobę". */
function uprosc(tekst: string): string {
  return tekst
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/ł/g, "l");
}

/**
 * Modal z pełną Mapą Emocji — klikasz emocję zamiast wpisywać ją ręcznie.
 * Zostaje otwarty po wyborze, bo w jednej sesji uwalnia się zwykle kilka emocji.
 */
export default function WybieraczEmocji({
  onWybierz,
  onZamknij,
  liczbaWybranych,
}: {
  onWybierz: (emocja: Emocja) => void;
  onZamknij: () => void;
  liczbaWybranych: number;
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
    if (!fraza) return new Set(EMOCJE.map((e) => e.id));
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

  return (
    <div className="modal-tlo" role="dialog" aria-modal="true" aria-label="Mapa Emocji">
      <div className="modal">
        <div className="modal-naglowek">
          <h2 style={{ margin: 0 }}>Mapa Emocji</h2>
          <button type="button" className="btn btn-obrys btn-maly" onClick={onZamknij}>
            Gotowe{liczbaWybranych > 0 ? ` (${liczbaWybranych})` : ""}
          </button>
        </div>

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

        <div className="mapa">
          <div className="mapa-naglowek">
            <div>Narządy</div>
            <div>Kolumna A</div>
            <div>Kolumna B</div>
          </div>
          {WIERSZE.map((w) => {
            const wKolumnie = (kolumna: "A" | "B") =>
              EMOCJE.filter(
                (e) => e.wiersz === w.numer && e.kolumna === kolumna && pasujace.has(e.id),
              );
            const a = wKolumnie("A");
            const b = wKolumnie("B");
            if (a.length === 0 && b.length === 0) return null;

            return (
              <div className="mapa-wiersz" key={w.numer}>
                <div className="mapa-narzady">
                  {w.numer}. {w.narzady}
                  <small>{w.narzadyEn}</small>
                </div>
                {[a, b].map((lista, i) => (
                  <div key={i}>
                    {lista.map((e) => (
                      <button
                        key={e.id}
                        type="button"
                        className="mapa-emocja"
                        onClick={() => wybierz(e)}
                      >
                        {e.pl} <small>({e.en})</small>
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {pasujace.size === 0 && (
          <p className="pusto">Żadna emocja nie pasuje do frazy „{szukaj}".</p>
        )}
      </div>
    </div>
  );
}
