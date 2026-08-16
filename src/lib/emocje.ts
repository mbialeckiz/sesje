/**
 * Mapa Emocji wg dr. Bradleya Nelsona ("Kod Emocji").
 *
 * 60 emocji ułożonych w 6 wierszy (po parze narządów) i 2 kolumny (A i B),
 * po 5 emocji w każdej komórce — dokładnie tak, jak w oryginalnej tablicy
 * używanej przy testowaniu mięśniowym.
 *
 * Każda emocja ma stabilny `id` (slug) — to on trafia do bazy danych.
 * Nazwy PL/EN można w przyszłości zmienić bez migracji danych.
 */

export type Kolumna = "A" | "B";

export type Emocja = {
  id: string;
  pl: string;
  en: string;
  wiersz: number;
  kolumna: Kolumna;
};

export type WierszMapy = {
  numer: number;
  narzady: string;
  narzadyEn: string;
};

export const WIERSZE: WierszMapy[] = [
  { numer: 1, narzady: "Serce lub Jelito cienkie", narzadyEn: "Heart or Small Intestine" },
  { numer: 2, narzady: "Śledziona lub Żołądek", narzadyEn: "Spleen or Stomach" },
  { numer: 3, narzady: "Płuca lub Jelito grube", narzadyEn: "Lung or Colon" },
  { numer: 4, narzady: "Wątroba lub Pęcherzyk żółciowy", narzadyEn: "Liver or Gall Bladder" },
  { numer: 5, narzady: "Nerki lub Pęcherz moczowy", narzadyEn: "Kidneys or Bladder" },
  { numer: 6, narzady: "Gruczoły i narządy płciowe", narzadyEn: "Glands & Sexual Organs" },
];

