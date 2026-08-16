import Link from "next/link";
import { notFound } from "next/navigation";
import FormularzKlienta from "@/components/FormularzKlienta";
import { akcjaUsunKlienta, akcjaZapiszKlienta } from "@/lib/akcje";
import { klient, klienciZSesjami } from "@/lib/dane";
import { pelneImie } from "@/lib/format";

export const dynamic = "force-dynamic";

export default async function EdycjaKlienta({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const dane = klient(Number(id));
  if (!dane) notFound();

  const liczbaSesji = klienciZSesjami().find((k) => k.id === dane.id)?.sesje.length ?? 0;

  return (
    <>
      <h1>{pelneImie(dane.imie, dane.inicjal)}</h1>
      <Link href="/" className="powrot">
        ← Wróć do portfolio
      </Link>

      <FormularzKlienta
        klient={dane}
        akcja={akcjaZapiszKlienta}
        akcjaUsun={akcjaUsunKlienta}
        liczbaSesji={liczbaSesji}
      />
    </>
  );
}
