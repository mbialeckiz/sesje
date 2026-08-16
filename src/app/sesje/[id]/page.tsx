import Link from "next/link";
import { notFound } from "next/navigation";
import FormularzSesji from "@/components/FormularzSesji";
import type { StanSesji } from "@/lib/stanSesji";
import { akcjaUsunSesje, akcjaZapiszSesje } from "@/lib/akcje";
import { sesja, wszyscyKlienci } from "@/lib/dane";
import { dataDluga, pelneImie } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function EdycjaSesji({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dane = sesja(Number(id));
  if (!dane) notFound();

  const klienci = wszyscyKlienci();

  const poczatkowy: StanSesji = {
    klient_id: String(dane.klient_id),
    data: dane.data,
    typ: dane.typ,
    komentarz: dane.komentarz ?? "",
    problemy: dane.problemy.map((p) => ({
      nazwa: p.nazwa,
      ocena_przed: p.ocena_przed,
      ocena_po: p.ocena_po,
    })),
    emocje: dane.emocje.map((e) => ({
      emocja_id: e.emocja_id,
      rodzaj: e.rodzaj,
      mur_serca: e.mur_serca === 1,
      wiek: e.wiek ?? "",
      zrodlo: e.zrodlo ?? "",
      notatka: e.notatka ?? "",
    })),
  };

  return (
    <>
      <h1>Sesja z {dataDluga(dane.data)}</h1>
      <div className="karta-naglowek">
        <Link href="/" className="powrot" style={{ marginBottom: 0 }}>
          ← Wróć do portfolio
        </Link>
        <Link href={`/sesje/${dane.id}/raport`} className="btn btn-obrys btn-maly">
          Raport / PDF
        </Link>
      </div>

      <FormularzSesji
        klienci={klienci.map((k) => ({
          id: k.id,
          etykieta: `${pelneImie(k.imie, k.inicjal)}${k.czy_ja ? " (to ja)" : ""}${
            k.rodzaj === "zwierze" ? " 🐾" : ""
          }`,
        }))}
        poczatkowy={poczatkowy}
        akcja={akcjaZapiszSesje}
        akcjaUsun={akcjaUsunSesje}
        idSesji={dane.id}
      />
    </>
  );
}
