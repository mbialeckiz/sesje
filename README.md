# Dziennik sesji — Kod Emocji

Osobisty system do zapisywania sesji Kodu Emocji wg metodologii dr. Bradleya Nelsona.
Odtwarza układ portfolio używanego podczas certyfikacji i rozwija go o klikalną Mapę
Emocji oraz eksport danych.

## Co potrafi

- **Klienci** — imię, inicjał, wiek, człowiek/zwierzę, oznaczenie „to ja", Mur Serca
  (w trakcie / w pełni usunięty), notatki.
- **Sesje** — data, typ (osobista / na odległość / przez pośrednika), do 3 problemów
  z nasileniem 0–10 przed i po sesji, komentarz.
- **Klikalna Karta Kodu Emocji** — zamiast wpisywania emocji ręcznie wybierasz je z pełnej
  tablicy 60 emocji (6 wierszy narządów × kolumny A i B), z nazwami dokładnie takimi jak
  w materiałach Poziomu 1. Nad kartą widnieje pytanie otwierające dekodowanie, z wpisaną
  nazwą problemu z bieżącej sesji. Do każdej emocji zapisujesz jeden z 6 rodzajów
  (przed poczęciem, odziedziczona, prenatalna, powszechna, przejęta, współdzielona)
  oraz szczegóły — pola dopasowują się do rodzaju zgodnie z tabelą z kroku 4 materiałów
  (genealogia, trymestr, wiek wystąpienia, od kogo, z kim, zdarzenie życiowe).
  Wyszukiwarka działa też bez polskich znaków („zalosc" znajdzie „Żałość") i po
  angielskich nazwach z oryginalnej tablicy.
- **Materiały Poziomu 1 pod ręką** — komplet treści z materiałów certyfikacyjnych
  (podstawowe wartości, słowniczek, wzory na które uważać, self-testing i testowanie
  innych z opisem każdej metody, Emotion Code krok po kroku, przebieg sesji, 6 rodzajów
  uwięzionych emocji, dekodowanie, kroki do zniesienia Muru Serca, bezpieczeństwo
  zwierząt). Otwierają się w oknie nad aplikacją z górnego paska, więc możesz sprawdzić
  procedurę w trakcie wypełniania sesji, nie tracąc niezapisanego formularza.
- **Liczniki postępu** — sesje własne, sesje z kontynuacją, usunięte Mury Serca, sesje
  ze zwierzętami. Cele są edytowalne w Ustawieniach (domyślnie wymagania Poziomu 1).
- **Raport sesji** — czytelny wydruk do zapisania jako PDF lub wysłania klientowi.
- **Eksport i kopia zapasowa** — pełna kopia JSON (z odtwarzaniem) oraz zestawienie CSV,
  jeden wiersz na uwolnioną emocję, gotowe do otwarcia w Excelu.

## Wymagania

Potrzebny jest **Node.js w wersji 20 lub nowszej** — `npm` instaluje się razem z nim.
Jeśli terminal odpowiada `command not found: npm`, to znaczy, że Node.js nie jest
jeszcze zainstalowany.

Sprawdzenie:

```bash
node -v      # powinno pokazać np. v22.x.x
npm -v
```

Instalacja na macOS — wystarczy jedno z dwóch:

- pobierz instalator LTS ze strony <https://nodejs.org/en/download> (plik `.pkg`,
  klikasz „dalej", po instalacji zamknij i otwórz terminal na nowo),
- albo, jeśli masz Homebrew: `brew install node`.

Na Windowsie pobierz instalator `.msi` z tej samej strony, na Linuksie użyj menedżera
pakietów swojej dystrybucji.

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
    emocje.ts             katalog 60 emocji (PL/EN, wiersz, kolumna) i 6 rodzajów emocji
    materialy.ts          treść materiałów Poziomu 1 w postaci bloków do wyświetlenia
    db.ts                 połączenie SQLite i schemat bazy
    dane.ts               odczyt i zapis danych
    akcje.ts              akcje formularzy wraz z walidacją
```

Nazwy emocji zapisywane są w bazie jako stabilne identyfikatory z `src/lib/emocje.ts`,
więc zmiana tłumaczenia nie wymaga migracji danych.

## Zastrzeżenie

Kod Emocji nie służy do diagnozowania, leczenia ani wykluczania chorób i nie zastępuje
wizyty u lekarza.
