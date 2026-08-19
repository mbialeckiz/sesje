"use client";

import TabelaMapyEmocji from "./TabelaMapyEmocji";
import type { Blok, PunktListy } from "@/lib/materialy";

function Punkty({ punkty }: { punkty: PunktListy[] }) {
  return (
    <>
      {punkty.map((p, i) => (
        <li key={i}>
          {p.tekst}
          {p.pod && p.pod.length > 0 && (
            <ul>
              {p.pod.map((x, j) => (
                <li key={j}>{x}</li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </>
  );
}

/** Renderuje jeden blok materiałów. Poziom steruje wielkością nagłówków grup. */
function Element({ blok, poziom }: { blok: Blok; poziom: number }) {
  switch (blok.t) {
    case "akapit":
      return <p>{blok.tekst}</p>;

    case "lista":
      return (
        <ul>
          <Punkty punkty={blok.punkty} />
        </ul>
      );

    case "kroki":
      return (
        <ol>
          <Punkty punkty={blok.punkty} />
        </ol>
      );

    case "cytat":
      return (
        <blockquote className="cytat">
          <p>{blok.tekst}</p>
          <footer>— {blok.autor}</footer>
        </blockquote>
      );

    case "wyroznienie":
      return <p className="uwaga">{blok.tekst}</p>;

    case "definicje":
      return (
        <dl className="definicje">
          {blok.pozycje.map((p, i) => (
            <div key={i}>
              <dt>{p.termin}</dt>
              <dd>{p.opis}</dd>
            </div>
          ))}
        </dl>
      );

    case "tabela":
      return (
        <div className="tabela-przewijana">
          <table className="tabela tabela-materialow">
            <thead>
              <tr>
                {blok.naglowki.map((n, i) => (
                  <th key={i}>{n}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {blok.wiersze.map((w, i) => (
                <tr key={i}>
                  {w.map((k, j) => (
                    <td key={j}>{k}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );

    case "karta-emocji":
      return <TabelaMapyEmocji />;

    case "grupa":
      return (
        <section className="grupa-materialow">
          {poziom === 0 ? <h3>{blok.tytul}</h3> : <h4>{blok.tytul}</h4>}
          <Bloki bloki={blok.bloki} poziom={poziom + 1} />
        </section>
      );
  }
}

export default function Bloki({ bloki, poziom = 0 }: { bloki: Blok[]; poziom?: number }) {
  return (
    <>
      {bloki.map((b, i) => (
        <Element key={i} blok={b} poziom={poziom} />
      ))}
    </>
  );
}
