"use client";

import Link from "next/link";
import { Fragment, useState } from "react";
import { dataPl, liczbaEmocji, pelneImie } from "@/lib/format";
import type { KlientZSesjami } from "@/lib/typy";

export default function TabelaKlientow({ klienci }: { klienci: KlientZSesjami[] }) {
  const [rozwiniete, setRozwiniete] = useState<number[]>([]);

  const przelacz = (id: number) =>
    setRozwiniete((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]));

  const wszystkieRozwiniete = klienci.length > 0 && rozwiniete.length === klienci.length;

  return (
    <table className="tabela">
      <thead>
        <tr>
          <th>Klient</th>
          <th>Rodzaj / wiek</th>
          <th />
          <th className="do-prawej">
            <button
              type="button"
              className="btn-tekst"
              onClick={() => setRozwiniete(wszystkieRozwiniete ? [] : klienci.map((k) => k.id))}
            >
              {wszystkieRozwiniete ? "Zwiń wszystkie" : "Rozwiń wszystkie"}
            </button>
          </th>
        </tr>
      </thead>
      <tbody>
        {klienci.map((k) => {
          const otwarty = rozwiniete.includes(k.id);
          return (
            <Fragment key={k.id}>
              <tr>
                <td>
                  <strong>{pelneImie(k.imie, k.inicjal)}</strong>{" "}
                  {k.czy_ja === 1 && <span className="znacznik znacznik-ja">To ja</span>}{" "}
                  {k.ma_mur_serca === 1 && (
                    <span
                      className="znacznik znacznik-serce"
                      title={
                        k.mur_serca_usuniety === 1
                          ? "Mur Serca w pełni usunięty"
                          : "Praca nad Murem Serca w toku"
                      }
                    >
                      {k.mur_serca_usuniety === 1 ? "Mur Serca ✓" : "Mur Serca"}
                    </span>
                  )}
                </td>
                <td>
                  {k.rodzaj === "zwierze" ? "🐾" : "👥"} {k.wiek !== null ? `${k.wiek} lat` : "—"}
                </td>
                <td>
                  <Link href={`/klienci/${k.id}`} className="btn-tekst">
                    Edytuj klienta
                  </Link>
                </td>
                <td className="do-prawej">
                  {k.sesje.length > 0 ? (
                    <button
                      type="button"
                      className="btn-tekst"
                      aria-expanded={otwarty}
                      onClick={() => przelacz(k.id)}
                    >
                      Sesje ({k.sesje.length}) {otwarty ? "▲" : "▼"}
                    </button>
                  ) : (
                    <span className="etykieta-opis">brak sesji</span>
                  )}
                </td>
              </tr>

              {otwarty &&
                k.sesje.map((s) => (
                  <tr className="wiersz-sesji" key={s.id}>
                    <td>{dataPl(s.data)}</td>
                    <td colSpan={2}>
                      {s.problemy.length > 0
                        ? s.problemy
                            .map((p) =>
                              p.ocena_przed !== null && p.ocena_po !== null
                                ? `${p.nazwa} (${p.ocena_przed} → ${p.ocena_po})`
                                : p.nazwa,
                            )
                            .join(", ")
                        : "—"}
                      <span className="etykieta-opis"> · {liczbaEmocji(s.liczba_emocji)}</span>
                    </td>
                    <td className="do-prawej">
                      <Link href={`/sesje/${s.id}`} className="btn-tekst">
                        Edytuj
                      </Link>
                      {" · "}
                      <Link href={`/sesje/${s.id}/raport`} className="btn-tekst">
                        Raport
                      </Link>
                    </td>
                  </tr>
                ))}
            </Fragment>
          );
        })}
      </tbody>
    </table>
  );
}
