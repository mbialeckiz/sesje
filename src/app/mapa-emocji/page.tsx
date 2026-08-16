import Link from "next/link";
import { licznikEmocji } from "@/lib/dane";
import { EMOCJE, RODZAJE_EMOCJI, WIERSZE } from "@/lib/emocje";

export const dynamic = "force-dynamic";

export default async function MapaEmocji() {
  const liczniki = licznikEmocji();

  return (
    <>
      <h1>Mapa Emocji</h1>
      <Link href="/" className="powrot">
        ← Wróć do portfolio
      </Link>

      <p className="etykieta-opis">
        60 emocji w układzie z „Kodu Emocji” dr. Bradleya Nelsona — 6 wierszy po parze narządów,
        kolumny A i B. Liczba przy emocji pokazuje, ile razy uwolniłeś ją w zapisanych sesjach.
      </p>

      <div className="mapa" style={{ marginTop: "1.5rem" }}>
        <div className="mapa-naglowek">
          <div>Narządy</div>
          <div>Kolumna A</div>
          <div>Kolumna B</div>
        </div>
        {WIERSZE.map((w) => (
          <div className="mapa-wiersz" key={w.numer}>
            <div className="mapa-narzady">
              {w.numer}. {w.narzady}
              <small>{w.narzadyEn}</small>
            </div>
            {(["A", "B"] as const).map((kolumna) => (
              <div key={kolumna}>
                {EMOCJE.filter((e) => e.wiersz === w.numer && e.kolumna === kolumna).map((e) => {
                  const ile = liczniki.get(e.id) ?? 0;
                  return (
                    <div className="mapa-emocja" key={e.id} style={{ cursor: "default" }}>
                      {e.pl} <small>({e.en})</small>
                      {ile > 0 && <strong style={{ color: "var(--zielen-ciemna)" }}> · {ile}×</strong>}
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        ))}
      </div>

      <h2 style={{ marginTop: "2.5rem" }}>Rodzaje uwięzionych emocji</h2>
      <table className="tabela">
        <tbody>
          {RODZAJE_EMOCJI.map((r) => (
            <tr key={r.id}>
              <td style={{ width: "12rem" }}>
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
