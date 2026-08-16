import { eksportEmocji } from "@/lib/dane";
import { emocja, nazwaRodzaju, nazwaTypuSesji } from "@/lib/emocje";

export const dynamic = "force-dynamic";

const NAGLOWKI = [
  "Klient",
  "Rodzaj klienta",
  "Wiek klienta",
  "Nr sesji",
  "Data sesji",
  "Typ sesji",
  "Problemy (przed→po)",
  "Emocja",
  "Emocja (EN)",
  "Wiersz mapy",
  "Kolumna",
  "Rodzaj emocji",
  "Z Muru Serca",
  "Wiek / okoliczności",
  "Od kogo / z kim",
  "Notatka",
  "Komentarz do sesji",
];

/** Pole CSV: średnik jest separatorem, więc wszystko, co go zawiera, trafia w cudzysłowy. */
function pole(wartosc: unknown): string {
  if (wartosc === null || wartosc === undefined) return "";
  const tekst = String(wartosc);
  return /[";\n\r]/.test(tekst) ? `"${tekst.replace(/"/g, '""')}"` : tekst;
}

export async function GET(): Promise<Response> {
  const wiersze = eksportEmocji().map((w) => {
    const kat = emocja(w.emocja_id);
    return [
      w.klient,
      w.rodzaj_klienta === "zwierze" ? "zwierzę" : "człowiek",
      w.wiek_klienta,
      w.sesja_id,
      w.data,
      nazwaTypuSesji(w.typ_sesji),
      w.problemy,
      kat?.pl ?? w.emocja_id,
      kat?.en ?? "",
      kat?.wiersz ?? "",
      kat?.kolumna ?? "",
      nazwaRodzaju(w.rodzaj_emocji),
      w.mur_serca ? "tak" : "nie",
      w.wiek_emocji,
      w.zrodlo,
      w.notatka,
      w.komentarz,
    ].map(pole).join(";");
  });

  // „sep=;" i BOM sprawiają, że plik otwiera się poprawnie w polskim Excelu.
  const csv = ["sep=;", NAGLOWKI.map(pole).join(";"), ...wiersze].join("\r\n");
  const nazwa = `sesje-kod-emocji-${new Date().toISOString().slice(0, 10)}.csv`;

  return new Response("﻿" + csv, {
    headers: {
      "Content-Type": "text/csv; charset=utf-8",
      "Content-Disposition": `attachment; filename="${nazwa}"`,
    },
  });
}
