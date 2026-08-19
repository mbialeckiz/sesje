/**
 * Materiały Poziomu 1 Emotion Code (Discover Healing) — treść przeniesiona
 * jeden do jednego z materiałów certyfikacyjnych, uporządkowana w bloki,
 * żeby dało się ją wyświetlić w aplikacji i wydrukować.
 *
 * Blok "karta-emocji" jest podmieniany przy renderowaniu na Mapę Emocji
 * z src/lib/emocje.ts, żeby tablica emocji istniała w kodzie tylko raz.
 */

export type PunktListy = { tekst: string; pod?: string[] };

export type Blok =
  | { t: "akapit"; tekst: string }
  | { t: "lista"; punkty: PunktListy[] }
  | { t: "kroki"; punkty: PunktListy[] }
  | { t: "cytat"; tekst: string; autor: string }
  | { t: "definicje"; pozycje: { termin: string; opis: string }[] }
  | { t: "tabela"; naglowki: string[]; wiersze: string[][] }
  | { t: "wyroznienie"; tekst: string }
  | { t: "karta-emocji" }
  | { t: "grupa"; tytul: string; bloki: Blok[] };

export type Sekcja = { id: string; tytul: string; bloki: Blok[] };

/** Pytanie otwierające dekodowanie — pokazywane też nad Mapą Emocji. */
export const PYTANIE_OTWIERAJACE =
  "Czy jest jakaś uwięziona emocja, którą można teraz uwolnić (która przyczynia się do ______ problemu)?";

/** Wstawia nazwę problemu w miejsce podkreślnika w pytaniu otwierającym. */
export function pytanieZProblemem(problem?: string): string {
  const nazwa = problem?.trim();
  return nazwa
    ? PYTANIE_OTWIERAJACE.replace("______ problemu", `problemu: ${nazwa}`)
    : PYTANIE_OTWIERAJACE;
}

export const ZRODLO_MATERIALOW =
  "Materiały Poziomu 1 Emotion Code — Discover Healing (discoverhealing.com)";

