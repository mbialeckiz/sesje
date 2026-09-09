"use client";

import { useEffect, useState } from "react";
import { MOTYWY, zapiszMotyw, type Motyw } from "@/lib/motyw";

/**
 * Przełącznik trybu jasny / ciemny / automatyczny (za ustawieniem systemu).
 * Wybór ląduje w localStorage i jest odtwarzany przed pierwszym malowaniem
 * strony przez skrypt w `layout.tsx`, więc nie ma mignięcia jasnym tłem.
 */
export default function PrzelacznikMotywu() {
  const [motyw, setMotyw] = useState<Motyw>("auto");

  // Serwer nie zna wyboru użytkownika, więc pierwszy render jest zawsze
  // „auto" — dopiero po zamontowaniu bierzemy prawdziwą wartość.
  useEffect(() => {
    const zapisany = document.documentElement.dataset.motyw;
    setMotyw(zapisany === "jasny" || zapisany === "ciemny" ? zapisany : "auto");
  }, []);

  const przelacz = () => {
    const kolejny = MOTYWY[(MOTYWY.findIndex((m) => m.id === motyw) + 1) % MOTYWY.length].id;
    setMotyw(kolejny);
    zapiszMotyw(kolejny);
  };

  const biezacy = MOTYWY.find((m) => m.id === motyw) ?? MOTYWY[0];

  return (
    <button
      type="button"
      className="pasek-przycisk przelacznik-motywu"
      onClick={przelacz}
      title={`Motyw: ${biezacy.nazwa}. Kliknij, aby zmienić.`}
      aria-label={`Motyw: ${biezacy.nazwa}. Kliknij, aby zmienić.`}
    >
      <span aria-hidden="true">{biezacy.ikona}</span> {biezacy.nazwa}
    </button>
  );
}
