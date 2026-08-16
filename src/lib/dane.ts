import "server-only";
import { db, teraz } from "./db";
import type {
  EmocjaSesji,
  EmocjaWejscie,
  Klient,
  KlientZSesjami,
  Problem,
  ProblemWejscie,
  Sesja,
  SesjaPelna,
} from "./typy";

/* ---------------------------------------------------------------- klienci */

export function wszyscyKlienci(): Klient[] {
  return db
    .prepare(
      `SELECT * FROM klienci
        ORDER BY czy_ja DESC, imie COLLATE NOCASE ASC, inicjal COLLATE NOCASE ASC`,
    )
    .all() as Klient[];
}

export function klient(id: number): Klient | undefined {
  return db.prepare("SELECT * FROM klienci WHERE id = ?").get(id) as Klient | undefined;
}

export type DaneKlienta = {
  imie: string;
  inicjal: string | null;
  wiek: number | null;
  rodzaj: string;
  czy_ja: boolean;
  ma_mur_serca: boolean;
  mur_serca_usuniety: boolean;
  notatki: string | null;
};

export function dodajKlienta(dane: DaneKlienta): number {
  const t = teraz();
  const wynik = db
    .prepare(
      `INSERT INTO klienci
         (imie, inicjal, wiek, rodzaj, czy_ja, ma_mur_serca, mur_serca_usuniety, notatki, utworzono, zaktualizowano)
       VALUES (@imie, @inicjal, @wiek, @rodzaj, @czy_ja, @ma_mur_serca, @mur_serca_usuniety, @notatki, @t, @t)`,
    )
    .run({
      ...dane,
      czy_ja: dane.czy_ja ? 1 : 0,
      ma_mur_serca: dane.ma_mur_serca ? 1 : 0,
      mur_serca_usuniety: dane.mur_serca_usuniety ? 1 : 0,
      t,
    });
  return Number(wynik.lastInsertRowid);
}

export function zapiszKlienta(id: number, dane: DaneKlienta): void {
  db.prepare(
    `UPDATE klienci SET
       imie = @imie, inicjal = @inicjal, wiek = @wiek, rodzaj = @rodzaj,
       czy_ja = @czy_ja, ma_mur_serca = @ma_mur_serca, mur_serca_usuniety = @mur_serca_usuniety,
       notatki = @notatki, zaktualizowano = @t
     WHERE id = @id`,
  ).run({
    ...dane,
    id,
    czy_ja: dane.czy_ja ? 1 : 0,
    ma_mur_serca: dane.ma_mur_serca ? 1 : 0,
    mur_serca_usuniety: dane.mur_serca_usuniety ? 1 : 0,
    t: teraz(),
  });
}

export function usunKlienta(id: number): void {
  db.prepare("DELETE FROM klienci WHERE id = ?").run(id);
}

/* ------------------------------------------------------------------ sesje */

export function sesja(id: number): SesjaPelna | undefined {
  const s = db.prepare("SELECT * FROM sesje WHERE id = ?").get(id) as Sesja | undefined;
  if (!s) return undefined;
  return {
    ...s,
    problemy: db
      .prepare("SELECT * FROM problemy WHERE sesja_id = ? ORDER BY kolejnosc, id")
      .all(id) as Problem[],
    emocje: db
      .prepare("SELECT * FROM emocje_sesji WHERE sesja_id = ? ORDER BY kolejnosc, id")
      .all(id) as EmocjaSesji[],
  };
}

export type DaneSesji = {
  klient_id: number;
  data: string;
  typ: string;
  komentarz: string | null;
  problemy: ProblemWejscie[];
  emocje: EmocjaWejscie[];
};

