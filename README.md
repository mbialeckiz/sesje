# Dziennik sesji — Kod Emocji

Osobisty system do zapisywania sesji Kodu Emocji wg metodologii dr. Bradleya Nelsona.
Odtwarza układ portfolio używanego podczas certyfikacji i rozwija go o klikalną Mapę
Emocji oraz eksport danych.

## Co potrafi

- **Klienci** — imię, inicjał, wiek, człowiek/zwierzę, oznaczenie „to ja", Mur Serca
  (w trakcie / w pełni usunięty), notatki.
- **Sesje** — data, typ (osobista / na odległość / przez pośrednika), do 3 problemów
  z nasileniem 0–10 przed i po sesji, komentarz.
- **Klikalna Mapa Emocji** — zamiast wpisywania emocji ręcznie wybierasz je z pełnej
  tablicy 60 emocji (6 wierszy narządów × kolumny A i B). Do każdej emocji zapisujesz
  rodzaj (własna, odziedziczona, przejęta, współdzielona, prenatalna, przedpoczęciowa),
  wiek/okoliczności uwięzienia, od kogo pochodzi oraz czy należy do Muru Serca.
  Wyszukiwarka działa też bez polskich znaków („zaloba" znajdzie „Żałobę") i po
  angielskich nazwach z oryginalnej tablicy.
- **Liczniki postępu** — sesje własne, sesje z kontynuacją, usunięte Mury Serca, sesje
  ze zwierzętami. Cele są edytowalne w Ustawieniach (domyślnie wymagania Poziomu 1).
- **Raport sesji** — czytelny wydruk do zapisania jako PDF lub wysłania klientowi.
- **Eksport i kopia zapasowa** — pełna kopia JSON (z odtwarzaniem) oraz zestawienie CSV,
  jeden wiersz na uwolnioną emocję, gotowe do otwarcia w Excelu.

## Uruchomienie

```bash
npm install
npm run dev          # tryb roboczy, http://localhost:3000
```

Wersja produkcyjna:

```bash
npm run build
npm start
```

## Dane

Wszystko leży w jednym pliku SQLite: `data/sesje.db`. Katalog `data/` jest wykluczony
z repozytorium — dane klientów nigdy nie trafiają na GitHuba. Inną lokalizację bazy
ustawia zmienna `SESJE_DB`:

```bash
SESJE_DB=/sciezka/do/mojej-bazy.db npm start
```

Kopię zapasową rób z poziomu **Ustawień** (przycisk „Kopia zapasowa (JSON)") albo
kopiując plik `data/sesje.db`.

## Struktura

```
src/
  app/                    strony (portfolio, klienci, sesje, raport, mapa, ustawienia)
    api/eksport/          pobieranie CSV i JSON
  components/             formularze, skala 0–10, modal Mapy Emocji, tabela klientów
  lib/
    emocje.ts             katalog 60 emocji (PL/EN, wiersz, kolumna) i rodzaje emocji
    db.ts                 połączenie SQLite i schemat bazy
    dane.ts               odczyt i zapis danych
    akcje.ts              akcje formularzy wraz z walidacją
```

Nazwy emocji zapisywane są w bazie jako stabilne identyfikatory z `src/lib/emocje.ts`,
więc zmiana tłumaczenia nie wymaga migracji danych.

## Zastrzeżenie

Kod Emocji nie służy do diagnozowania, leczenia ani wykluczania chorób i nie zastępuje
wizyty u lekarza.