export const MATERIALY: Sekcja[] = [
  {
    "id": "wartosci",
    "tytul": "Karta Kodu Emocji® — podstawowe wartości",
    "bloki": [
      {
        "t": "grupa",
        "tytul": "Cel Emotion Code",
        "bloki": [
          {
            "t": "cytat",
            "tekst": "Celem Emotion Code jest uwolnienie uwięzionych emocji. Wierzymy, że Emotion Code jest przyszłością medycyny energetycznej. I istnieje po to, aby pomóc nam odwrócić każdą akumulację bagażu emocjonalnego, który wszyscy mamy, uwalniając każdą Uwięzioną Emocję. Aby wszyscy byli lżejsi, aby każdy był lżejszy, aby wszyscy osiągnęli wyższy poziom wibracji na całym świecie. To może pomóc nam poczuć większą kontrolę nad tym, jakich emocji doświadczamy, i może pomóc nam automatycznie wybierać odpowiednie emocje i doświadczać naszych uczuć z intensywnością odpowiednią do sytuacji. Tak więc naprawdę tworzymy wolność od tego bagażu, który wpływa na nas wszystkich. Ważne jest, aby zdać sobie sprawę, że nie próbujemy usuwać ani zmieniać wspomnień, a raczej Emotion Code może nam pomóc, usuwając ładunek emocjonalny tych wspomnień. Abyś mógł przypomnieć sobie, jak się czułeś, bez odczuwania tego od nowa, za każdym razem, gdy pojawia się wspomnienie. Co może się zdarzać coraz rzadziej. Twój podświadomy umysł może rzadziej przywoływać bolesne wspomnienia, ponieważ nie musi już przyciągać twojej uwagi, ponieważ ładunek emocjonalny został usunięty. Tak właśnie działa The Emotion Code! Chodzi o stworzenie czystego konta dla każdego mężczyzny, kobiety i dziecka na całej planecie. Taka jest nasza wizja — zmienić dzięki temu cały świat, a ty jesteś tego częścią. Celem nie jest powstrzymanie osoby przed ponownym odczuwaniem tej konkretnej emocji, ale stworzenie czystego konta, tak aby kiedy ponownie poczuje tę emocję, nie będzie w stanie jej uwięzić i będzie w stanie zrozumieć przesłanie, które z niej płynie. Tak więc nasze emocje, zamiast być naszym wrogiem, mogą być dla nas pomocne i mogą prowadzić nas przez życie, abyśmy byli zdrowsi.",
            "autor": "Dr. Brad Nelson"
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Podstawowe wartości",
        "bloki": [
          {
            "t": "akapit",
            "tekst": "Przedstawione tu podstawowe wartości mają kluczowe znaczenie dla Twojego sukcesu jako Praktyk. Pomogą Ci one zbudować trwałe relacje z klientami, a dzięki temu Twoja działalność będzie bardziej stabilna."
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Poufność",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Zaufanie jest niezwykle ważne dla praktyków każdego rodzaju, ale szczególnie wtedy, gdy klient powierza ci pomoc, by pomóc mu poczuć się lepiej z powodu bolesnej przeszłości."
              },
              {
                "tekst": "Zachowaj wszystkie informacje o klientach jako prywatne. NIE rozmawiaj o swoich klientach z nikim innym."
              },
              {
                "tekst": "Zabezpiecz swój komputer hasłem. Załóż osobne konto użytkownika, jeśli komputer jest wspólny. Przechowuj pisemne dokumenty w zamkniętej szufladzie."
              },
              {
                "tekst": "Ujawnienie informacji o klientach jest zdradą zaufania, nawet jeśli nigdy się nie dowiedzą. Jeśli się dowiedzą, może to być dla nich upokarzające. Tak czy inaczej, jest to nisko wibracyjne!"
              },
              {
                "tekst": "Przestrzegaj tych samych przepisów dotyczących poufności, co terapeuci i lekarze, a będziesz bezpieczny."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Uczciwość (HONESTY)",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Bądź uczciwy wobec swoich klientów w całej swojej komunikacji z nimi."
              },
              {
                "tekst": "W szczególności ludzie zawsze mają tendencję do żądania gwarancji lub chcą, abyś im powiedział, że możesz ich „wyleczyć”, ale to nie jest coś, co jesteś w stanie zrobić i powinieneś im to powiedzieć."
              },
              {
                "tekst": "Zasadniczo nie składaj obietnic, których nie możesz dotrzymać, a zamiast tego przyjmij postawę „Spróbujmy”."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Transparentność",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Zachowaj przejrzystość w kwestii tego, do czego służy Emotion Code, a do czego nie."
              },
              {
                "tekst": "Bądź przejrzysty w kwestii tego, jakie są Twoje umiejętności, a jakie nie."
              },
              {
                "tekst": "Jeśli uważasz, że prawdopodobnie nie możesz komuś pomóc, powiedz mu o tym i zapisz tę rozmowę. Jeśli uważasz, że dana osoba może potrzebować opieki medycznej lub psychicznej, powiedz jej o tym."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "slowniczek",
    "tytul": "Słowniczek pojęć",
    "bloki": [
      {
        "t": "definicje",
        "pozycje": [
          {
            "termin": "Równowaga",
            "opis": "zdrowy, normalny stan, w którym warunki są odpowiednie dla ciała fizycznego do regeneracji, rozwoju i samodzielnego leczenia."
          },
          {
            "termin": "Dekodowanie",
            "opis": "proces identyfikacji braku równowagi poprzez proces eliminacji i testowanie mięśni. Ten krok obejmuje identyfikację nierównowagi, a także wszelkie niezbędne szczegóły na jej temat."
          },
          {
            "termin": "Bagaż emocjonalny",
            "opis": "zbiór uwięzionych emocji, które nagromadziłeś przez całe życie, a które mogą teraz mieć negatywny wpływ na twoje uczucia, zachowanie i zdrowie fizyczne."
          },
          {
            "termin": "Ciało energetyczne",
            "opis": "niewidzialny duch, który ożywia ciało fizyczne. Określany również jako qi, chi lub prana. Naturalnie ma bardzo wysokie wibracje, ale brak równowagi może zakłócać ten stan."
          },
          {
            "termin": "Uzdrowienie energetyczne",
            "opis": "każdy rodzaj pracy, który próbuje stworzyć bardziej zrównoważony stan energii ciała fizycznego i ciała energetycznego, w celu wzmocnienia powrotu do zdrowia fizycznego i zwiększenia dobrego samopoczucia zarówno psychicznego, jak i emocjonalnego."
          },
          {
            "termin": "Energia",
            "opis": "budulec wszystkiego we wszechświecie. Wszystko składa się z energii. Niektóre z nich są niewidzialne, inne mają postać materii fizycznej. Każda energia ma wibracje i na każdą energię mogą wpływać wibracje innych energii, pozytywnie lub negatywnie."
          },
          {
            "termin": "Meridian zarządzający",
            "opis": "(meridian akupunkturowy) — rzeka energii znajdująca się w centrum ciała, która jest połączona z innymi meridianami. Umieszczenie powiększonej intencji w tym meridianie umożliwia jej natychmiastowy przepływ przez całe ciało, kończąc uwalnianie uwięzionych emocji."
          },
          {
            "termin": "Heart-Wall (Mur Serca)",
            "opis": "bariera przed emocjonalnym bólem, stworzona przez podświadomość w celu „ochrony” serca. Zbudowana z uwięzionych emocji. Może stępić odczucia bólu serca i stworzyć emocjonalną bezduszność, ale może być pomocna, gdy jej potrzebujesz."
          },
          {
            "termin": "Nierównowaga",
            "opis": "wszystko, co jest nie tak w ciele fizycznym lub ciele energetycznym. Rzeczy, które nie należą do ciała, rzeczy, których ciału brakuje/potrzebuje, rzeczy, które przesunęły się z miejsca lub zostały przerwane. Nierównowagi mają zazwyczaj niską wibrację i zawsze zakłócają normalny, zrównoważony stan ducha/ciała. Nierównowaga często powoduje inne rodzaje nierównowagi w ciele (np. uwięziona emocja prowadząca do nierównowagi nerek). Są one nazywane „powiązanymi zaburzeniami równowagi” podczas pracy z The Body Code."
          },
          {
            "termin": "Niezrównoważony",
            "opis": "stan, w którym ciało fizyczne lub ciało energetyczne jest przeciążone licznymi zaburzeniami równowagi. Może to prowadzić do problemów z regeneracją i ewentualnym nieprawidłowym funkcjonowaniem, wśród niezliczonych innych objawów."
          },
          {
            "termin": "Intencja",
            "opis": "skoncentrowany stan umysłu ukierunkowany na określony cel. Podczas pracy z The Body Code ten krok jest ostatni. Może on obejmować uwolnienie lub korektę nierównowagi, wraz z wszelkimi pomocnymi działaniami, które dana osoba może podjąć w celu przywrócenia równowagi."
          },
          {
            "termin": "Energia magnetyczna",
            "opis": "narzędzie, które wzmacnia intencję. Może to być magnes na lodówkę, silniejszy magnes lub pole elektromagnetyczne ciała (dłoni)."
          },
          {
            "termin": "Testowanie mięśni",
            "opis": "umiejętność lub sztuka, która umożliwia komunikację z podświadomym umysłem. Możemy jej użyć, aby dostrzec niewielkie zmiany w sile mięśni, gdy zadajemy podświadomości pytanie tak/nie. Mięsień pozostanie silny, jeśli odpowiedź będzie twierdząca lub „tak”. Mięsień będzie słabszy, jeśli odpowiedź będzie negatywna lub „nie”."
          },
          {
            "termin": "Negatywna energia",
            "opis": "wibracje energii, które są z natury destrukcyjne, szkodliwe lub w jakiś sposób zaburzają równowagę."
          },
          {
            "termin": "Przeciążenie",
            "opis": "tymczasowy stan, w którym testowanie mięśni może być niejasne lub niemożliwe. Może wystąpić po uwolnieniu intensywnej nierównowagi lub pod koniec sesji, gdy osoba już rozpoczęła przetwarzanie i nie może uwolnić niczego więcej."
          },
          {
            "termin": "Ciało fizyczne",
            "opis": "zbudowane z energii w formie materii. Mogą na nie wpływać inne częstotliwości wibracyjne. W przypadku braku równowagi ciało fizyczne może wywoływać objawy informujące o tym braku równowagi."
          },
          {
            "termin": "Pozytywna energia",
            "opis": "wibracje energii, które są z natury życiodajne i równoważące."
          },
          {
            "termin": "Przetwarzanie",
            "opis": "stan, w którym ciało energetyczne i ciało fizyczne zmieniają się, aby przetworzyć uwolnienie jednej lub więcej nierównowagi. Zwykle trwa 1-3 dni. Może powodować łagodne zmęczenie lub wrażliwość emocjonalną przez około 20% czasu."
          },
          {
            "termin": "Proxy",
            "opis": "osoba, która tymczasowo łączy się z polem energetycznym/podświadomym umysłem podmiotu na odległość, aby zlokalizować i usunąć nierównowagę podmiotu."
          },
          {
            "termin": "Release (uwolnienie)",
            "opis": "proces usuwania nierównowagi po jej zidentyfikowaniu. Wymaga trzech elementów: intencji, energii magnetycznej i meridianu zarządzającego."
          },
          {
            "termin": "Rezonans",
            "opis": "gdy dwie energie wibrują razem z podobną częstotliwością, co powoduje ich aktywację lub wyzwolenie."
          },
          {
            "termin": "Podświadomy umysł",
            "opis": "ta część mózgu i ciała, która zawiera większość naszej ogólnej inteligencji. Ogromna baza danych, którą możemy przeszukiwać, aby znaleźć odpowiedzi na temat tego, czego ciało i duch potrzebują, aby znaleźć równowagę."
          },
          {
            "termin": "Subject (podmiot)",
            "opis": "osoba lub zwierzę, które potrzebuje pomocy i na które przeprowadzany jest test."
          },
          {
            "termin": "Asystent",
            "opis": "osoba, która tymczasowo dotyka i łączy się z energią innej osoby lub zwierzęcia w bliskiej odległości, dzięki czemu można zidentyfikować i usunąć nierównowagę."
          },
          {
            "termin": "Objaw",
            "opis": "sposób, w jaki ciało komunikuje nam, że ma jedną lub więcej nierównowag. Każdy brak równowagi może potencjalnie wywołać dowolny objaw."
          },
          {
            "termin": "Tester",
            "opis": "osoba przeprowadzająca test mięśniowy."
          },
          {
            "termin": "Uwięziona emocja",
            "opis": "energia emocjonalna, która utknęła w ciele. Mniej więcej wielkości zaciśniętej pięści w stanie uśpienia. Może się rozszerzyć, gdy zostanie aktywowana (wyzwolona). Uwięziona emocja może sprawić, że część nas będzie ją odczuwać przez cały czas."
          },
          {
            "termin": "Wibracja / częstotliwość wibracji",
            "opis": "znana również jako wibracja molekularna. Odnosi się to do stałego i okresowego ruchu atomów w cząsteczce i wszystkich cząstek subatomowych (energii). Częstotliwość okresowego ruchu jest znana jako częstotliwość wibracji. Częstotliwość wibracji energii określa, czy jest ona dodatnia czy ujemna oraz jakie jest jej odczucie i/lub wygląd. Dotyczy to wszystkiego we wszechświecie."
          }
        ]
      }
    ]
  },
  {
    "id": "wzory",
    "tytul": "Wzory, na które należy uważać",
    "bloki": [
      {
        "t": "akapit",
        "tekst": "Podczas wykonywania sesji treningowych możesz zauważyć, że poniższe wzorce pojawiają się w testach mięśniowych i wynikach sesji. Jeżeli tak się stanie, zwróć na to uwagę i przeczytaj odpowiedni komunikat i lekcję, aby rozwiązać problem przed kontynuacją. Wzorce takie jak te pojawiają się dość często, kiedy po raz pierwszy uczysz się Emotion Code i nie ma się czym przejmować, dopóki pracujesz nad rozwiązaniem problemu."
      },
      {
        "t": "grupa",
        "tytul": "Ciągle znajdujesz te same emocje podczas pracy nad innymi",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Komunikat: sam masz tę samą emocję, więc rezonuje ona u Twoich klientów. Więc to właśnie na nich znajdujesz, choć może nawet nie jest to ich najwyższy priorytet."
              },
              {
                "tekst": "Lekcja: musisz uwolnić tę emocję od siebie."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Ciągle znajdujesz ten sam rząd w kółko",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Komunikat: jeden lub oba te narządy są niezrównoważone."
              },
              {
                "tekst": "Wskazówka: należy podjąć konkretne działania, aby wspomóc jeden lub oba te narządy (lub zwrócić się do certyfikowanego Praktyka Body Code)."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "W kółko znajdujesz emocje w tym samym pudełku",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Komunikat: Twoje ciało mogło wejść w schemat z odpowiedziami na testowanie mięśni."
              },
              {
                "tekst": "Lekcja: być może trzeba będzie zmienić kolejność zadawania pytań lub po prostu zwolnić tempo."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Twoje sesje są pełne dziedziczonych emocji",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Komunikat: sam odziedziczyłeś emocje."
              },
              {
                "tekst": "Lekcja: musisz uwolnić od siebie odziedziczoną emocję (emocje)."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Każda odziedziczona emocja pochodzi z pewnej liczby pokoleń wstecz lub z pewnego wzorca przodków",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Komunikat: uznałeś (podświadomie), że zawsze jest jakiś wzór."
              },
              {
                "tekst": "Lekcja: ustaw intencję, aby być otwartym na rzeczywistą linię dziedziczenia."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Każda sesja ma określoną liczbę uwolnionych emocji",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Komunikat: masz (podświadomie) ustalony numer — może nie być realistyczny lub idealny."
              },
              {
                "tekst": "Lekcja: ustal intencję uwolnienia takiej liczby emocji, która będzie idealna dla każdego klienta (w granicach wyznaczonych przez program certyfikacji i/lub czas spotkania)."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "self-testing",
    "tytul": "Self-testing — testowanie na sobie",
    "bloki": [
      {
        "t": "grupa",
        "tytul": "Ogólne wskazówki dotyczące sukcesu",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Zawsze zaczynaj od chwili ciszy, prosząc o boską pomoc i skupiając się na wdzięczności."
              },
              {
                "tekst": "Wyłącz muzykę lub telewizor, wyeliminuj wszelkie rozpraszacze (szczególnie ważne przy pierwszej nauce, choć w miarę rozwoju umiejętności będzie to coraz mniej istotne)."
              },
              {
                "tekst": "Zawsze przed zastosowaniem jakiejkolwiek metody należy wykonać badanie podstawowe."
              },
              {
                "tekst": "Jeśli cokolwiek boli, natychmiast przestań i daj swojemu ciału odpocząć."
              },
              {
                "tekst": "Przełączaj metody w zależności od potrzeb."
              },
              {
                "tekst": "Praktyka, praktyka, praktyka."
              },
              {
                "tekst": "Bądź cierpliwy wobec siebie — to jest umiejętność i wymaga czasu i praktyki, aby ją dostroić."
              },
              {
                "tekst": "Bądź nawodniony."
              },
              {
                "tekst": "Utrzymuj kości szyi w jednej linii."
              },
              {
                "tekst": "Zwiększaj lub zmniejszaj ustawienia ciśnienia i oporu, aż poczujesz się komfortowo i będziesz miał wyraźne „tak” i „nie”."
              },
              {
                "tekst": "Ćwicz co najmniej dwie metody, aby zawsze mieć dostęp do metody awaryjnej."
              },
              {
                "tekst": "Baw się dobrze!"
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Test łokcia",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja dłoni/ramienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Zablokować lewy łokieć w biodrze (lewe ramię jest ramieniem oporu).",
                    "pod": [
                      "Zgiąć łokieć pod kątem 90°.",
                      "Trzymaj przedramię równolegle do podłogi, tak aby ramię było zgięte pod kątem 90°.",
                      "Trzymaj górne ramię przy ciele, tak aby łokieć znajdował się przy biodrze.",
                      "W razie potrzeby oprzyj ramię o oparcie krzesła."
                    ]
                  },
                  {
                    "tekst": "Połóż dwa palce prawej ręki na lewym nadgarstku (prawa ręka wywiera nacisk).",
                    "pod": [
                      "Połóż palce na kości ramienia i upewnij się, że pozostajesz za maleńkimi kośćmi nadgarstka i dłoni. To pomoże Ci udzielić jasnych odpowiedzi i uniknąć zranienia się."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "W tym teście będziesz delikatnie naciskać i równie delikatnie stawiać opór."
                  },
                  {
                    "tekst": "„Pokaż mi tak” = ramię jest silne",
                    "pod": [
                      "Przedramię powinno pozostać na miejscu z minimalnym ruchem."
                    ]
                  },
                  {
                    "tekst": "„Pokaż mi nie” = ramię opada",
                    "pod": [
                      "Przedramię powinno wyraźnie osłabnąć i ewentualnie spaść."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Wskazówki dotyczące sukcesu",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Zastosuj delikatny, ale rosnący nacisk w dół."
                  },
                  {
                    "tekst": "Zastosuj minimalny opór."
                  },
                  {
                    "tekst": "Zalecamy, aby opór, który stosujesz, był po prostu siłą potrzebną do utrzymania przedramienia w pozycji poziomej do podłogi, na tyle, aby nie dopuścić do jego opadnięcia."
                  },
                  {
                    "tekst": "Kiedy już uzyskasz odpowiedź, puść. Nie ma potrzeby, aby wcisnąć ramię do końca."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Test opadających kłód",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja dłoni",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Zaciśnij pięść lewą ręką."
                  },
                  {
                    "tekst": "Wyciągnij prosto lewy palec wskazujący (jest to palec oporowy)."
                  },
                  {
                    "tekst": "Połóż prawą rękę na lewej pięści."
                  },
                  {
                    "tekst": "Umieść koniec prawego małego palca na wyciągniętym lewym palcu wskazującym, na pierwszym odcinku palca zbliżonego do dłoni (jest to palec uciskowy)."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „Pokaż mi tak” i naciśnij delikatnie na palec oporowy.",
                    "pod": [
                      "Powinien trzymać się mocno przy minimalnym ruchu."
                    ]
                  },
                  {
                    "tekst": "Powiedz „Pokaż mi nie” i powtórz.",
                    "pod": [
                      "Palec oporowy powinien osłabnąć i opaść."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Wskazówki dotyczące sukcesu",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Dostosuj opór i/lub ciśnienie i powtarzaj wypowiedzi aż do uzyskania jasnych odpowiedzi."
                  },
                  {
                    "tekst": "Idź powoli."
                  },
                  {
                    "tekst": "Stosuj minimalny nacisk i opór."
                  },
                  {
                    "tekst": "Jeśli coś boli, natychmiast przestań i zastosuj inną metodę lub daj ciału odpocząć."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Test flików",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja dłoni",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Umieść koniec małego palca na odcisku kciuka (może to być trudne, jeśli masz długie paznokcie)."
                  },
                  {
                    "tekst": "Przyciśnij delikatnie mały palec do odcisku kciuka, aby utworzyć ciasny pierścień."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „pokaż mi nie” i spróbuj pstryknąć palcem."
                  },
                  {
                    "tekst": "Zmniejszaj stopniowo nacisk, aż do pojawienia się migotania."
                  },
                  {
                    "tekst": "Powiedz słowo „tak” i spróbuj oderwać mały palec od kciuka."
                  },
                  {
                    "tekst": "Pierścień powinien pozostać nienaruszony, pod warunkiem, że nie używasz zbyt dużej siły."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Wskazówki dotyczące sukcesu",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powtarzaj w razie potrzeby, aż odpowiedzi będą jasne."
                  },
                  {
                    "tekst": "Jeśli używasz tej metody w miejscach publicznych, możesz w pewnym momencie zauważyć, że ludzie zastanawiają się, co masz przyklejone do małego palca, więc uważaj!"
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Badanie opuszki palca",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja dłoni",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Lekko dotknij odcisku kciuka do innego odcisku palca na tej samej ręce."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „Pokaż mi tak” i pocieraj opuszki palców o siebie okrężnymi ruchami z bardzo lekkim naciskiem."
                  },
                  {
                    "tekst": "Zauważ, jak gładkie lub lepkie są w dotyku."
                  },
                  {
                    "tekst": "Powiedz „Pokaż mi nie” i powtórz ruch okrężny."
                  },
                  {
                    "tekst": "Zauważ, czy są bardziej gładkie, czy lepkie."
                  },
                  {
                    "tekst": "Powtarzaj w razie potrzeby, aż odpowiedzi będą jasne."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Warto wiedzieć",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "W całym ciele zachodzi zmiana elektryczna, która ma miejsce, gdy osoba znajduje się w stanie kongruentnym i przechodzi do stanu nie kongruentnego. To właśnie ta zmiana w polu elektrycznym ciała jest próbą wykrycia przez ten konkretny test."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Test jednej dłoni",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja dłoni",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Użyj dwóch sąsiednich palców tej samej ręki, umieszczając jeden na drugim, łukowato lub płasko."
                  },
                  {
                    "tekst": "Jakiekolwiek palce i konfiguracja są najwygodniejsze — są w porządku."
                  },
                  {
                    "tekst": "Górny palec będzie palcem naciskowym."
                  },
                  {
                    "tekst": "Dolny palec będzie palcem oporowym."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „Pokaż mi tak” i naciśnij delikatnie na palec oporowy.",
                    "pod": [
                      "Powinien się trzymać mocno."
                    ]
                  },
                  {
                    "tekst": "Powiedz „Pokaż mi nie” i powtórz.",
                    "pod": [
                      "Powinien osłabnąć lub opaść."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Wskazówki dotyczące sukcesu",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Wyreguluj opór i/lub ciśnienie i powtarzaj linię podstawową aż do uzyskania jasnych odpowiedzi."
                  },
                  {
                    "tekst": "Zawsze używaj minimalnego nacisku. Aby wybrać odpowiedni opór, oto nasza sugerowana metoda:",
                    "pod": [
                      "Spraw, aby Twój palec oporowy był tak silny, jak tylko możesz.",
                      "Naciśnij delikatnie palcem uciskowym. Palec oporowy powinien mocno trzymać.",
                      "Zmniejsz siłę mięśni w palcu oporowym, tak aby był on tylko na tyle silny, aby utrzymać go w pozycji wyprostowanej. Dążyć do około 5% siły.",
                      "Naciskaj delikatnie palcem uciskowym, zwracając uwagę na to, jak dużego nacisku używasz. Palec oporowy powinien osłabnąć i opaść.",
                      "Teraz spróbuj zwiększyć siłę oporu do około 50% i powtórz. Zwiększaj lub zmniejszaj opór, aż uzyskasz wyraźną odpowiedź „tak” i wyraźną odpowiedź „nie”."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Test hole-in-one",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja dłoni",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Zrób pierścień lub znak OK (kciuk i palec wskazujący) jedną ręką.",
                    "pod": [
                      "To są palce oporowe."
                    ]
                  },
                  {
                    "tekst": "Drugą ręką włóż kciuk i pierwsze dwa palce do pierścienia.",
                    "pod": [
                      "To są palce uciskowe."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „Pokaż mi nie” i z palcami wewnątrz pierścienia naciskaj na zewnątrz, próbując rozerwać pierścień.",
                    "pod": [
                      "Oprzeć się temu naciskowi palcami tworzącymi pierścień.",
                      "Pierścień powinien pęknąć."
                    ]
                  },
                  {
                    "tekst": "Powiedz „pokaż mi tak” i naciśnij na zewnątrz, próbując rozerwać pierścień.",
                    "pod": [
                      "Pierścień powinien trzymać się mocno."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Wskazówki dotyczące sukcesu",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Wybierz ciśnienie i opór, powtarzając dla „tak” i „nie”, aż twoje odpowiedzi będą jasne i spójne."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Kick test",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Stań z ciężarem na jednej nodze, w razie potrzeby trzymając się czegoś, aby utrzymać równowagę."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „Pokaż mi tak” i delikatnie kopnij nogą, tak aby zakołysała się jak wahadło.",
                    "pod": [
                      "Zauważ ilość szurania stopą."
                    ]
                  },
                  {
                    "tekst": "Powiedz „Pokaż mi nie” i powtórz.",
                    "pod": [
                      "Zauważ ilość szurania stopą."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Wskazówki dotyczące sukcesu",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Twoja odpowiedź „tak” będzie prawdopodobnie miała mniejszy stopień szurania stopą, ale może być odwrotnie i możesz mieć więcej szurania. Przetestuj to kilka razy, aż twoje odpowiedzi będą spójne, więc wiesz, jak się czują twoje „tak” i „nie”."
                  },
                  {
                    "tekst": "Przełączaj się pomiędzy stwierdzeniami „tak” i „nie” w celu ćwiczenia."
                  },
                  {
                    "tekst": "Test kopnięcia jest wersją testu długości nóg, który możesz wykonać samodzielnie, ale stojąc."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Test pierścienia w pierścieniu",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja dłoni",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Uformuj pierścień z kciuka i palca (środkowego lub wskazującego) każdej dłoni."
                  },
                  {
                    "tekst": "Połącz dwa pierścienie tak, aby zazębiały się jak ogniwa łańcucha."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Opcja 1",
                    "pod": [
                      "Wybierz jedną rękę jako pierścień nacisku, a drugą jako pierścień oporu.",
                      "Pierścień dociskowy zawsze pozostaje zamknięty.",
                      "Pierścień oporowy pęka przy odpowiedzi „nie” i pozostaje zamknięty przy odpowiedzi „tak”."
                    ]
                  },
                  {
                    "tekst": "Opcja 2",
                    "pod": [
                      "Zamierzenie, aby oba pierścienie pozostały zablokowane przy odpowiedzi „tak”, a oba pękły przy odpowiedzi „nie”.",
                      "To jest bardziej skomplikowane i zalecane dla bardziej zaawansowanych użytkowników."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Wskazówki dotyczące sukcesu",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Wybierz ciśnienie i opór w górę lub w dół w zależności od potrzeb."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Test płytkowy",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja dłoni",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Umieść delikatnie odciski palców na błyszczącej lub połyskliwej powierzchni."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „Pokaż mi tak” i przesuwaj opuszki palców tam i z powrotem delikatnym ruchem szorującym."
                  },
                  {
                    "tekst": "Zauważ, jak gładkie lub lepkie są w dotyku."
                  },
                  {
                    "tekst": "Powiedz „Pokaż mi nie” i powtórz ruch szorowania."
                  },
                  {
                    "tekst": "Zauważ, czy są bardziej gładkie, czy lepkie."
                  },
                  {
                    "tekst": "Powtarzaj w razie potrzeby, aż odpowiedzi będą jasne."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Wskazówki dotyczące sukcesu",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Najlepiej sprawdza się błyszcząca lub połyskliwa powierzchnia, taka jak szkło, polerowany kamień czy lakierowane drewno."
                  },
                  {
                    "tekst": "Wyciągnij rękę na powierzchnię, ale tak, aby dotykały się tylko opuszki palców wskazującego, środkowego i serdecznego. Nie naciskaj zbyt mocno, tylko tyle, aby umieścić odciski palców na powierzchni. Możesz później dokonać korekty, których palców używasz."
                  },
                  {
                    "tekst": "Niektórzy ludzie czują, że ich opuszki palców gładko przesuwają się po powierzchni na „tak”, a niektórzy czują, że ich opuszki palców przyklejają się bardziej."
                  },
                  {
                    "tekst": "Przełączaj się pomiędzy stwierdzeniami „tak” i „nie”, aby wzmocnić różnicę w reakcji."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Snap test",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja dłoni",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Ustaw kciuk i jeden palec w formacji pstryknięcia palcami."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „pokaż mi nie” i zaciśnij mocno palce razem, kciuk w górę, palec w dół."
                  },
                  {
                    "tekst": "Stopniowo zmniejszaj nacisk, aż do momentu, gdy pojawi się pstryknięcie."
                  },
                  {
                    "tekst": "Powiedz „pokaż mi tak” i powtórz — palce powinny utrzymać swoją pozycję."
                  },
                  {
                    "tekst": "Powtarzaj w razie potrzeby, aż odpowiedzi będą jasne."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Badanie wahadłowe",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Przytrzymaj mocno łańcuch, pozostawiając 1-3 cale łańcucha nad wahadłem."
                  },
                  {
                    "tekst": "Usztywnij ramię, ale nie rękę."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Delikatnie zmuś wahadło do wychylenia się o kąt 45° — to jest twój „neutralny”.",
                    "pod": [
                      "Neutralny jest jedynym momentem, w którym będziesz ręcznie poruszał wahadłem."
                    ]
                  },
                  {
                    "tekst": "Powiedz „pokaż mi tak”.",
                    "pod": [
                      "Twoja odpowiedź powinna być przedstawiona jako ruch w przód i w tył (kiwanie głową) lub okrąg zgodny z ruchem wskazówek zegara."
                    ]
                  },
                  {
                    "tekst": "Powiedz „pokaż mi nie”.",
                    "pod": [
                      "Twoja odpowiedź powinna być przedstawiona jako ruch w bok (potrząsanie głową) lub okrąg w kierunku przeciwnym do ruchu wskazówek zegara."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Warto wiedzieć",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Wahadło to narzędzie, które pokazuje reakcję elektromagnetyczną w organizmie."
                  },
                  {
                    "tekst": "Ważne jest, aby zauważyć, że odpowiedzi zawsze pochodzą z podświadomego umysłu, poprzez ciało, a NIE z urządzenia. Narzędzie po prostu czyni bardziej oczywistymi subtelne zmiany mięśniowe w ręce, która trzyma urządzenie."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Testowanie bobbera",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Trzymaj delikatnie uchwyt z końcówką przed sobą."
                  },
                  {
                    "tekst": "Usztywnij ramię, ale nie rękę."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Delikatnie zmuś końcówkę do wychylenia pod kątem 45° — to jest twój „neutralny”.",
                    "pod": [
                      "Jest to jedyny moment, w którym będziesz ręcznie przesuwał końcówkę."
                    ]
                  },
                  {
                    "tekst": "Powiedz „pokaż mi tak”.",
                    "pod": [
                      "Twoja odpowiedź powinna być pokazana jako góra i dół (kiwanie) lub koło zgodne z ruchem wskazówek zegara."
                    ]
                  },
                  {
                    "tekst": "Powiedz „pokaż mi nie”.",
                    "pod": [
                      "Twoja odpowiedź powinna być przedstawiona jako ruch w bok (potrząsanie głową) lub okrąg w kierunku przeciwnym do ruchu wskazówek zegara."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Warto wiedzieć",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powtarzaj metodę bazową, aż Twoje odpowiedzi będą jasne i spójne."
                  },
                  {
                    "tekst": "Bobber to narzędzie, które pokazuje odpowiedź elektromagnetyczną w ciele."
                  },
                  {
                    "tekst": "Ważne jest, aby zauważyć, że odpowiedzi zawsze pochodzą z podświadomego umysłu, poprzez ciało, a NIE z urządzenia. Narzędzie po prostu czyni bardziej oczywistymi subtelne zmiany mięśniowe w ręce, która trzyma urządzenie."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "krok-po-kroku",
    "tytul": "Emotion Code krok po kroku",
    "bloki": [
      {
        "t": "kroki",
        "punkty": [
          {
            "tekst": "Zdecyduj, nad czym chcesz pracować (cel / problem / ogólna sprawa)."
          },
          {
            "tekst": "Zadaj pytanie / wypowiedz stwierdzenie (np. „Czy uwięziona emocja...?”)."
          },
          {
            "tekst": "Podświadomość wyszukuje, odzyskuje, następuje reakcja, wpływa na mięśnie."
          },
          {
            "tekst": "Test mięśniowy potwierdza obecność uwięzionych emocji."
          },
          {
            "tekst": "Odkodowanie emocji i wszystkich niezbędnych szczegółów.",
            "pod": [
              "Znajdź kolumnę, a następnie wiersz.",
              "Zidentyfikuj wibrację emocjonalną z listy w tej komórce.",
              "Odkoduj wszelkie inne niezbędne informacje (wiek, wydarzenie, miejsce w ciele)."
            ]
          },
          {
            "tekst": "Przygotuj swoją intencję (oczekiwanie, miłość, wdzięczność)."
          },
          {
            "tekst": "Przeciągnij magnes 3 razy w dół meridianu rządzącego."
          },
          {
            "tekst": "Emocje są uwalniane i automatycznie rozpoczynają przetwarzanie."
          },
          {
            "tekst": "W razie potrzeby powtórz!"
          }
        ]
      }
    ]
  },
  {
    "id": "sesja",
    "tytul": "Przebieg sesji",
    "bloki": [
      {
        "t": "grupa",
        "tytul": "Identyfikacja zagadnień i celów",
        "bloki": [
          {
            "t": "akapit",
            "tekst": "Rozpocznij sesję od zadania klientowi pytań takich jak:"
          },
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Czy coś cię teraz boli?"
              },
              {
                "tekst": "Co ci najbardziej przeszkadza?"
              },
              {
                "tekst": "Jaka jest największa potrzeba, którą masz w tej chwili?"
              },
              {
                "tekst": "Jaki cel chcesz osiągnąć najbardziej?"
              },
              {
                "tekst": "Czy jest coś, co chciałbyś osiągnąć lub poprawić w swoim życiu?"
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Przy użyciu skali dyskomfortu",
        "bloki": [
          {
            "t": "akapit",
            "tekst": "Jest to sytuacja, w której prosimy klienta o ocenę swojego dyskomfortu w skali od 0 do 10 (od braku dyskomfortu do maksymalnego dyskomfortu)."
          },
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Szczególnie pomocne, gdy ktoś ma wiele problemów."
              },
              {
                "tekst": "W przypadku jakiegoś problemu lub objawu zapytaj: „Jak bardzo to boli, w skali od 0 do 10?”."
              },
              {
                "tekst": "W przypadku celu, który chcą osiągnąć, zapytaj: „Jak bardzo priorytetowy jest ten cel?”."
              },
              {
                "tekst": "Robiąc sesję Emotion Code, zwykle będziesz chciał skupić się na najwyższym aktualnym dyskomforcie (co w tym momencie czuje się „najgłośniej”)."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Proces dekodowania",
        "bloki": [
          {
            "t": "kroki",
            "punkty": [
              {
                "tekst": "Identyfikacja kolumny",
                "pod": [
                  "Zapytaj: Czy uwięziona emocja znajduje się w kolumnie A?",
                  "Jeśli tak, to w kolumnie A.",
                  "Jeśli nie, to w kolumnie B.",
                  "Przejdź do kroku 2."
                ]
              },
              {
                "tekst": "Określ, czy jest to rząd o numerach nieparzystych czy parzystych",
                "pod": [
                  "Zapytaj: Czy to jest w nieparzystym rzędzie?",
                  "Jeśli tak, to jest to rząd nieparzysty (1, 3 lub 5).",
                  "Jeśli nie, to jest w rzędzie parzystym (2, 4 lub 6).",
                  "Przejdź do kroku 3, gdy uzyskasz odpowiedź."
                ]
              },
              {
                "tekst": "Określ dokładny rząd",
                "pod": [
                  "Dla nieparzystych zapytaj: Czy to jest w wierszu 1? 3? 5? (Wymieniaj po kolei nieparzyste rzędy, przejdź do pierwszej twierdzącej odpowiedzi, którą uzyskasz).",
                  "Dla parzystych zapytaj: Czy to jest w rzędzie 2? 4? 6? (Wymień po kolei rzędy parzyste. Przejdź do pierwszej odpowiedzi twierdzącej, którą otrzymasz).",
                  "Przejdź do kroku 4, gdy uzyskasz odpowiedź."
                ]
              },
              {
                "tekst": "Testuj każdą z pięciu emocji, aż jedna będzie silna",
                "pod": [
                  "Zapytaj: Czy to ____ (wstaw nazwę emocji)? (Przejdź do pierwszej odpowiedzi twierdzącej, którą uzyskasz).",
                  "Przejdź do kroku 5, gdy uzyskasz odpowiedź."
                ]
              },
              {
                "tekst": "Określenie wszelkich niezbędnych szczegółów",
                "pod": [
                  "Zapytaj: Czy konieczne jest określenie więcej na temat tej emocji?",
                  "Jeśli nie, możesz przejść do kroku uwalniającego.",
                  "Jeśli tak, zidentyfikuj niezbędne informacje i zadaj ponownie kluczowe pytanie. Gdy otrzymasz odpowiedź „nie”, możesz uwolnić emocję."
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Dekodowanie wieku wystąpienia",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Użyj procesu eliminacji, aby zawęzić go do dokładnego roku (powinno to być dokładne w ciągu około roku, plus lub minus)."
              },
              {
                "tekst": "Podziel swój wiek mniej więcej na pół.",
                "pod": [
                  "Np. jeśli masz 60 lat, zaczniesz od 30."
                ]
              },
              {
                "tekst": "Test pozwalający określić pierwszą lub drugą połowę życia.",
                "pod": [
                  "Np. „Czy wystąpiło to przed 30. rokiem życia?”."
                ]
              },
              {
                "tekst": "Kontynuuj dzielenie i testowanie mięśni w oparciu o odpowiedź na ostatnie pytanie.",
                "pod": [
                  "Np. jeśli miało to miejsce przed 30. rokiem życia, zapytaj „Czy miało to miejsce przed 15. rokiem życia?”."
                ]
              },
              {
                "tekst": "Kontynuuj dzielenie i testowanie mięśni w ten sposób, aż znajdziesz 5-letni zakres.",
                "pod": [
                  "Np. przed 10, ale nie 5 (więc wiek 5 do 10)."
                ]
              },
              {
                "tekst": "Przetestuj każdy wiek w tym 5-letnim przedziale, aby określić ostateczną odpowiedź, idąc z pierwszą odpowiedzią twierdzącą, którą otrzymasz.",
                "pod": [
                  "Np. „Czy miało to miejsce w wieku 5 lat?” Jeśli nie, zapytaj: „Wiek 6 lat?” Jeśli nie, zapytaj: „Wiek 7 lat?” itd. aż do uzyskania odpowiedzi twierdzącej."
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Dekodowanie informacji o wydarzeniu życiowym",
        "bloki": [
          {
            "t": "akapit",
            "tekst": "Czasami możesz potrzebować znaleźć wydarzenie życiowe, które doprowadziło do powstania uwięzionej emocji. Prawdopodobnie nie będziesz musiał tego pamiętać, ale czasami wspomnienie pojawi się automatycznie, gdy będziesz przechodził przez ten proces. Stosunkowo rzadko trzeba znaleźć tę informację i na szczęście można to zrobić bez konieczności szukania czegoś bardzo konkretnego."
          },
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Najpierw zobacz, czy coś przychodzi ci do głowy po znalezieniu emocji i przetestuj, aby potwierdzić, czy to było to (w większości przypadków wynurzone wspomnienie będzie tym właściwym)."
              },
              {
                "tekst": "Pamiętaj, aby zadać kluczowe pytanie: Czy musimy określić coś jeszcze na temat tej emocji?"
              },
              {
                "tekst": "Jeśli nic nie przychodzi ci do głowy, znajdź wiek wystąpienia, a następnie sprawdź, czy coś pamiętasz, i przetestuj, aby potwierdzić."
              },
              {
                "tekst": "Jeśli to nadal nie daje ci spokoju, możesz znaleźć obszar życia, którego dotyczyła ta emocja. Obszary życia obejmują:",
                "pod": [
                  "Dobrostan fizyczny",
                  "Zdrowie emocjonalne i psychiczne",
                  "Pieniądze",
                  "Kariera",
                  "Duchowość",
                  "Relacje rodzinne",
                  "Romantyczne związki",
                  "Relacje z przyjaciółmi"
                ]
              },
              {
                "tekst": "Sprawdź wszystko, co przychodzi ci do głowy w tym czasie, ale zazwyczaj wiek i obszar życia to wszystko, czego będziesz potrzebować. Możesz rozszyfrować dalej, jeśli to konieczne i/lub pożądane."
              },
              {
                "tekst": "Pamiętaj tylko, aby zadać kluczowe pytanie: Czy konieczne jest zidentyfikowanie więcej na temat tej emocji?"
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Dekodowanie miejsca w ciele",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Zastosuj proces eliminacji."
              },
              {
                "tekst": "Podziel ciało na części (górna, dolna, prawa, lewa, linia środkowa itd.)."
              },
              {
                "tekst": "Zawęź ją stamtąd w zależności od potrzeb (ale zachowaj prostotę)."
              }
            ]
          },
          {
            "t": "wyroznienie",
            "tekst": "UWAGA: Prawie nigdy nie będziesz potrzebował znaleźć tej lokalizacji w ciele, ale jeśli to zrobisz, możesz rozważyć, że może to być wiadomość od twojej podświadomości na temat twojego zdrowia. Jeśli potrzebowałeś rozszyfrować, że emocja utknęła w płucach, może to wskazywać, że twoje płuca proszą o pomoc. Czasami potrzeba poznania lokalizacji nie wydaje się znaczyć wiele, więc nie zastanawiaj się nad tym przesadnie."
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Czego można się spodziewać po sesji",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Proces",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Po sesji musimy przetworzyć emocje, które zostały uwolnione."
                  },
                  {
                    "tekst": "Przetwarzanie odbywa się automatycznie. Wszystkie emocje są przetwarzane albo na końcu doświadczenia emocjonalnego, gdy warunki są odpowiednie, LUB po uwolnieniu z The Emotion Code."
                  },
                  {
                    "tekst": "Okres przetwarzania trwa od jednego do trzech dni."
                  },
                  {
                    "tekst": "W trakcie i po tym czasie możesz doświadczyć zmiany w tym, jak się czujesz psychicznie, duchowo, emocjonalnie i/lub fizycznie. Bardzo często można poczuć się lżejszym, spokojniejszym i szczęśliwszym. Możesz zauważyć, że objawy, które miałeś, nie są tak silne lub zniknęły. Możesz również zauważyć, że czujesz się bardziej zmotywowany do osiągnięcia swoich celów."
                  },
                  {
                    "tekst": "Około 20% przypadków mogą wystąpić objawy przetwarzania. Zazwyczaj są one bardzo krótkotrwałe, ale warto poinformować o nich klientów. Do tych objawów mogą należeć:",
                    "pod": [
                      "senność",
                      "drażliwość lub wrażliwość",
                      "„echa” uwolnionych emocji"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Sugestie",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Unikaj wykonywania większej pracy Emotion Code podczas przetwarzania, bądź konserwatywny i szanuj ciało i jego potrzeby. Zbyt szybkie wykonywanie zbyt wielu czynności może być obciążające."
                  },
                  {
                    "tekst": "W razie potrzeby można przeprowadzić test mięśniowy przybliżonego czasu trwania okresu przetwarzania."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Wskazówki",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Jeśli objawy przypominające przetwarzanie utrzymują się po okresie przetwarzania, może to wskazywać, że ciało ma więcej emocji do uwolnienia. Możesz to potwierdzić za pomocą testów mięśniowych."
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "testowanie-innych",
    "tytul": "Testowanie innych osób",
    "bloki": [
      {
        "t": "grupa",
        "tytul": "Jak rozmawiać z ludźmi o Emotion Code",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Bądź jasny co do swojego „dlaczego”."
              },
              {
                "tekst": "Miej historie sukcesu, którymi możesz się podzielić. UWAGA: czy są to twoje historie, czy pochodzą od innych — tak czy inaczej."
              },
              {
                "tekst": "Zadaj im pytanie."
              },
              {
                "tekst": "Złóż im ofertę."
              },
              {
                "tekst": "Umów się na spotkanie (w razie potrzeby)."
              },
              {
                "tekst": "Wykonaj sesję."
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Oferta",
            "bloki": [
              {
                "t": "akapit",
                "tekst": "Otrzymuję certyfikat w The Emotion Code — formie uzdrawiania energetycznego, gdzie możemy odkryć i usunąć twoje uwięzione emocje: energie, które utknęły w twoim ciele z przeszłych doświadczeń emocjonalnych. Jest to bezpieczny, delikatny i nieinwazyjny proces, który może pomóc Ci poczuć się bardziej energicznym, szczęśliwszym, spokojniejszym, bardziej kreatywnym, bardziej połączonym z innymi, a być może nawet zmniejszyć dyskomfort fizyczny. Czy chciałbyś być jednym z moich wolontariuszy i otrzymać darmową sesję Emotion Code? Nie będę pobierał opłaty od nikogo, kto zgłosi się na ochotnika. To naprawdę pomogłoby mi i mam nadzieję, że pomoże również Tobie!"
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Wskazówki dotyczące testowania mięśni innych osób",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Przy wywieraniu nacisku",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Upewnij się, że jest on delikatny. Użyj jak najmniejszego nacisku."
                  },
                  {
                    "tekst": "Tu chodzi o finezję, nie o siłę."
                  },
                  {
                    "tekst": "Zamierzaj „wyczuć” odpowiedź."
                  },
                  {
                    "tekst": "Stosuj powoli wzrastające ciśnienie hydrauliczne."
                  },
                  {
                    "tekst": "Stosuj stopniowo rosnący nacisk przez 1-3 sekundy."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Unikanie powszechnych błędów",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Odbijanie."
                  },
                  {
                    "tekst": "Przekroczenie prędkości."
                  },
                  {
                    "tekst": "Niewłaściwe ustawienie (pozostań za „przeszkodą”)."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Wskazówki dotyczące sukcesu",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Ćwicz!"
                  },
                  {
                    "tekst": "Bądź cierpliwy."
                  },
                  {
                    "tekst": "Zadawaj tylko jedno pytanie na raz."
                  },
                  {
                    "tekst": "Zachowaj jasność swoich intencji."
                  },
                  {
                    "tekst": "Poproś osobę badaną, aby również oczyściła swój umysł."
                  },
                  {
                    "tekst": "Zarówno tester, jak i uczestnik powinni być nawodnieni."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Test ramienia",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Osoba badana trzyma rękę wyciągniętą równolegle do podłogi.",
                    "pod": [
                      "Będzie stawiać opór."
                    ]
                  },
                  {
                    "tekst": "Umieszczasz 2 palce za jej nadgarstkiem.",
                    "pod": [
                      "Będziesz wywierał nacisk."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „pokaż mi tak”.",
                    "pod": [
                      "Podmiot powinien stawiać opór, gdy delikatnie i powoli zwiększasz nacisk przez 3 sekundy.",
                      "Jego ramię powinno trzymać się mocno z niewielkim lub żadnym ruchem."
                    ]
                  },
                  {
                    "tekst": "Powiedz „pokaż mi nie”.",
                    "pod": [
                      "Podmiot powinien stawiać opór, gdy delikatnie i powoli zwiększasz nacisk przez 3 sekundy.",
                      "Jego ramię powinno osłabnąć i być może spaść."
                    ]
                  },
                  {
                    "tekst": "Reguluj w razie potrzeby, aby dopasować ciśnienie i opór."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Test łokcia z partnerem",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Osoba badana trzyma ramię, łokieć zgięty pod kątem 90°, przedramię równolegle do podłogi.",
                    "pod": [
                      "W razie potrzeby może oprzeć górną część ramienia o oparcie krzesła.",
                      "Będzie stawiać opór."
                    ]
                  },
                  {
                    "tekst": "Będziesz wywierał nacisk."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „pokaż mi tak”.",
                    "pod": [
                      "Podmiot powinien stawiać opór, gdy delikatnie i powoli zwiększasz nacisk przez 3 sekundy.",
                      "Jego ramię powinno trzymać się mocno z niewielkim lub żadnym ruchem."
                    ]
                  },
                  {
                    "tekst": "Powiedz „pokaż mi nie”.",
                    "pod": [
                      "Podmiot powinien stawiać opór, gdy delikatnie i powoli zwiększasz nacisk przez 3 sekundy.",
                      "Jego ramię powinno osłabnąć i być może spaść."
                    ]
                  },
                  {
                    "tekst": "Reguluj w razie potrzeby, aby dopasować ciśnienie i opór."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Test O-ringu",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Podmiot wykonuje pierścień lub znak OK (kciuk i palec wskazujący).",
                    "pod": [
                      "Pierścień będzie palcem oporowym."
                    ]
                  },
                  {
                    "tekst": "Użyjesz jednego palca u obu rąk, aby spróbować odciągnąć pierścień.",
                    "pod": [
                      "To są palce uciskowe."
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „Pokaż mi nie” i spróbuj rozerwać pierścień, gdy obiekt stawia opór.",
                    "pod": [
                      "Pierścień powinien pęknąć."
                    ]
                  },
                  {
                    "tekst": "Powiedz „pokaż mi tak”, spróbuj rozerwać pierścień, gdy obiekt stawia opór.",
                    "pod": [
                      "Pierścień powinien trzymać się mocno."
                    ]
                  },
                  {
                    "tekst": "Dostosuj nacisk i opór, powtarzając dla „tak” i „nie”, aż odpowiedzi będą jasne i spójne."
                  }
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Badanie długości nogi",
        "bloki": [
          {
            "t": "grupa",
            "tytul": "Konfiguracja",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Podmiot leży zrelaksowany, twarzą w dół na łóżku lub stole do masażu, z butami na nogach, stopy zwisają, palce skierowane w dół."
                  },
                  {
                    "tekst": "Kciuki umieszczasz pod każdą piętą, a palec wskazujący i środkowy po obu stronach każdej zewnętrznej kości skokowej."
                  },
                  {
                    "tekst": "Delikatnie pociągnij za jedną lub drugą nogę w razie potrzeby, aby wyrównać pozycję obu pięt (tak jakby osoba stała płasko na ziemi)."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Znaleźć punkt odniesienia",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Powiedz „pokaż mi tak”, a następnie zastosuj niewielki nacisk bezpośrednio na nogi za pomocą kciuków.",
                    "pod": [
                      "Odpowiedź twierdząca powinna wskazywać na równe ułożenie pięt."
                    ]
                  },
                  {
                    "tekst": "Powiedz „pokaż mi nie”, a następnie zastosuj niewielki nacisk bezpośrednio na nogi za pomocą kciuków.",
                    "pod": [
                      "Brak odpowiedzi powinien wskazywać na lekką nierówność pięt (jedna noga jest nieco krótsza od drugiej)."
                    ]
                  }
                ]
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rodzaje",
    "tytul": "6 rodzajów uwięzionych emocji",
    "bloki": [
      {
        "t": "grupa",
        "tytul": "Przed poczęciem",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Emocja, która była przeżywana przed poczęciem."
              },
              {
                "tekst": "Uwięziona energia w ciele energetycznym (aka ducha)."
              },
              {
                "tekst": "Dość rzadka."
              },
              {
                "tekst": "Ma to miejsce przed poczęciem."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Odziedziczona",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Pochodząca od przodka biologicznego."
              },
              {
                "tekst": "Otrzymana w momencie poczęcia."
              },
              {
                "tekst": "Pochodzi z wielu pokoleń."
              },
              {
                "tekst": "Wielu krewnych może również mieć tę emocję."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Prenatalna",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Stworzona w czasie życia płodowego."
              },
              {
                "tekst": "Zwykle w trzecim trymestrze."
              },
              {
                "tekst": "Często pochodzą od matki i są przejęte przez płód."
              },
              {
                "tekst": "Może również pochodzić od płodu."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Powszechna",
        "bloki": [
          {
            "t": "akapit",
            "tekst": "Powszechną uwięzioną emocją jest emocja, która:"
          },
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Stworzona jest przez Ciebie."
              },
              {
                "tekst": "Uwięziona podczas swojego życia (po urodzeniu)."
              },
              {
                "tekst": "Najczęstszy rodzaj uwięzionej emocji."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Przejęta",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Emocja stworzona przez kogoś innego."
              },
              {
                "tekst": "Przejęta przez Twoje ciało."
              },
              {
                "tekst": "Zwykle podczas emocjonalnego wydarzenia danej osoby."
              },
              {
                "tekst": "Może wpływać na Ciebie jak powszechne uwięzione emocje."
              },
              {
                "tekst": "Uwięziona podczas swojego życia (po urodzeniu)."
              },
              {
                "tekst": "Przejmujemy uwięzioną emocję innej osoby, gdy:",
                "pod": [
                  "emocja rezonuje z Twoim własnym bagażem emocjonalnym,",
                  "jesteś przytłoczony jej energią."
                ]
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Współdzielona",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Stworzone przez dwie lub więcej osób, które:",
                "pod": [
                  "doświadczają dokładnie tego samego zdarzenia/bodźca,",
                  "dokładnie w tym samym momencie,",
                  "mają tę samą reakcję emocjonalną."
                ]
              },
              {
                "tekst": "Może to być dowolna emocja."
              },
              {
                "tekst": "Bardziej bolesne lub ekstremalne."
              },
              {
                "tekst": "Tylko jedna osoba musi ją uwolnić od wszystkich innych."
              },
              {
                "tekst": "Uwięziona podczas swojego życia (po urodzeniu)."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Dekodowanie linii dziedziczenia dla emocji odziedziczonych",
        "bloki": [
          {
            "t": "akapit",
            "tekst": "Identyfikując emocję, zidentyfikuj linię dziedziczenia, pracując wstecz."
          },
          {
            "t": "grupa",
            "tytul": "Zapytaj: Czy odziedziczyłeś to po swojej matce?",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Jeżeli tak, to proszę to odnotować."
                  },
                  {
                    "tekst": "Jeśli nie, to odziedziczyłeś ją po ojcu — zanotuj to."
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Cofać się",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Zapytaj: Czy ten rodzic ją odziedziczył?",
                    "pod": [
                      "Jeśli tak, określ, które z jego rodziców.",
                      "Powtarzaj w miarę potrzeby, aż znajdziesz twórcę emocji.",
                      "Jeśli nie, zadaj kluczowe pytanie: Czy musimy zidentyfikować coś jeszcze na temat tej emocji?"
                    ]
                  }
                ]
              }
            ]
          },
          {
            "t": "grupa",
            "tytul": "Starsze niż trzy lub cztery pokolenia?",
            "bloki": [
              {
                "t": "lista",
                "punkty": [
                  {
                    "tekst": "Dokładny rodowód może nie mieć znaczenia."
                  },
                  {
                    "tekst": "Zapytaj: Czy to sięga dalej?"
                  },
                  {
                    "tekst": "Jeśli tak, określ, ile pokoleń (np. zapytaj: Czy to sięga dziesięciu pokoleń wstecz?)."
                  },
                  {
                    "tekst": "Zawęź w razie potrzeby."
                  },
                  {
                    "tekst": "Następnie zadaj kluczowe pytanie."
                  }
                ]
              }
            ]
          },
          {
            "t": "wyroznienie",
            "tekst": "KLUCZOWE PYTANIE: Czy konieczne jest odkodowanie więcej o tej emocji? Jeśli nie, możesz ją uwolnić. Jeśli tak, być może trzeba będzie odszyfrować więcej informacji."
          }
        ]
      }
    ]
  },
  {
    "id": "dekodowanie",
    "tytul": "Dekodowanie 6 rodzajów uwięzionych emocji",
    "bloki": [
      {
        "t": "grupa",
        "tytul": "1. Zapytaj",
        "bloki": [
          {
            "t": "wyroznienie",
            "tekst": "Czy jest jakaś uwięziona emocja, którą można teraz uwolnić (która przyczynia się do ______ problemu)?"
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "2. Określ, jakiego typu jest to uwięziona emocja",
        "bloki": [
          {
            "t": "tabela",
            "naglowki": [
              "A",
              "B"
            ],
            "wiersze": [
              [
                "Przed poczęciem",
                "Powszechna"
              ],
              [
                "Odziedziczona",
                "Przejęta"
              ],
              [
                "Prenatalna",
                "Współdzielona"
              ]
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "3. Określ, jaka konkretnie jest to emocja",
        "bloki": [
          {
            "t": "karta-emocji"
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "4. Jeśli trzeba uzyskać więcej szczegółów",
        "bloki": [
          {
            "t": "akapit",
            "tekst": "Jeśli trzeba uzyskać więcej szczegółów na temat tej uwięzionej emocji, użyj poniższej tabeli jako przewodnika po możliwych pytaniach do zadania, ponownie sprawdzając potrzebę uzyskania dalszych informacji po uzyskaniu jakichkolwiek szczegółów."
          },
          {
            "t": "tabela",
            "naglowki": [
              "Przed poczęciem",
              "Odziedziczona",
              "Prenatalna",
              "Powszechna",
              "Przejęta",
              "Współdzielona"
            ],
            "wiersze": [
              [
                "Gdzie w ciele?",
                "Genealogia",
                "Trymestr",
                "Wiek wystąpienia",
                "Wiek wystąpienia",
                "Wiek wystąpienia"
              ],
              [
                "",
                "",
                "Czyja to emocja?",
                "Zdarzenie życiowe",
                "Zdarzenie życiowe",
                "Zdarzenie życiowe"
              ],
              [
                "",
                "",
                "",
                "Gdzie w ciele?",
                "Przejęty od kogo?",
                "Z kim?"
              ]
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "5. Uwolnienie uwięzionej emocji",
        "bloki": [
          {
            "t": "akapit",
            "tekst": "Przeciągnij trzy razy w dół meridianu rządzącego, aby uwolnić emocję. W przypadku emocji współdzielonych lub odziedziczonych przeciągnij dziesięć razy w dół meridianu rządzącego."
          }
        ]
      }
    ]
  },
  {
    "id": "mur-serca",
    "tytul": "Kroki do zniesienia Muru Serca",
    "bloki": [
      {
        "t": "akapit",
        "tekst": "Korzystając z testów mięśniowych i Emotion Code, wykonaj poniższe kroki, aby uwolnić emocje związane z murem serca."
      },
      {
        "t": "grupa",
        "tytul": "1. Zapytaj: „Czy masz ścianę serca?”",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Jeśli TAK, przejdź do KROKU 2."
              },
              {
                "tekst": "Jeśli odpowiedź brzmi NIE, zajmij się inną sprawą i wróć do tego pytania później, jeśli zajdzie taka potrzeba."
              },
              {
                "tekst": "Jeśli pod koniec sesji otrzymasz odpowiedź „NIE”, może to oznaczać, że ciało komunikuje, iż uwolniło już tyle, ile było w stanie w danym momencie. Pozwól mu na przetworzenie tego. Ważne: zapytaj, czy nadal istnieje ściana serca, a jeśli tak, zaplanuj kolejną sesję, aby kontynuować pracę nad jej uwolnieniem."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "2. Określ, jaki to rodzaj uwięzionej emocji",
        "bloki": [
          {
            "t": "akapit",
            "tekst": "Większość emocji uwięzionych w ścianie serca to emocje „powszechne”, choć czasami można spotkać inne rodzaje emocji, wymienione w poniższej tabeli."
          },
          {
            "t": "tabela",
            "naglowki": [
              "A",
              "B"
            ],
            "wiersze": [
              [
                "Przed poczęciem",
                "Powszechna"
              ],
              [
                "Odziedziczona",
                "Przejęta"
              ],
              [
                "Prenatalna",
                "Współdzielona"
              ]
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "3. Określ, jaka to konkretnie emocja",
        "bloki": [
          {
            "t": "karta-emocji"
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "4. Czy potrzebne są dodatkowe informacje na temat tej emocji?",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Jeśli TAK, skorzystaj z poniższej tabeli jako wskazówki dotyczącej możliwych pytań, które można zadać."
              },
              {
                "tekst": "W przypadku pytania „Gdzie w ciele?” lokalizacja będzie znajdować się w okolicy serca."
              },
              {
                "tekst": "Jeśli NIE, przejdź do następnego kroku."
              }
            ]
          },
          {
            "t": "tabela",
            "naglowki": [
              "Przed poczęciem",
              "Odziedziczona",
              "Prenatalna",
              "Powszechna",
              "Przejęta",
              "Współdzielona"
            ],
            "wiersze": [
              [
                "Gdzie w ciele? (w okolicy serca)",
                "Genealogia",
                "Trymestr",
                "Wiek wystąpienia",
                "Wiek wystąpienia",
                "Wiek wystąpienia"
              ],
              [
                "",
                "",
                "Czyja to emocja?",
                "Zdarzenie życiowe",
                "Zdarzenie życiowe",
                "Zdarzenie życiowe"
              ],
              [
                "",
                "",
                "",
                "Gdzie w ciele? (w okolicy serca)",
                "Przejęty od kogo?",
                "Z kim?"
              ]
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "5. Uwolnij emocje uwięzione w ścianie serca",
        "bloki": [
          {
            "t": "akapit",
            "tekst": "Przesuń trzy razy w dół wzdłuż meridianu rządzącego, aby uwolnić emocje. W przypadku emocji współdzielonych lub odziedziczonych przesuń dziesięć razy w dół wzdłuż meridianu rządzącego."
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "6. Zapytaj: „Czy ściana serca nadal istnieje?”",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Jeśli TAK, wróć do KROKU 1."
              },
              {
                "tekst": "Jeśli otrzymasz odpowiedź NIE, Heart-Wall może zostać usunięty. W takim przypadku zapytaj: Czy Heart-Wall został usunięty?"
              },
              {
                "tekst": "Pamiętaj, że usunięcie Heart-Wall może zająć od 1 do 4 sesji."
              }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "zwierzeta",
    "tytul": "Przewodnik po bezpieczeństwie zwierząt",
    "bloki": [
      {
        "t": "grupa",
        "tytul": "Zawsze rób",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Zapytaj właściciela/opiekuna o zgodę na każdą sesję."
              },
              {
                "tekst": "Zapytaj zwierzę o zgodę na zrobienie na nim sesji i uszanuj odpowiedź, którą daje. Jeśli odpowiedź brzmi „nie”, to być może to nie zwierzę potrzebuje sesji, ale jego właściciel."
              },
              {
                "tekst": "Zapewnij zwierzęciu przestrzeń. Upewnij się, że jest ono bezpiecznie trzymane w klatce lub przytrzymywane w razie potrzeby."
              },
              {
                "tekst": "Chroń własne bezpieczeństwo."
              },
              {
                "tekst": "Użyj samotestowania lub zastępcy, aby przetestować zwierzę."
              }
            ]
          }
        ]
      },
      {
        "t": "grupa",
        "tytul": "Nie rób",
        "bloki": [
          {
            "t": "lista",
            "punkty": [
              {
                "tekst": "Nie należy zakładać, że zwierzę jest potulne i nie stanie się agresywne."
              },
              {
                "tekst": "Nie podchodź do zdenerwowanego zwierzęcia."
              },
              {
                "tekst": "Nie zbliżaj się do zwierzęcia, które nie należy do Ciebie lub jest Ci obce."
              },
              {
                "tekst": "Nie oczekuj, że zwierzę zostanie po sesji."
              }
            ]
          }
        ]
      }
    ]
  }
];
