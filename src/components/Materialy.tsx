"use client";

import { useEffect, useRef, useState } from "react";
import Bloki from "./TrescMaterialow";
import { MATERIALY, ZRODLO_MATERIALOW } from "@/lib/materialy";

/**
 * Materiały Poziomu 1 w oknie nad aplikacją — otwierane z górnego paska.
 * Modal, a nie osobna strona, żeby dało się zajrzeć do procedury w trakcie
 * wypełniania sesji, nie tracąc niezapisanego formularza.
 */
export default function Materialy({
  onZamknij,
  sekcjaStartowa,
}: {
  onZamknij: () => void;
  sekcjaStartowa?: string;
}) {
  const [aktywna, setAktywna] = useState(sekcjaStartowa ?? MATERIALY[0].id);
  const tresc = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const naKlawisz = (e: KeyboardEvent) => {
      if (e.key === "Escape") onZamknij();
    };
    document.addEventListener("keydown", naKlawisz);

    const poprzedni = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.removeEventListener("keydown", naKlawisz);
      document.body.style.overflow = poprzedni;
    };
  }, [onZamknij]);

  const pokaz = (id: string) => {
    setAktywna(id);
    tresc.current?.scrollTo({ top: 0 });
  };

  const sekcja = MATERIALY.find((s) => s.id === aktywna) ?? MATERIALY[0];

  return (
    <div className="modal-tlo" role="dialog" aria-modal="true" aria-label="Materiały Poziomu 1">
      <div className="modal modal-szeroki">
        <div className="modal-naglowek">
          <h2 style={{ margin: 0 }}>Materiały Poziomu 1 — Emotion Code</h2>
          <div style={{ display: "flex", gap: "0.75rem" }}>
            <button
              type="button"
              className="btn btn-obrys btn-maly bez-druku"
              onClick={() => window.print()}
            >
              Drukuj tę sekcję
            </button>
            <button type="button" className="btn btn-zielony btn-maly" onClick={onZamknij}>
              Zamknij
            </button>
          </div>
        </div>

        <div className="materialy">
          <nav className="materialy-spis bez-druku" aria-label="Spis treści materiałów">
            {MATERIALY.map((s) => (
              <button
                key={s.id}
                type="button"
                className="materialy-pozycja"
                aria-current={s.id === aktywna}
                onClick={() => pokaz(s.id)}
              >
                {s.tytul}
              </button>
            ))}
          </nav>

          <div className="materialy-tresc" ref={tresc}>
            <h3 className="materialy-tytul">{sekcja.tytul}</h3>
            <Bloki bloki={sekcja.bloki} />
            <p className="etykieta-opis materialy-zrodlo">Źródło: {ZRODLO_MATERIALOW}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
