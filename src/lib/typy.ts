export type RodzajKlienta = "czlowiek" | "zwierze";

export type Klient = {
  id: number;
  imie: string;
  inicjal: string | null;
  wiek: number | null;
  rodzaj: RodzajKlienta;
  czy_ja: number;
  ma_mur_serca: number;
  mur_serca_usuniety: number;
  notatki: string | null;
  utworzono: string;
  zaktualizowano: string;
};

export type Sesja = {
  id: number;
  klient_id: number;
  data: string;
  typ: string;
  komentarz: string | null;
  utworzono: string;
  zaktualizowano: string;
};

export type Problem = {
  id: number;
  sesja_id: number;
  nazwa: string;
  ocena_przed: number | null;
  ocena_po: number | null;
  kolejnosc: number;
};

export type EmocjaSesji = {
  id: number;
  sesja_id: number;
  emocja_id: string;
  rodzaj: string;
  mur_serca: number;
  wiek: string | null;
  zrodlo: string | null;
  notatka: string | null;
  kolejnosc: number;
};

export type SesjaPelna = Sesja & {
  problemy: Problem[];
  emocje: EmocjaSesji[];
};

export type KlientZSesjami = Klient & {
  sesje: (Sesja & { problemy: Problem[]; liczba_emocji: number })[];
};

/** Dane jednego problemu przychodzące z formularza (przed zapisem). */
export type ProblemWejscie = {
  nazwa: string;
  ocena_przed: number | null;
  ocena_po: number | null;
};

/** Dane jednej uwolnionej emocji przychodzące z formularza (przed zapisem). */
export type EmocjaWejscie = {
  emocja_id: string;
  rodzaj: string;
  mur_serca: boolean;
  wiek: string;
  zrodlo: string;
  notatka: string;
};
