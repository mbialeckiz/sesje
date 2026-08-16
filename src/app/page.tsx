import Link from "next/link";
import TabelaKlientow from "@/components/TabelaKlientow";
import { cele, klienciZSesjami, liczniki } from "@/lib/dane";
import { dataDluga, liczbaSesji, uwolnioneEmocje } from "@/lib/format";

export const dynamic = "force-dynamic";

function Licznik({
  nazwa,
  wartosc,
  cel,
  opis,
}: {
  nazwa: string;
  wartosc: number;
  cel: number;
  opis: string;
}) {
  const procent = Math.min(100, Math.round((wartosc / cel) * 100));
  return (
    <div className="licznik">
      <span className="licznik-info" title={opis} aria-label={opis}>
        ?
      </span>
      <div className="licznik-nazwa">{nazwa}</div>
      <div>
        <span className="licznik-wartosc">{wartosc}</span>
        <span className="licznik-cel"> / {cel}</span>
      </div>
      <div className="licznik-pasek">
        <div className="licznik-wypelnienie" style={{ width: `${procent}%` }} />
      </div>
    </div>
  );
}

export default async function Portfolio() {
  const klienci = klienciZSesjami();
  const l = liczniki();
  const c = cele();

  return (
    <>
      <h1>Portfolio sesji</h1>

      <div className="liczniki">
        <Licznik
          nazwa="Sesje własne"
          wartosc={l.sesje_wlasne}
          cel={c.cel_sesje_wlasne}
          opis="Sesje wykonane na sobie — na kliencie oznaczonym jako „To ja”."
        />
        <Licznik
          nazwa="Sesje z kontynuacją"
          wartosc={l.sesje_z_kontynuacja}
          cel={c.cel_sesje_z_kontynuacja}
          opis="Sesje, które są kolejną sesją z tym samym klientem — czyli kontynuacją wcześniejszej pracy."
        />
        <Licznik
          nazwa="Usunięte Mury Serca"
          wartosc={l.mury_serca}
          cel={c.cel_mury_serca}
          opis="Klienci z zaznaczonym „Mur Serca w pełni usunięty”."
        />
        <Licznik
          nazwa="Sesje ze zwierzętami"
          wartosc={l.sesje_zwierzeta}
          cel={c.cel_sesje_zwierzeta}
          opis="Sesje z klientami oznaczonymi jako zwierzę."
        />
      </div>

      <div className="karta-naglowek">
        <p style={{ margin: 0, color: "var(--tekst-jasny)" }}>
          {l.wszystkie_sesje > 0 ? (
            <>
              Łącznie {liczbaSesji(l.wszystkie_sesje)} i {uwolnioneEmocje(l.uwolnione_emocje)}
              {l.ostatnia_sesja && <> · ostatnia sesja: {dataDluga(l.ostatnia_sesja)}</>}
            </>
          ) : (
            "Jeszcze nie ma żadnej zapisanej sesji."
          )}
        </p>
        <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
          <Link href="/klienci/nowy" className="btn btn-fiolet">
            + Dodaj klienta
          </Link>
          <Link href="/sesje/nowa" className="btn btn-fiolet">
            + Dodaj sesję
          </Link>
        </div>
      </div>

      <h2 style={{ marginTop: "2.5rem" }}>Twoi klienci i sesje</h2>

      {klienci.length === 0 ? (
        <p className="pusto">
          Zacznij od dodania klienta — możesz też dodać samego siebie i zaznaczyć „To ja”, żeby
          liczyć sesje własne.
        </p>
      ) : (
        <TabelaKlientow klienci={klienci} />
      )}
    </>
  );
}