export const EMOCJE: Emocja[] = [
  // Wiersz 1 — Serce lub Jelito cienkie
  { id: "porzucenie", pl: "Porzucenie", en: "Abandonment", wiersz: 1, kolumna: "A" },
  { id: "zdrada", pl: "Zdrada", en: "Betrayal", wiersz: 1, kolumna: "A" },
  { id: "osamotnienie", pl: "Osamotnienie", en: "Forlorn", wiersz: 1, kolumna: "A" },
  { id: "zagubienie", pl: "Zagubienie", en: "Lost", wiersz: 1, kolumna: "A" },
  { id: "nieprzyjeta-milosc", pl: "Nieprzyjęta miłość", en: "Love Unreceived", wiersz: 1, kolumna: "A" },
  { id: "niedoceniony-wysilek", pl: "Niedoceniony wysiłek", en: "Effort Unreceived", wiersz: 1, kolumna: "B" },
  { id: "bol-serca", pl: "Ból serca", en: "Heartache", wiersz: 1, kolumna: "B" },
  { id: "brak-bezpieczenstwa", pl: "Brak poczucia bezpieczeństwa", en: "Insecurity", wiersz: 1, kolumna: "B" },
  { id: "nadmierna-radosc", pl: "Nadmierna radość", en: "Overjoy", wiersz: 1, kolumna: "B" },
  { id: "bezbronnosc", pl: "Bezbronność", en: "Vulnerability", wiersz: 1, kolumna: "B" },

  // Wiersz 2 — Śledziona lub Żołądek
  { id: "lek", pl: "Lęk", en: "Anxiety", wiersz: 2, kolumna: "A" },
  { id: "rozpacz", pl: "Rozpacz", en: "Despair", wiersz: 2, kolumna: "A" },
  { id: "wstret", pl: "Wstręt", en: "Disgust", wiersz: 2, kolumna: "A" },
  { id: "nerwowosc", pl: "Nerwowość", en: "Nervousness", wiersz: 2, kolumna: "A" },
  { id: "zmartwienie", pl: "Zmartwienie", en: "Worry", wiersz: 2, kolumna: "A" },
  { id: "poczucie-porazki", pl: "Poczucie porażki", en: "Failure", wiersz: 2, kolumna: "B" },
  { id: "bezradnosc", pl: "Bezradność", en: "Helplessness", wiersz: 2, kolumna: "B" },
  { id: "beznadzieja", pl: "Beznadzieja", en: "Hopelessness", wiersz: 2, kolumna: "B" },
  { id: "brak-kontroli", pl: "Brak kontroli", en: "Lack of Control", wiersz: 2, kolumna: "B" },
  { id: "niska-samoocena", pl: "Niska samoocena", en: "Low Self-Esteem", wiersz: 2, kolumna: "B" },

  // Wiersz 3 — Płuca lub Jelito grube
  { id: "placz", pl: "Płacz", en: "Crying", wiersz: 3, kolumna: "A" },
  { id: "zniechecenie", pl: "Zniechęcenie", en: "Discouragement", wiersz: 3, kolumna: "A" },
  { id: "odrzucenie", pl: "Odrzucenie", en: "Rejection", wiersz: 3, kolumna: "A" },
  { id: "smutek", pl: "Smutek", en: "Sadness", wiersz: 3, kolumna: "A" },
  { id: "zal", pl: "Żal", en: "Sorrow", wiersz: 3, kolumna: "A" },
  { id: "dezorientacja", pl: "Dezorientacja", en: "Confusion", wiersz: 3, kolumna: "B" },
  { id: "postawa-obronna", pl: "Postawa obronna", en: "Defensiveness", wiersz: 3, kolumna: "B" },
  { id: "zaloba", pl: "Żałoba", en: "Grief", wiersz: 3, kolumna: "B" },
  { id: "znecanie-sie-nad-soba", pl: "Znęcanie się nad sobą", en: "Self-Abuse", wiersz: 3, kolumna: "B" },
  { id: "upor", pl: "Upór", en: "Stubbornness", wiersz: 3, kolumna: "B" },

  // Wiersz 4 — Wątroba lub Pęcherzyk żółciowy
  { id: "zlosc", pl: "Złość", en: "Anger", wiersz: 4, kolumna: "A" },
  { id: "rozgoryczenie", pl: "Rozgoryczenie", en: "Bitterness", wiersz: 4, kolumna: "A" },
  { id: "poczucie-winy", pl: "Poczucie winy", en: "Guilt", wiersz: 4, kolumna: "A" },
  { id: "nienawisc", pl: "Nienawiść", en: "Hatred", wiersz: 4, kolumna: "A" },
  { id: "uraza", pl: "Uraza", en: "Resentment", wiersz: 4, kolumna: "A" },
  { id: "przygnebienie", pl: "Przygnębienie", en: "Depression", wiersz: 4, kolumna: "B" },
  { id: "frustracja", pl: "Frustracja", en: "Frustration", wiersz: 4, kolumna: "B" },
  { id: "niezdecydowanie", pl: "Niezdecydowanie", en: "Indecisiveness", wiersz: 4, kolumna: "B" },
  { id: "panika", pl: "Panika", en: "Panic", wiersz: 4, kolumna: "B" },
  { id: "branie-za-pewnik", pl: "Traktowanie jak coś oczywistego", en: "Taken for Granted", wiersz: 4, kolumna: "B" },

  // Wiersz 5 — Nerki lub Pęcherz moczowy
  { id: "obwinianie", pl: "Obwinianie", en: "Blaming", wiersz: 5, kolumna: "A" },
  { id: "trwoga", pl: "Trwoga", en: "Dread", wiersz: 5, kolumna: "A" },
  { id: "strach", pl: "Strach", en: "Fear", wiersz: 5, kolumna: "A" },
  { id: "groza", pl: "Groza", en: "Horror", wiersz: 5, kolumna: "A" },
  { id: "rozdraznienie", pl: "Rozdrażnienie", en: "Peeved", wiersz: 5, kolumna: "A" },
  { id: "konflikt", pl: "Konflikt", en: "Conflict", wiersz: 5, kolumna: "B" },
  { id: "niepewnosc-tworcza", pl: "Niepewność twórcza", en: "Creative Insecurity", wiersz: 5, kolumna: "B" },
  { id: "przerazenie", pl: "Przerażenie", en: "Terror", wiersz: 5, kolumna: "B" },
  { id: "brak-wsparcia", pl: "Brak wsparcia", en: "Unsupported", wiersz: 5, kolumna: "B" },
  { id: "chwiejnosc", pl: "Chwiejność", en: "Wishy Washy", wiersz: 5, kolumna: "B" },

  // Wiersz 6 — Gruczoły i narządy płciowe
  { id: "upokorzenie", pl: "Upokorzenie", en: "Humiliation", wiersz: 6, kolumna: "A" },
  { id: "zazdrosc", pl: "Zazdrość", en: "Jealousy", wiersz: 6, kolumna: "A" },
  { id: "tesknota", pl: "Tęsknota", en: "Longing", wiersz: 6, kolumna: "A" },
  { id: "zadza", pl: "Żądza", en: "Lust", wiersz: 6, kolumna: "A" },
  { id: "przytloczenie", pl: "Przytłoczenie", en: "Overwhelm", wiersz: 6, kolumna: "A" },
  { id: "duma", pl: "Duma", en: "Pride", wiersz: 6, kolumna: "B" },
  { id: "wstyd", pl: "Wstyd", en: "Shame", wiersz: 6, kolumna: "B" },
  { id: "szok", pl: "Szok", en: "Shock", wiersz: 6, kolumna: "B" },
  { id: "niegodnosc", pl: "Poczucie bycia niegodnym", en: "Unworthy", wiersz: 6, kolumna: "B" },
  { id: "bezwartosciowosc", pl: "Poczucie bezwartościowości", en: "Worthless", wiersz: 6, kolumna: "B" },
];

