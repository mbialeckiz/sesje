import Link from "next/link";
import { notFound } from "next/navigation";
import PrzyciskDruku from "@/components/PrzyciskDruku";
import { klient as pobierzKlienta, sesja } from "@/lib/dane";
import { emocja as znajdzEmocje, nazwaEmocji, nazwaRodzaju, nazwaTypuSesji } from "@/lib/emocje";
import { dataDluga, liczbaEmocji, pelneImie } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function Raport({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dane = sesja(Number(id));
  if (!dane) notFound();

  const klient = pobierzKlienta(dane.klient_id);

  return (
    <>
      <div className="bez-druku">
        <Link href={`/sesje/${dane.id}`} className="powrot">
          ← Wróć do sesji
        </Link>
      </div>

      <h1>Raport z sesji Kodu Emocji</h1>

      <div className="karta">
        <div className="emocja-szczegoly" style={{ marginTop: 0 }}>
          <div>
            <span className="etykieta-opis">Klient</span>
            <div>
              <strong>{klient ? pelneImie(klient.imie, klient.inicjal) : "—"}</strong>
              {klient?.wiek !== null && klient?.wiek !== undefined && <> · {klient.wiek} lat</>}
            </div>
          </div>
          <div>
            <span className="etykieta-opis">Data sesji</span>
            <div>
              <strong>{dataDluga(dane.data)}</strong>
            </div>
          </div>
          <div>
            <span className="etykieta-opis">Typ sesji</span>
            <div>
              <strong>{nazwaTypuSesji(dane.typ)}</strong>
            </div>
          </div>
          <div>
            <span className="etykieta-opis">Uwolnione emocje</span>
            <div>
              <strong>{liczbaEmocji(dane.emocje.length)}</strong>
            </div>
          </div>
        </div>
      </div>

      <h2>Problemy i ich nasilenie</h2>
      <table className="tabela">
        <thead>
          <tr>
            <th>Problem</th>
            <th>Przed sesją</th>
            <th>Po sesji</th>
            <th>Zmiana</th>
          </tr>
        </thead>
        <tbody>
          {dane.problemy.map((p) => {
            const zmiana =
              p.ocena_przed !== null && p.ocena_po !== null ? p.ocena_po - p.ocena_przed : null;
            return (
              <tr key={p.id}>
                <td>{p.nazwa}</td>
                <td>{p.ocena_przed ?? "—"}</td>
                <td>{p.ocena_po ?? "—"}</td>
                <td>
                  {zmiana === null ? "—" : zmiana === 0 ? "bez zmiany" : `${zmiana > 0 ? "+" : ""}${zmiana}`}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <h2 style={{ marginTop: "2rem" }}>Uwolnione uwięzione emocje</h2>
      {dane.emocje.length === 0 ? (
        <p className="etykieta-opis">Brak zapisanych emocji.</p>
      ) : (
        <ol>
          {dane.emocje.map((e) => {
            const kat = znajdzEmocje(e.emocja_id);
            const dodatki = [
              e.rodzaj !== "wlasna" ? nazwaRodzaju(e.rodzaj).toLowerCase() : null,
              e.zrodlo,
              e.wiek,
              e.mur_serca === 1 ? "z Muru Serca" : null,
            ].filter(Boolean);

            return (
              <li key={e.id} style={{ marginBottom: "0.4rem" }}>
                <strong>{nazwaEmocji(e.emocja_id)}</strong>
                {kat && <span className="emocja-meta"> ({kat.en})</span>}
                {dodatki.length > 0 && <> — {dodatki.join(", ")}</>}
                {e.notatka && (
                  <div className="emocja-meta" style={{ marginLeft: "0.5rem" }}>
                    {e.notatka}
                  </div>
                )}
              </li>
            );
          })}
        </ol>
      )}

      {dane.komentarz && (
        <>
          <h2 style={{ marginTop: "2rem" }}>Komentarz</h2>
          <p style={{ whiteSpace: "pre-wrap" }}>{dane.komentarz}</p>
        </>
      )}

      <p className="uwaga" style={{ marginTop: "2.5rem" }}>
        Kod Emocji nie służy do diagnozowania, leczenia ani wykluczania chorób i nie zastępuje
        wizyty u lekarza.
      </p>

      <div className="rzad-przyciskow bez-druku">
        <PrzyciskDruku />
        <Link href={`/sesje/${dane.id}`} className="btn-tekst">
          Wróć do edycji sesji
        </Link>
      </div>
    </>
  );
}