function zapiszPozycje(sesjaId: number, dane: DaneSesji): void {
  db.prepare("DELETE FROM problemy WHERE sesja_id = ?").run(sesjaId);
  db.prepare("DELETE FROM emocje_sesji WHERE sesja_id = ?").run(sesjaId);

  const wstawProblem = db.prepare(
    `INSERT INTO problemy (sesja_id, nazwa, ocena_przed, ocena_po, kolejnosc)
     VALUES (?, ?, ?, ?, ?)`,
  );
  dane.problemy.forEach((p, i) => {
    wstawProblem.run(sesjaId, p.nazwa, p.ocena_przed, p.ocena_po, i);
  });

  const wstawEmocje = db.prepare(
    `INSERT INTO emocje_sesji (sesja_id, emocja_id, rodzaj, mur_serca, wiek, zrodlo, notatka, kolejnosc)
     VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
  );
  dane.emocje.forEach((e, i) => {
    wstawEmocje.run(
      sesjaId,
      e.emocja_id,
      e.rodzaj,
      e.mur_serca ? 1 : 0,
      e.wiek || null,
      e.zrodlo || null,
      e.notatka || null,
      i,
    );
  });
}

export const dodajSesje = db.transaction((dane: DaneSesji): number => {
  const t = teraz();
  const wynik = db
    .prepare(
      `INSERT INTO sesje (klient_id, data, typ, komentarz, utworzono, zaktualizowano)
       VALUES (?, ?, ?, ?, ?, ?)`,
    )
    .run(dane.klient_id, dane.data, dane.typ, dane.komentarz, t, t);
  const id = Number(wynik.lastInsertRowid);
  zapiszPozycje(id, dane);
  return id;
});

export const zapiszSesje = db.transaction((id: number, dane: DaneSesji): void => {
  db.prepare(
    `UPDATE sesje SET klient_id = ?, data = ?, typ = ?, komentarz = ?, zaktualizowano = ?
     WHERE id = ?`,
  ).run(dane.klient_id, dane.data, dane.typ, dane.komentarz, teraz(), id);
  zapiszPozycje(id, dane);
});

export function usunSesje(id: number): void {
  db.prepare("DELETE FROM sesje WHERE id = ?").run(id);
}

/* ------------------------------------------------------------- portfolio */

export function klienciZSesjami(): KlientZSesjami[] {
  const klienci = wszyscyKlienci();
  const sesje = db
    .prepare("SELECT * FROM sesje ORDER BY data ASC, id ASC")
    .all() as Sesja[];
  const problemy = db
    .prepare("SELECT * FROM problemy ORDER BY kolejnosc, id")
    .all() as Problem[];
  const liczbyEmocji = db
    .prepare("SELECT sesja_id, COUNT(*) AS ile FROM emocje_sesji GROUP BY sesja_id")
    .all() as { sesja_id: number; ile: number }[];

  const wgSesji = new Map<number, Problem[]>();
  for (const p of problemy) {
    const lista = wgSesji.get(p.sesja_id) ?? [];
    lista.push(p);
    wgSesji.set(p.sesja_id, lista);
  }
  const licznikEmocji = new Map(liczbyEmocji.map((r) => [r.sesja_id, r.ile]));

  const wgKlienta = new Map<number, KlientZSesjami["sesje"]>();
  for (const s of sesje) {
    const lista = wgKlienta.get(s.klient_id) ?? [];
    lista.push({
      ...s,
      problemy: wgSesji.get(s.id) ?? [],
      liczba_emocji: licznikEmocji.get(s.id) ?? 0,
    });
    wgKlienta.set(s.klient_id, lista);
  }

  return klienci.map((k) => ({ ...k, sesje: wgKlienta.get(k.id) ?? [] }));
}

export type Liczniki = {
  sesje_wlasne: number;
  sesje_z_kontynuacja: number;
  mury_serca: number;
  sesje_zwierzeta: number;
  wszystkie_sesje: number;
  uwolnione_emocje: number;
  ostatnia_sesja: string | null;
};

/**
 * Liczniki z oryginalnego portfolio certyfikacyjnego.
 *
 * „Sesje z kontynuacją" liczymy jako sesje, które nie są pierwszą sesją
 * danego klienta — czyli każdą sesję będącą kontynuacją wcześniejszej pracy.
 */
export function liczniki(): Liczniki {
  const licz = (sql: string): number =>
    (db.prepare(sql).get() as { ile: number }).ile;

  return {
    sesje_wlasne: licz(
      "SELECT COUNT(*) AS ile FROM sesje s JOIN klienci k ON k.id = s.klient_id WHERE k.czy_ja = 1",
    ),
    sesje_z_kontynuacja: licz(
      `SELECT COUNT(*) AS ile FROM sesje s
        WHERE EXISTS (
          SELECT 1 FROM sesje w
           WHERE w.klient_id = s.klient_id
             AND (w.data < s.data OR (w.data = s.data AND w.id < s.id))
        )`,
    ),
    mury_serca: licz("SELECT COUNT(*) AS ile FROM klienci WHERE mur_serca_usuniety = 1"),
    sesje_zwierzeta: licz(
      "SELECT COUNT(*) AS ile FROM sesje s JOIN klienci k ON k.id = s.klient_id WHERE k.rodzaj = 'zwierze'",
    ),
    wszystkie_sesje: licz("SELECT COUNT(*) AS ile FROM sesje"),
    uwolnione_emocje: licz("SELECT COUNT(*) AS ile FROM emocje_sesji"),
    ostatnia_sesja:
      (db.prepare("SELECT MAX(data) AS data FROM sesje").get() as { data: string | null }).data,
  };
}

/** Ile razy każda emocja z katalogu została do tej pory uwolniona. */
export function licznikEmocji(): Map<string, number> {
  const wiersze = db
    .prepare("SELECT emocja_id, COUNT(*) AS ile FROM emocje_sesji GROUP BY emocja_id")
    .all() as { emocja_id: string; ile: number }[];
  return new Map(wiersze.map((w) => [w.emocja_id, w.ile]));
}

/* --------------------------------------------------------------- eksport */

export type WierszEksportu = {
  klient: string;
  rodzaj_klienta: string;
  wiek_klienta: number | null;
  sesja_id: number;
  data: string;
  typ_sesji: string;
  problemy: string;
  emocja_id: string;
  rodzaj_emocji: string;
  mur_serca: number;
  wiek_emocji: string | null;
  zrodlo: string | null;
  notatka: string | null;
  komentarz: string | null;
};

export function eksportEmocji(): WierszEksportu[] {
  return db
    .prepare(
      `SELECT
         k.imie || CASE WHEN k.inicjal IS NOT NULL AND k.inicjal <> ''
                        THEN ' ' || k.inicjal || '.' ELSE '' END AS klient,
         k.rodzaj AS rodzaj_klienta,
         k.wiek   AS wiek_klienta,
         s.id     AS sesja_id,
         s.data,
         s.typ    AS typ_sesji,
         COALESCE((
           SELECT group_concat(
                    p.nazwa || ' (' || COALESCE(p.ocena_przed, '?') || '->' || COALESCE(p.ocena_po, '?') || ')',
                    '; ')
             FROM problemy p WHERE p.sesja_id = s.id
         ), '') AS problemy,
         e.emocja_id,
         e.rodzaj AS rodzaj_emocji,
         e.mur_serca,
         e.wiek   AS wiek_emocji,
         e.zrodlo,
         e.notatka,
         s.komentarz
       FROM emocje_sesji e
       JOIN sesje s   ON s.id = e.sesja_id
       JOIN klienci k ON k.id = s.klient_id
       ORDER BY s.data, s.id, e.kolejnosc`,
    )
    .all() as WierszEksportu[];
}

export type KopiaZapasowa = {
  wersja: 1;
  utworzono: string;
  klienci: unknown[];
  sesje: unknown[];
  problemy: unknown[];
  emocje_sesji: unknown[];
  ustawienia: unknown[];
};

export function kopiaZapasowa(): KopiaZapasowa {
  const pobierz = (tabela: string) => db.prepare(`SELECT * FROM ${tabela}`).all();
  return {
    wersja: 1,
    utworzono: teraz(),
    klienci: pobierz("klienci"),
    sesje: pobierz("sesje"),
    problemy: pobierz("problemy"),
    emocje_sesji: pobierz("emocje_sesji"),
    ustawienia: pobierz("ustawienia"),
  };
}

/**
 * Odtworzenie bazy z kopii zapasowej — zastępuje CAŁĄ dotychczasową zawartość.
 * Kolumny bierzemy z pliku, ale tylko te, które faktycznie istnieją w schemacie,
 * żeby starsza lub nowsza kopia nie wywróciła zapisu.
 */
export const przywrocKopie = db.transaction((kopia: KopiaZapasowa): void => {
  const tabele = ["emocje_sesji", "problemy", "sesje", "klienci", "ustawienia"] as const;

  for (const tabela of tabele) db.prepare(`DELETE FROM ${tabela}`).run();

  for (const tabela of [...tabele].reverse()) {
    const wiersze = kopia[tabela];
    if (!Array.isArray(wiersze) || wiersze.length === 0) continue;

    const dozwolone = new Set(
      (db.prepare(`PRAGMA table_info(${tabela})`).all() as { name: string }[]).map((k) => k.name),
    );

    for (const wiersz of wiersze) {
      if (!wiersz || typeof wiersz !== "object") continue;
      const pola = Object.keys(wiersz as object).filter((k) => dozwolone.has(k));
      if (pola.length === 0) continue;
      db.prepare(
        `INSERT INTO ${tabela} (${pola.join(", ")}) VALUES (${pola.map((p) => `@${p}`).join(", ")})`,
      ).run(Object.fromEntries(pola.map((p) => [p, (wiersz as Record<string, unknown>)[p]])));
    }
  }
});

/* ------------------------------------------------------------- ustawienia */

export const DOMYSLNE_CELE = {
  cel_sesje_wlasne: 5,
  cel_sesje_z_kontynuacja: 10,
  cel_mury_serca: 5,
  cel_sesje_zwierzeta: 5,
};

export type Cele = typeof DOMYSLNE_CELE;

export function cele(): Cele {
  const wiersze = db.prepare("SELECT klucz, wartosc FROM ustawienia").all() as {
    klucz: string;
    wartosc: string;
  }[];
  const zapisane = Object.fromEntries(wiersze.map((w) => [w.klucz, w.wartosc]));
  const wynik = { ...DOMYSLNE_CELE };
  for (const klucz of Object.keys(DOMYSLNE_CELE) as (keyof Cele)[]) {
    const wartosc = Number(zapisane[klucz]);
    if (Number.isFinite(wartosc) && wartosc > 0) wynik[klucz] = wartosc;
  }
  return wynik;
}

export function zapiszCele(nowe: Partial<Cele>): void {
  const zapisz = db.prepare(
    "INSERT INTO ustawienia (klucz, wartosc) VALUES (?, ?) ON CONFLICT(klucz) DO UPDATE SET wartosc = excluded.wartosc",
  );
  for (const [klucz, wartosc] of Object.entries(nowe)) {
    if (wartosc !== undefined) zapisz.run(klucz, String(wartosc));
  }
}
