"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import {
  dodajKlienta,
  dodajSesje,
  przywrocKopie,
  usunKlienta,
  usunSesje,
  zapiszCele,
  zapiszKlienta,
  zapiszSesje,
  type DaneKlienta,
  type DaneSesji,
  type KopiaZapasowa,
} from "./dane";
import { EMOCJE, RODZAJE_EMOCJI, TYPY_SESJI } from "./emocje";
import type { EmocjaWejscie, ProblemWejscie } from "./typy";

const ID_EMOCJI = new Set(EMOCJE.map((e) => e.id));
const ID_RODZAJOW = new Set<string>(RODZAJE_EMOCJI.map((r) => r.id));
const ID_TYPOW = new Set<string>(TYPY_SESJI.map((t) => t.id));

/** Formularze wysyłają stan jako JSON w ukrytym polu — tu go bezpiecznie rozpakowujemy. */
function odczytajJson(formData: FormData, pole: string): unknown {
  const surowe = formData.get(pole);
  if (typeof surowe !== "string") return null;
  try {
    return JSON.parse(surowe);
  } catch {
    return null;
  }
}

function tekst(wartosc: unknown, maks = 500): string {
  return typeof wartosc === "string" ? wartosc.trim().slice(0, maks) : "";
}

function ocena(wartosc: unknown): number | null {
  const n = Number(wartosc);
  return Number.isInteger(n) && n >= 0 && n <= 10 ? n : null;
}

function czyData(wartosc: string): boolean {
  return /^\d{4}-\d{2}-\d{2}$/.test(wartosc) && !Number.isNaN(Date.parse(wartosc));
}

/* ---------------------------------------------------------------- klienci */

function odczytajKlienta(formData: FormData): DaneKlienta {
  const imie = tekst(formData.get("imie"), 80);
  if (!imie) throw new Error("Imię klienta jest wymagane.");

  // Puste pole wieku musi zostać pustym wiekiem, a nie zerem.
  const wiekTekst = tekst(formData.get("wiek"), 5);
  const wiekSurowy = wiekTekst === "" ? Number.NaN : Number(wiekTekst);
  const rodzaj = formData.get("rodzaj") === "zwierze" ? "zwierze" : "czlowiek";

  return {
    imie,
    inicjal: tekst(formData.get("inicjal"), 4) || null,
    wiek: Number.isInteger(wiekSurowy) && wiekSurowy >= 0 && wiekSurowy < 130 ? wiekSurowy : null,
    rodzaj,
    czy_ja: formData.get("czy_ja") === "on",
    ma_mur_serca: formData.get("ma_mur_serca") === "on",
    mur_serca_usuniety: formData.get("mur_serca_usuniety") === "on",
    notatki: tekst(formData.get("notatki"), 5000) || null,
  };
}

export async function akcjaDodajKlienta(formData: FormData): Promise<void> {
  const id = dodajKlienta(odczytajKlienta(formData));
  revalidatePath("/");
  // Po dodaniu klienta z poziomu formularza sesji wracamy tam z wybranym klientem.
  const powrot = tekst(formData.get("powrot"), 200);
  redirect(powrot === "sesja" ? `/sesje/nowa?klient=${id}` : "/");
}

export async function akcjaZapiszKlienta(formData: FormData): Promise<void> {
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) throw new Error("Nieprawidłowy identyfikator klienta.");
  zapiszKlienta(id, odczytajKlienta(formData));
  revalidatePath("/");
  redirect("/");
}

export async function akcjaUsunKlienta(formData: FormData): Promise<void> {
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) throw new Error("Nieprawidłowy identyfikator klienta.");
  usunKlienta(id);
  revalidatePath("/");
  redirect("/");
}

/* ------------------------------------------------------------------ sesje */

