import Link from "next/link";
import FormularzSesji from "@/components/FormularzSesji";
import { pustyStan } from "@/lib/stanSesji";
import { akcjaDodajSesje } from "@/lib/akcje";
import { wszyscyKlienci } from "@/lib/dane";
import { pelneImie } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function NowaSesja({
  searchParams,
}: {
  searchParams: Promise<{ klient?: string }>;
}) {
  const { klient } = await searchParams;
  const klienci = wszyscyKlienci();
  const wybrany = Number(klient);

  return (
    <>
      <h1>Nowa sesja</h1>
      <Link href="/" className="powrot">
        ← Wróć do portfolio
      </Link>

      <div className="uwaga">
        <strong>Pamiętaj:</strong> Kod Emocji nie służy do diagnozowania, leczenia ani wykluczania
        chorób i nie zastępuje wizyty u lekarza.
      </div>

      {klienci.length === 0 ? (
        <p className="pusto">
          Najpierw dodaj klienta — sesję trzeba do kogoś przypisać.
          <br />
          <br />
          <Link href="/klienci/nowy?powrot=sesja" className="btn btn-fiolet">
            + Dodaj klienta
          </Link>
        </p>
      ) : (
        <FormularzSesji
          klienci={klienci.map((k) => ({
            id: k.id,
            etykieta: `${pelneImie(k.imie, k.inicjal)}${k.czy_ja ? " (to ja)" : ""}${
              k.rodzaj === "zwierze" ? " 🐾" : ""
            }`,
          }))}
          poczatkowy={pustyStan(Number.isInteger(wybrany) && wybrany > 0 ? wybrany : undefined)}
          akcja={akcjaDodajSesje}
        />
      )}
    </>
  );
}
