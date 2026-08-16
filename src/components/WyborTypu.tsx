"use client";

export type OpcjaTypu = {
  id: string;
  nazwa: string;
  opis?: string;
  ikona: string;
};

/** Wybór jednej opcji z kilku „kółek" — jak przełącznik typu sesji w oryginale. */
export default function WyborTypu({
  opcje,
  wartosc,
  onZmiana,
  etykieta,
}: {
  opcje: OpcjaTypu[];
  wartosc: string;
  onZmiana: (id: string) => void;
  etykieta: string;
}) {
  return (
    <div role="group" aria-label={etykieta}>
      <span className="etykieta wymagane">{etykieta}</span>
      <div className="typy">
        {opcje.map((o) => (
          <button
            key={o.id}
            type="button"
            className="typ"
            aria-pressed={wartosc === o.id}
            title={o.opis}
            onClick={() => onZmiana(o.id)}
          >
            <span className="typ-kolo" aria-hidden="true">
              {o.ikona}
            </span>
            <span className="typ-nazwa">{o.nazwa}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