function odczytajSesje(formData: FormData): DaneSesji {
  const dane = odczytajJson(formData, "dane");
  if (!dane || typeof dane !== "object") throw new Error("Brak danych sesji.");
  const s = dane as Record<string, unknown>;

  const klient_id = Number(s.klient_id);
  if (!Number.isInteger(klient_id) || klient_id <= 0) {
    throw new Error("Wybierz klienta, którego dotyczy sesja.");
  }

  const data = tekst(s.data, 10);
  if (!czyData(data)) throw new Error("Wybierz datę sesji.");

  const typ = tekst(s.typ, 20);

  const problemy: ProblemWejscie[] = (Array.isArray(s.problemy) ? s.problemy : [])
    .slice(0, 3)
    .map((p) => {
      const w = p as Record<string, unknown>;
      return {
        nazwa: tekst(w.nazwa, 200),
        ocena_przed: ocena(w.ocena_przed),
        ocena_po: ocena(w.ocena_po),
      };
    })
    .filter((p) => p.nazwa.length > 0);

  if (problemy.length === 0) {
    throw new Error("Dodaj przynajmniej jeden problem, nad którym pracowałeś w sesji.");
  }

  const emocje: EmocjaWejscie[] = (Array.isArray(s.emocje) ? s.emocje : [])
    .slice(0, 100)
    .map((e) => {
      const w = e as Record<string, unknown>;
      const rodzaj = tekst(w.rodzaj, 30);
      return {
        emocja_id: tekst(w.emocja_id, 60),
        rodzaj: ID_RODZAJOW.has(rodzaj) ? rodzaj : "wlasna",
        mur_serca: w.mur_serca === true,
        wiek: tekst(w.wiek, 60),
        zrodlo: tekst(w.zrodlo, 120),
        notatka: tekst(w.notatka, 1000),
      };
    })
    .filter((e) => ID_EMOCJI.has(e.emocja_id));

  if (emocje.length === 0) {
    throw new Error("Dodaj przynajmniej jedną uwolnioną emocję z Mapy Emocji.");
  }

  return {
    klient_id,
    data,
    typ: ID_TYPOW.has(typ) ? typ : "osobista",
    komentarz: tekst(s.komentarz, 5000) || null,
    problemy,
    emocje,
  };
}

export async function akcjaDodajSesje(formData: FormData): Promise<void> {
  dodajSesje(odczytajSesje(formData));
  revalidatePath("/");
  redirect("/");
}

export async function akcjaZapiszSesje(formData: FormData): Promise<void> {
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) throw new Error("Nieprawidłowy identyfikator sesji.");
  zapiszSesje(id, odczytajSesje(formData));
  revalidatePath("/");
  redirect("/");
}

export async function akcjaUsunSesje(formData: FormData): Promise<void> {
  const id = Number(formData.get("id"));
  if (!Number.isInteger(id)) throw new Error("Nieprawidłowy identyfikator sesji.");
  usunSesje(id);
  revalidatePath("/");
  redirect("/");
}

/* ------------------------------------------------------------- ustawienia */

export async function akcjaZapiszCele(formData: FormData): Promise<void> {
  const pobierz = (nazwa: string): number | undefined => {
    const n = Number(formData.get(nazwa));
    return Number.isInteger(n) && n > 0 && n <= 999 ? n : undefined;
  };
  zapiszCele({
    cel_sesje_wlasne: pobierz("cel_sesje_wlasne"),
    cel_sesje_z_kontynuacja: pobierz("cel_sesje_z_kontynuacja"),
    cel_mury_serca: pobierz("cel_mury_serca"),
    cel_sesje_zwierzeta: pobierz("cel_sesje_zwierzeta"),
  });
  revalidatePath("/");
  redirect("/ustawienia?zapisano=1");
}

/**
 * Odtworzenie danych z pliku kopii zapasowej (JSON z /api/eksport/json).
 * Zastępuje całą dotychczasową zawartość bazy — po stronie formularza
 * jest to dodatkowo potwierdzane przez użytkownika.
 */
export async function akcjaImport(formData: FormData): Promise<void> {
  const plik = formData.get("plik");
  let komunikat: string | null = null;

  if (!(plik instanceof File) || plik.size === 0) {
    komunikat = "Wybierz plik kopii zapasowej.";
  } else if (plik.size > 50 * 1024 * 1024) {
    komunikat = "Plik jest za duży (limit 50 MB).";
  } else {
    let kopia: unknown = null;
    try {
      kopia = JSON.parse(await plik.text());
    } catch {
      komunikat = "Nie udało się odczytać pliku — to nie jest poprawny JSON.";
    }

    if (!komunikat) {
      const k = kopia as Partial<KopiaZapasowa> | null;
      const maTabele =
        k !== null &&
        typeof k === "object" &&
        Array.isArray(k.klienci) &&
        Array.isArray(k.sesje) &&
        Array.isArray(k.problemy) &&
        Array.isArray(k.emocje_sesji);

      if (!maTabele) {
        komunikat = "Plik nie wygląda na kopię zapasową tego systemu.";
      } else if (k!.wersja !== 1) {
        komunikat = `Nieobsługiwana wersja kopii zapasowej: ${String(k!.wersja)}.`;
      } else {
        try {
          przywrocKopie({ ...(k as KopiaZapasowa), ustawienia: k!.ustawienia ?? [] });
        } catch (e) {
          komunikat = `Import przerwany, dane pozostały bez zmian: ${
            e instanceof Error ? e.message : "nieznany błąd"
          }`;
        }
      }
    }
  }

  revalidatePath("/");
  redirect(
    komunikat
      ? `/ustawienia?blad=${encodeURIComponent(komunikat)}`
      : "/ustawienia?przywrocono=1",
  );
}
