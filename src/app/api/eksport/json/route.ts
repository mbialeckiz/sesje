import { kopiaZapasowa } from "@/lib/dane";

export const dynamic = "force-dynamic";

/** Pełna kopia zapasowa bazy — plik, z którego da się odtworzyć wszystkie dane. */
export async function GET(): Promise<Response> {
  const nazwa = `kopia-sesje-${new Date().toISOString().slice(0, 10)}.json`;
  return new Response(JSON.stringify(kopiaZapasowa(), null, 2), {
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "Content-Disposition": `attachment; filename="${nazwa}"`,
    },
  });
}
