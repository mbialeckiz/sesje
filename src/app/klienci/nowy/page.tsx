import Link from "next/link";
import FormularzKlienta from "@/components/FormularzKlienta";
import { akcjaDodajKlienta } from "@/lib/akcje";

export const dynamic = "force-dynamic";

export default async function NowyKlient({
  searchParams,
}: {
  searchParams: Promise<{ powrot?: string }>;
}) {
  const { powrot } = await searchParams;

  return (
    <>
      <h1>Nowy klient</h1>
      <Link href="/" className="powrot">
        ← Wróć do portfolio
      </Link>

      <div className="uwaga">
        <strong>Pamiętaj:</strong> Kod Emocji nie służy do diagnozowania, leczenia ani wykluczania
        chorób i nie zastępuje wizyty u lekarza.
      </div>

      <FormularzKlienta akcja={akcjaDodajKlienta} powrot={powrot} />
    </>
  );
}
