import Link from "next/link";
import FormularzImportu from "@/components/FormularzImportu";
import { akcjaImport, akcjaZapiszCele } from "@/lib/akcje";
import { cele, liczniki } from "@/lib/dane";
import { liczbaSesji, uwolnioneEmocje } from "@/lib/format";

export const dynamic = "force-dynamic";

const POLA_CELOW = [
  { klucz: "cel_sesje_wlasne", nazwa: "Sesje własne" },
  { klucz: "cel_sesje_z_kontynuacja", nazwa: "Sesje z kontynuacją" },
  { klucz: "cel_mury_serca", nazwa: "Usunięte Mury Serca" },
  { klucz: "cel_sesje_zwierzeta", nazwa: "Sesje ze zwierzętami" },
] as const;

export default async function Ustawienia({
  searchParams,
}: {
  searchParams: Promise<{ zapisano?: string; przywrocono?: string; blad?: string }>;
}) {
  const { zapisano, przywrocono, blad } = await searchParams;
  const c = cele();
  const l = liczniki();

  return (
    <>
      <h1>Ustawienia</h1>
      <Link href="/" className="powrot">
        ← Wróć do portfolio
      </Link>

      {zapisano && <p className="sukces">Cele zostały zapisane.</p>}
      {przywrocono && <p className="sukces">Dane zostały odtworzone z kopii zapasowej.</p>}
      {blad && <p className="blad">{blad}</p>}

      <h2>Cele w licznikach</h2>
      <p className="etykieta-opis">
        Liczby, do których dążą paski postępu na stronie głównej. Domyślne wartości odpowiadają
        wymaganiom certyfikacyjnym Poziomu 1.
      </p>
      <form action={akcjaZapiszCele}>
        <div className="pole-wiersz">
          {POLA_CELOW.map((p) => (
            <div className="pole" key={p.klucz}>
              <label htmlFor={p.klucz}>{p.nazwa}</label>
              <input
                id={p.klucz}
                name={p.klucz}
                type="number"
                min={1}
                max={999}
                defaultValue={c[p.klucz]}
              />
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-zielony">
          Zapisz cele
        </button>
      </form>

      <h2 style={{ marginTop: "3rem" }}>Kopia zapasowa i eksport</h2>
      <p className="etykieta-opis">
        W bazie jest teraz {liczbaSesji(l.wszystkie_sesje)} i {uwolnioneEmocje(l.uwolnione_emocje)}.
        Plik bazy leży w katalogu <code>data/</code> i nie trafia do repozytorium.
      </p>

      <div className="karta">
        <h3>Pobierz</h3>
        <div className="rzad-przyciskow" style={{ marginTop: "0.5rem" }}>
          <a href="/api/eksport/json" className="btn btn-fiolet">
            Kopia zapasowa (JSON)
          </a>
          <a href="/api/eksport/csv" className="btn btn-obrys">
            Zestawienie emocji (CSV)
          </a>
        </div>
        <p className="etykieta-opis" style={{ marginTop: "1rem" }}>
          JSON odtwarza całą bazę. CSV to płaska tabela — jeden wiersz na każdą uwolnioną emocję,
          gotowa do otwarcia w Excelu lub Arkuszach Google.
        </p>
      </div>

      <div className="karta">
        <h3>Odtwórz z kopii</h3>
        <p className="etykieta-opis">
          Wczytanie kopii <strong>zastąpi wszystkie obecne dane</strong>. Zrób najpierw eksport
          JSON, jeśli chcesz zachować bieżący stan.
        </p>
        <FormularzImportu akcja={akcjaImport} />
      </div>
    </>
  );
}