const INDEKS = new Map(EMOCJE.map((e) => [e.id, e]));

export function emocja(id: string): Emocja | undefined {
  return INDEKS.get(id);
}

/** Nazwa emocji do wyświetlenia; nieznane id pokazujemy dosłownie, żeby nic nie zniknęło. */
export function nazwaEmocji(id: string): string {
  return INDEKS.get(id)?.pl ?? id;
}

/** Emocje z jednej komórki mapy (wiersz + kolumna), w kolejności alfabetycznej oryginału. */
export function komorka(wiersz: number, kolumna: Kolumna): Emocja[] {
  return EMOCJE.filter((e) => e.wiersz === wiersz && e.kolumna === kolumna);
}

/**
 * Rodzaje uwięzionych emocji. Poza zwykłą emocją własną dr Nelson wyróżnia
 * emocje przejęte od innych, odziedziczone w chwili poczęcia i współdzielone.
 */
export const RODZAJE_EMOCJI = [
  { id: "wlasna", nazwa: "Własna", opis: "Zwykła uwięziona emocja przeżyta przez klienta" },
  { id: "odziedziczona", nazwa: "Odziedziczona", opis: "Przekazana w chwili poczęcia przez rodzica" },
  { id: "przejeta", nazwa: "Przejęta", opis: "Wchłonięta od innej osoby przebywającej w pobliżu" },
  { id: "wspoldzielona", nazwa: "Współdzielona", opis: "Uwalniana jednocześnie u kilku osób" },
  { id: "prenatalna", nazwa: "Prenatalna", opis: "Uwięziona w łonie matki" },
  { id: "przedpoczeciowa", nazwa: "Przedpoczęciowa", opis: "Powstała przed poczęciem" },
] as const;

export type RodzajEmocji = (typeof RODZAJE_EMOCJI)[number]["id"];

export function nazwaRodzaju(id: string): string {
  return RODZAJE_EMOCJI.find((r) => r.id === id)?.nazwa ?? id;
}

/** Rodzaje, dla których pole „źródło" (od kogo / z kim) ma sens. */
export function rodzajWymagaZrodla(id: string): boolean {
  return id === "odziedziczona" || id === "przejeta" || id === "wspoldzielona";
}

export const TYPY_SESJI = [
  { id: "osobista", nazwa: "Osobista", opis: "Klient obecny fizycznie" },
  { id: "proxy", nazwa: "Na odległość (proxy)", opis: "Testujesz na sobie w zastępstwie nieobecnego klienta" },
  { id: "posrednik", nazwa: "Przez pośrednika (surrogate)", opis: "Testujesz przez ciało innej osoby (niemowlę, zwierzę)" },
] as const;

export type TypSesji = (typeof TYPY_SESJI)[number]["id"];

export function nazwaTypuSesji(id: string): string {
  return TYPY_SESJI.find((t) => t.id === id)?.nazwa ?? id;
}
