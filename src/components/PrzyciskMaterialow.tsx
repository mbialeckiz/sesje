"use client";

import { useState } from "react";
import Materialy from "./Materialy";

/** Wejście do materiałów Poziomu 1 z górnego paska — dostępne z każdej strony. */
export default function PrzyciskMaterialow() {
  const [otwarte, setOtwarte] = useState(false);

  return (
    <>
      <button type="button" className="pasek-przycisk" onClick={() => setOtwarte(true)}>
        Materiały Poziomu 1
      </button>
      {otwarte && <Materialy onZamknij={() => setOtwarte(false)} />}
    </>
  );
}
