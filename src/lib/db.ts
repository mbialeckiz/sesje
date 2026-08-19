import Database from "better-sqlite3";
import { mkdirSync } from "node:fs";
import { dirname, join, resolve } from "node:path";

/**
 * Połączenie z bazą SQLite. Plik bazy leży domyślnie w `data/sesje.db`
 * i jest wykluczony z repozytorium — to dane wrażliwe klientów.
 * Ścieżkę można nadpisać zmienną środowiskową SESJE_DB.
 */

const SCHEMA = `
CREATE TABLE IF NOT EXISTS klienci (
  id                 INTEGER PRIMARY KEY AUTOINCREMENT,
  imie               TEXT    NOT NULL,
  inicjal            TEXT,
  wiek               INTEGER,
  rodzaj             TEXT    NOT NULL DEFAULT 'czlowiek',
  czy_ja             INTEGER NOT NULL DEFAULT 0,
  ma_mur_serca       INTEGER NOT NULL DEFAULT 0,
  mur_serca_usuniety INTEGER NOT NULL DEFAULT 0,
  notatki            TEXT,
  utworzono          TEXT    NOT NULL,
  zaktualizowano     TEXT    NOT NULL
);

CREATE TABLE IF NOT EXISTS sesje (
  id             INTEGER PRIMARY KEY AUTOINCREMENT,
  klient_id      INTEGER NOT NULL REFERENCES klienci(id) ON DELETE CASCADE,
  data           TEXT    NOT NULL,
  typ            TEXT    NOT NULL DEFAULT 'osobista',
  komentarz      TEXT,
  utworzono      TEXT    NOT NULL,
  zaktualizowano TEXT    NOT NULL
);

CREATE TABLE IF NOT EXISTS problemy (
  id           INTEGER PRIMARY KEY AUTOINCREMENT,
  sesja_id     INTEGER NOT NULL REFERENCES sesje(id) ON DELETE CASCADE,
  nazwa        TEXT    NOT NULL,
  ocena_przed  INTEGER,
  ocena_po     INTEGER,
  kolejnosc    INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS emocje_sesji (
  id         INTEGER PRIMARY KEY AUTOINCREMENT,
  sesja_id   INTEGER NOT NULL REFERENCES sesje(id) ON DELETE CASCADE,
  emocja_id  TEXT    NOT NULL,
  rodzaj     TEXT    NOT NULL DEFAULT 'powszechna',
  mur_serca  INTEGER NOT NULL DEFAULT 0,
  wiek       TEXT,
  zrodlo     TEXT,
  notatka    TEXT,
  kolejnosc  INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE IF NOT EXISTS ustawienia (
  klucz   TEXT PRIMARY KEY,
  wartosc TEXT NOT NULL
);

CREATE INDEX IF NOT EXISTS idx_sesje_klient ON sesje(klient_id, data DESC);
CREATE INDEX IF NOT EXISTS idx_problemy_sesja ON problemy(sesja_id, kolejnosc);
CREATE INDEX IF NOT EXISTS idx_emocje_sesja ON emocje_sesji(sesja_id, kolejnosc);
CREATE INDEX IF NOT EXISTS idx_emocje_katalog ON emocje_sesji(emocja_id);
`;

function utworzPolaczenie(): Database.Database {
  const sciezka = process.env.SESJE_DB
    ? resolve(/* turbopackIgnore: true */ process.env.SESJE_DB)
    : join(process.cwd(), "data", "sesje.db");
  mkdirSync(dirname(sciezka), { recursive: true });

  const baza = new Database(sciezka);
  baza.pragma("journal_mode = WAL");
  baza.pragma("foreign_keys = ON");
  baza.exec(SCHEMA);

  // Nazwa rodzaju emocji ujednolicona z Kartą Kodu Emocji: „własna" → „powszechna".
  baza.prepare("UPDATE emocje_sesji SET rodzaj = 'powszechna' WHERE rodzaj = 'wlasna'").run();

  return baza;
}

// Next.js przeładowuje moduły w trybie deweloperskim — bez cache w globalThis
// każdy hot reload otwierałby nowe połączenie z plikiem bazy.
const cache = globalThis as unknown as { __sesjeDb?: Database.Database };

export const db: Database.Database = cache.__sesjeDb ?? (cache.__sesjeDb = utworzPolaczenie());

export function teraz(): string {
  return new Date().toISOString();
}
