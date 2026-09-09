/**
 * Motyw kolorystyczny aplikacji. „auto" oznacza brak atrybutu na <html> —
 * wtedy o wyglądzie decyduje ustawienie systemu (prefers-color-scheme).
 */

export type Motyw = "auto" | "jasny" | "ciemny";

export const KLUCZ_MOTYWU = "sesje-motyw";

export const MOTYWY = [
  { id: "auto", nazwa: "Auto", ikona: "🌗" },
  { id: "jasny", nazwa: "Jasny", ikona: "☀️" },
  { id: "ciemny", nazwa: "Ciemny", ikona: "🌙" },
] as const satisfies readonly { id: Motyw; nazwa: string; ikona: string }[];

export function zapiszMotyw(motyw: Motyw): void {
  if (motyw === "auto") {
    delete document.documentElement.dataset.motyw;
    localStorage.removeItem(KLUCZ_MOTYWU);
  } else {
    document.documentElement.dataset.motyw = motyw;
    localStorage.setItem(KLUCZ_MOTYWU, motyw);
  }
}

/**
 * Skrypt wstawiany do <head> i wykonywany zanim przeglądarka cokolwiek
 * narysuje — bez niego strona mrugnęłaby na biało przed przełączeniem
 * na tryb ciemny. Musi być zwykłym stringiem, bo trafia do HTML-a.
 */
export const SKRYPT_MOTYWU = `try{var m=localStorage.getItem(${JSON.stringify(
  KLUCZ_MOTYWU,
)});if(m==="jasny"||m==="ciemny"){document.documentElement.dataset.motyw=m}}catch(e){}`;
