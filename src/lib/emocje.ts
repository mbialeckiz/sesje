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
  { numer: 3, narzady: "Płuca lub Okrężnica", narzadyEn: "Lung or Colon" },
  { numer: 4, narzady: "Wątroba lub Woreczek żółciowy", narzadyEn: "Liver or Gall Bladder" },
  { numer: 5, narzady: "Nerki lub Pęcherz moczowy", narzadyEn: "Kidneys or Bladder" },
  { numer: 6, narzady: "Gruczoły lub Narządy płciowe", narzadyEn: "Glands & Sexual Organs" },
];

export const EMOCJE: Emocja[] = [
  // Wiersz 1 — Serce lub Jelito cienkie
  { id: "porzucenie", pl: "Porzucenie", en: "Abandonment", wiersz: 1, kolumna: "A" },
  { id: "zdrada", pl: "Zdrada", en: "Betrayal", wiersz: 1, kolumna: "A" },
  { id: "osamotnienie", pl: "Opuszczenie", en: "Forlorn", wiersz: 1, kolumna: "A" },
  { id: "zagubienie", pl: "Zagubienie", en: "Lost", wiersz: 1, kolumna: "A" },
  { id: "nieprzyjeta-milosc", pl: "Nieodwzajemniona miłość", en: "Love Unreceived", wiersz: 1, kolumna: "A" },
  { id: "niedoceniony-wysilek", pl: "Niedocenienie", en: "Effort Unreceived", wiersz: 1, kolumna: "B" },
  { id: "bol-serca", pl: "Złamane serce", en: "Heartache", wiersz: 1, kolumna: "B" },
  { id: "brak-bezpieczenstwa", pl: "Niepewność", en: "Insecurity", wiersz: 1, kolumna: "B" },
  { id: "nadmierna-radosc", pl: "Euforia", en: "Overjoy", wiersz: 1, kolumna: "B" },
  { id: "bezbronnosc", pl: "Wrażliwość", en: "Vulnerability", wiersz: 1, kolumna: "B" },

  // Wiersz 2 — Śledziona lub Żołądek
  { id: "lek", pl: "Niepokój", en: "Anxiety", wiersz: 2, kolumna: "A" },
  { id: "rozpacz", pl: "Rozpacz", en: "Despair", wiersz: 2, kolumna: "A" },
  { id: "wstret", pl: "Odraza", en: "Disgust", wiersz: 2, kolumna: "A" },
  { id: "nerwowosc", pl: "Zdenerwowanie", en: "Nervousness", wiersz: 2, kolumna: "A" },
  { id: "zmartwienie", pl: "Martwienie się", en: "Worry", wiersz: 2, kolumna: "A" },
  { id: "poczucie-porazki", pl: "Porażka", en: "Failure", wiersz: 2, kolumna: "B" },
  { id: "bezradnosc", pl: "Bezsilność", en: "Helplessness", wiersz: 2, kolumna: "B" },
  { id: "beznadzieja", pl: "Beznadzieja", en: "Hopelessness", wiersz: 2, kolumna: "B" },
  { id: "brak-kontroli", pl: "Brak kontroli", en: "Lack of Control", wiersz: 2, kolumna: "B" },
  { id: "niska-samoocena", pl: "Niska samoocena", en: "Low Self-Esteem", wiersz: 2, kolumna: "B" },

  // Wiersz 3 — Płuca lub Okrężnica
  { id: "placz", pl: "Płacz", en: "Crying", wiersz: 3, kolumna: "A" },
  { id: "zniechecenie", pl: "Zniechęcenie", en: "Discouragement", wiersz: 3, kolumna: "A" },
  { id: "odrzucenie", pl: "Odrzucenie", en: "Rejection", wiersz: 3, kolumna: "A" },
  { id: "smutek", pl: "Smutek", en: "Sadness", wiersz: 3, kolumna: "A" },
  { id: "zal", pl: "Żałość", en: "Sorrow", wiersz: 3, kolumna: "A" },
  { id: "dezorientacja", pl: "Zdezorientowanie", en: "Confusion", wiersz: 3, kolumna: "B" },
  { id: "postawa-obronna", pl: "Bronienie się", en: "Defensiveness", wiersz: 3, kolumna: "B" },
  { id: "zaloba", pl: "Żal", en: "Grief", wiersz: 3, kolumna: "B" },
  { id: "znecanie-sie-nad-soba", pl: "Samokrzywdzenie", en: "Self-Abuse", wiersz: 3, kolumna: "B" },
  { id: "upor", pl: "Zaciętość", en: "Stubbornness", wiersz: 3, kolumna: "B" },

  // Wiersz 4 — Wątroba lub Woreczek żółciowy
  { id: "zlosc", pl: "Złość", en: "Anger", wiersz: 4, kolumna: "A" },
  { id: "rozgoryczenie", pl: "Rozgoryczenie", en: "Bitterness", wiersz: 4, kolumna: "A" },
  { id: "poczucie-winy", pl: "Poczucie winy", en: "Guilt", wiersz: 4, kolumna: "A" },
  { id: "nienawisc", pl: "Nienawiść", en: "Hatred", wiersz: 4, kolumna: "A" },
  { id: "uraza", pl: "Uraza", en: "Resentment", wiersz: 4, kolumna: "A" },
  { id: "przygnebienie", pl: "Depresja", en: "Depression", wiersz: 4, kolumna: "B" },
  { id: "frustracja", pl: "Frustracja", en: "Frustration", wiersz: 4, kolumna: "B" },
  { id: "niezdecydowanie", pl: "Niezdecydowanie", en: "Indecisiveness", wiersz: 4, kolumna: "B" },
  { id: "panika", pl: "Panika", en: "Panic", wiersz: 4, kolumna: "B" },
  { id: "branie-za-pewnik", pl: "Brak uznania", en: "Taken for Granted", wiersz: 4, kolumna: "B" },

  // Wiersz 5 — Nerki lub Pęcherz moczowy
  { id: "obwinianie", pl: "Obwinianie", en: "Blaming", wiersz: 5, kolumna: "A" },
  { id: "trwoga", pl: "Groza", en: "Dread", wiersz: 5, kolumna: "A" },
  { id: "strach", pl: "Strach", en: "Fear", wiersz: 5, kolumna: "A" },
  { id: "groza", pl: "Przerażenie", en: "Horror", wiersz: 5, kolumna: "A" },
  { id: "rozdraznienie", pl: "Zirytowanie", en: "Peeved", wiersz: 5, kolumna: "A" },
  { id: "konflikt", pl: "Konflikt", en: "Conflict", wiersz: 5, kolumna: "B" },
  { id: "niepewnosc-tworcza", pl: "Niepewność tworzenia", en: "Creative Insecurity", wiersz: 5, kolumna: "B" },
  { id: "przerazenie", pl: "Poczucie sterroryzowania", en: "Terror", wiersz: 5, kolumna: "B" },
  { id: "brak-wsparcia", pl: "Brak wsparcia", en: "Unsupported", wiersz: 5, kolumna: "B" },
  { id: "chwiejnosc", pl: "Bycie bez wyrazu", en: "Wishy Washy", wiersz: 5, kolumna: "B" },

  // Wiersz 6 — Gruczoły lub Narządy płciowe
  { id: "upokorzenie", pl: "Poniżenie", en: "Humiliation", wiersz: 6, kolumna: "A" },
  { id: "zazdrosc", pl: "Zazdrość", en: "Jealousy", wiersz: 6, kolumna: "A" },
  { id: "tesknota", pl: "Tęsknota", en: "Longing", wiersz: 6, kolumna: "A" },
  { id: "zadza", pl: "Pożądanie", en: "Lust", wiersz: 6, kolumna: "A" },
  { id: "przytloczenie", pl: "Przytłoczenie", en: "Overwhelm", wiersz: 6, kolumna: "A" },
  { id: "duma", pl: "Duma", en: "Pride", wiersz: 6, kolumna: "B" },
  { id: "wstyd", pl: "Wstyd", en: "Shame", wiersz: 6, kolumna: "B" },
  { id: "szok", pl: "Zaszokowanie", en: "Shock", wiersz: 6, kolumna: "B" },
  { id: "niegodnosc", pl: "Bycie niegodnym", en: "Unworthy", wiersz: 6, kolumna: "B" },
  { id: "bezwartosciowosc", pl: "Bycie bezwartościowym", en: "Worthless", wiersz: 6, kolumna: "B" },
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
 * 6 rodzajów uwięzionych emocji wg materiałów Poziomu 1 — w kolejności z karty
 * (kolumna A: przed poczęciem, odziedziczona, prenatalna;
 *  kolumna B: powszechna, przejęta, współdzielona).
 */
export const RODZAJE_EMOCJI = [
  {
    id: "przedpoczeciowa",
    nazwa: "Przed poczęciem",
    kolumna: "A",
    opis: "Emocja przeżyta przed poczęciem, uwięziona w ciele energetycznym. Dość rzadka.",
  },
  {
    id: "odziedziczona",
    nazwa: "Odziedziczona",
    kolumna: "A",
    opis: "Pochodzi od przodka biologicznego, otrzymana w momencie poczęcia.",
  },
  {
    id: "prenatalna",
    nazwa: "Prenatalna",
    kolumna: "A",
    opis: "Powstała w życiu płodowym, zwykle w trzecim trymestrze.",
  },
  {
    id: "powszechna",
    nazwa: "Powszechna",
    kolumna: "B",
    opis: "Stworzona przez Ciebie i uwięziona w trakcie życia. Najczęstszy rodzaj.",
  },
  {
    id: "przejeta",
    nazwa: "Przejęta",
    kolumna: "B",
    opis: "Stworzona przez kogoś innego i przejęta przez Twoje ciało.",
  },
  {
    id: "wspoldzielona",
    nazwa: "Współdzielona",
    kolumna: "B",
    opis: "Stworzona przez dwie lub więcej osób w tym samym momencie. Wystarczy, że uwolni ją jedna osoba.",
  },
] as const;

export type RodzajEmocji = (typeof RODZAJE_EMOCJI)[number]["id"];

export function nazwaRodzaju(id: string): string {
  return RODZAJE_EMOCJI.find((r) => r.id === id)?.nazwa ?? id;
}

/**
 * Jakie szczegóły warto odkodować dla danego rodzaju emocji — zgodnie z tabelą
 * z kroku 4 materiałów Poziomu 1. `zrodlo: null` oznacza, że dla tego rodzaju
 * pole nie ma zastosowania i jest ukrywane.
 */
export type EtykietySzczegolow = { wiek: string; zrodlo: string | null; notatka: string };

const ZDARZENIE = "Zdarzenie życiowe / gdzie w ciele";

const SZCZEGOLY: Record<string, EtykietySzczegolow> = {
  przedpoczeciowa: { wiek: "Gdzie w ciele?", zrodlo: null, notatka: "Notatka" },
  odziedziczona: {
    wiek: "Genealogia (ile pokoleń wstecz)",
    zrodlo: "Od kogo odziedziczona",
    notatka: "Notatka",
  },
  prenatalna: { wiek: "Trymestr", zrodlo: "Czyja to emocja?", notatka: "Notatka" },
  powszechna: { wiek: "Wiek wystąpienia", zrodlo: null, notatka: ZDARZENIE },
  przejeta: { wiek: "Wiek wystąpienia", zrodlo: "Przejęta od kogo?", notatka: ZDARZENIE },
  wspoldzielona: { wiek: "Wiek wystąpienia", zrodlo: "Z kim?", notatka: ZDARZENIE },
};

export function etykietySzczegolow(rodzaj: string): EtykietySzczegolow {
  return SZCZEGOLY[rodzaj] ?? SZCZEGOLY.powszechna;
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
