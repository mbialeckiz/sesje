/** Formatowanie w polskiej odmianie — używane i na ekranie, i w raportach. */

export function dataPl(iso: string): string {
  const [rok, miesiac, dzien] = iso.split("-");
  return `${Number(dzien)}.${miesiac}.${rok}`;
}

export function dataDluga(iso: string): string {
  const data = new Date(`${iso}T12:00:00`);
  if (Number.isNaN(data.getTime())) return iso;
  return data.toLocaleDateString("pl-PL", { day: "numeric", month: "long", year: "numeric" });
}

/** Polska odmiana rzeczownika przez liczebnik: 1 emocja, 2 emocje, 5 emocji. */
export function odmien(ile: number, jedna: string, dwie: string, wiele: string): string {
  const abs = Math.abs(ile);
  if (abs === 1) return jedna;
  const ostatnia = abs % 10;
  const dwieOstatnie = abs % 100;
  if (ostatnia >= 2 && ostatnia <= 4 && (dwieOstatnie < 12 || dwieOstatnie > 14)) return dwie;
  return wiele;
}

export function liczbaEmocji(ile: number): string {
  return `${ile} ${odmien(ile, "emocja", "emocje", "emocji")}`;
}

export function liczbaSesji(ile: number): string {
  return `${ile} ${odmien(ile, "sesja", "sesje", "sesji")}`;
}

/** „1 uwolniona emocja", „3 uwolnione emocje", „12 uwolnionych emocji". */
export function uwolnioneEmocje(ile: number): string {
  return `${ile} ${odmien(ile, "uwolniona emocja", "uwolnione emocje", "uwolnionych emocji")}`;
}

export function pelneImie(imie: string, inicjal: string | null): string {
  return inicjal ? `${imie} ${inicjal}.` : imie;
}
