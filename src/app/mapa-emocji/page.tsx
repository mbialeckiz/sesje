import Link from "next/link";
import TabelaMapyEmocji from "@/components/TabelaMapyEmocji";
import { licznikEmocji } from "@/lib/dane";
import { RODZAJE_EMOCJI } from "@/lib/emocje";

export const dynamic = "force-dynamic";

export default async function MapaEmocji() {
  const liczniki = licznikEmocji();

  return (
    <>
      <h1>Karta Kodu Emocji</h1>
      <Link href="/" className="powrot">
        ← Wróć do portfolio
      </Link>

      <p className="etykieta-opis">
        60 emocji w układzie z materiałów Poziomu 1 — 6 wierszy po parze narządów, kolumny A i B.
        Liczba przy emocji pokazuje, ile razy uwolniłeś ją w zapisanych sesjach.
      </p>

      <div style={{ marginTop: "1.5rem" }}>
        <TabelaMapyEmocji liczniki={liczniki} />
      </div>

      <h2 style={{ marginTop: "2.5rem" }}>6 rodzajów uwięzionych emocji</h2>
      <table className="tabela">
        <thead>
          <tr>
            <th style={{ width: "5rem" }}>Kolumna</th>
            <th style={{ width: "12rem" }}>Rodzaj</th>
            <th>Opis</th>
          </tr>
        </thead>
        <tbody>
          {RODZAJE_EMOCJI.map((r) => (
            <tr key={r.id}>
              <td>{r.kolumna}</td>
              <td>
                <strong>{r.nazwa}</strong>
              </td>
              <td>{r.opis}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
