"use client";

/** Skala nasilenia 0–10 w kolorach oryginalnego formularza (zielony → czerwony). */
export default function Skala({
  wartosc,
  onZmiana,
  etykieta,
  id,
}: {
  wartosc: number | null;
  onZmiana: (nowa: number | null) => void;
  etykieta: string;
  id: string;
}) {
  return (
    <div role="group" aria-labelledby={id}>
      <span className="etykieta wymagane" id={id}>
        {etykieta}
      </span>
      <div className="skala">
        {Array.from({ length: 11 }, (_, n) => (
          <button
            key={n}
            type="button"
            className={`skala-btn s${n}`}
            aria-pressed={wartosc === n}
            aria-label={`${etykieta}: ${n}`}
            // Ponowne kliknięcie tej samej liczby czyści ocenę.
            onClick={() => onZmiana(wartosc === n ? null : n)}
          >
            <span>{n}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
