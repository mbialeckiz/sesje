"use client";

import { EMOCJE, WIERSZE, type Emocja } from "@/lib/emocje";

/**
 * Karta Kodu Emocji® — 60 emocji w układzie 6 wierszy narządów × kolumny A i B.
 * Ten sam komponent obsługuje trzy zastosowania: podgląd, wybór emocji do sesji
 * i wersję osadzoną w materiałach.
 */
export default function TabelaMapyEmocji({
  onWybierz,
  widoczne,
  liczniki,
}: {
  /** Gdy podane, emocje stają się klikalnymi przyciskami. */
  onWybierz?: (emocja: Emocja) => void;
  /** Gdy podane, pokazujemy tylko emocje z tego zbioru (wynik wyszukiwania). */
  widoczne?: Set<string>;
  /** Ile razy każda emocja została uwolniona w zapisanych sesjach. */
  liczniki?: Map<string, number>;
}) {
  return (
    <div className="mapa">
      <div className="mapa-naglowek">
        <div>Narządy</div>
        <div>Kolumna A</div>
        <div>Kolumna B</div>
      </div>

      {WIERSZE.map((w) => {
        const wKolumnie = (kolumna: "A" | "B") =>
          EMOCJE.filter(
            (e) => e.wiersz === w.numer && e.kolumna === kolumna && (!widoczne || widoczne.has(e.id)),
          );
        const kolumny = [wKolumnie("A"), wKolumnie("B")];
        if (kolumny.every((k) => k.length === 0)) return null;

        return (
          <div className="mapa-wiersz" key={w.numer}>
            <div className="mapa-narzady">
              {w.numer}. {w.narzady}
              <small>{w.narzadyEn}</small>
            </div>
            {kolumny.map((lista, i) => (
              <div key={i}>
                {lista.map((e) => {
                  const ile = liczniki?.get(e.id) ?? 0;
                  const tresc = (
                    <>
                      {e.pl} <small>({e.en})</small>
                      {ile > 0 && (
                        <strong style={{ color: "var(--zielen-ciemna)" }}> · {ile}×</strong>
                      )}
                    </>
                  );

                  return onWybierz ? (
                    <button
                      key={e.id}
                      type="button"
                      className="mapa-emocja"
                      onClick={() => onWybierz(e)}
                    >
                      {tresc}
                    </button>
                  ) : (
                    <div key={e.id} className="mapa-emocja mapa-emocja-statyczna">
                      {tresc}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        );
      })}
    </div>
  );
}
