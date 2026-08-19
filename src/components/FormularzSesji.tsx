"use client";

import Link from "next/link";
import { useState } from "react";
import Skala from "./Skala";
import WybieraczEmocji from "./WybieraczEmocji";
import WyborTypu from "./WyborTypu";
import {
  RODZAJE_EMOCJI,
  TYPY_SESJI,
  emocja as znajdzEmocje,
  nazwaEmocji,
  etykietySzczegolow,
  type Emocja,
} from "@/lib/emocje";
import type { StanSesji } from "@/lib/stanSesji";
import type { EmocjaWejscie, ProblemWejscie } from "@/lib/typy";

export type OpcjaKlienta = { id: number; etykieta: string };

const IKONY_TYPOW: Record<string, string> = {
  osobista: "👥",
  proxy: "🪞",
  posrednik: "🤝",
};

export default function FormularzSesji({
  klienci,
  poczatkowy,
  akcja,
  akcjaUsun,
  idSesji,
}: {
  klienci: OpcjaKlienta[];
  poczatkowy: StanSesji;
  akcja: (formData: FormData) => Promise<void>;
  akcjaUsun?: (formData: FormData) => Promise<void>;
  idSesji?: number;
}) {
  const [stan, setStan] = useState<StanSesji>(poczatkowy);
  const [mapaOtwarta, setMapaOtwarta] = useState(false);
  const [blad, setBlad] = useState<string | null>(null);

  const zmien = (zmiany: Partial<StanSesji>) => setStan((p) => ({ ...p, ...zmiany }));

  const zmienProblem = (i: number, zmiany: Partial<ProblemWejscie>) =>
    setStan((p) => ({
      ...p,
      problemy: p.problemy.map((x, j) => (j === i ? { ...x, ...zmiany } : x)),
    }));

  const zmienEmocje = (i: number, zmiany: Partial<EmocjaWejscie>) =>
    setStan((p) => ({
      ...p,
      emocje: p.emocje.map((x, j) => (j === i ? { ...x, ...zmiany } : x)),
    }));

  const dodajEmocje = (e: Emocja) =>
    setStan((p) => ({
      ...p,
      emocje: [
        ...p.emocje,
        { emocja_id: e.id, rodzaj: "powszechna", mur_serca: false, wiek: "", zrodlo: "", notatka: "" },
      ],
    }));

  const sprawdzPrzedWyslaniem = (ev: React.FormEvent<HTMLFormElement>) => {
    // Przycisk „Usuń sesję" wysyła ten sam formularz — jego nie walidujemy.
    const przycisk = (ev.nativeEvent as SubmitEvent).submitter as HTMLElement | null;
    if (przycisk?.dataset.bezWalidacji === "1") return;

    const problemyZNazwa = stan.problemy.filter((p) => p.nazwa.trim());
    let komunikat: string | null = null;

    if (!stan.klient_id) komunikat = "Wybierz klienta, którego dotyczy sesja.";
    else if (!stan.data) komunikat = "Wybierz datę sesji.";
    else if (problemyZNazwa.length === 0) komunikat = "Wpisz nazwę przynajmniej jednego problemu.";
    else if (problemyZNazwa.some((p) => p.ocena_przed === null))
      komunikat = "Uzupełnij nasilenie przed sesją dla każdego problemu.";
    else if (stan.emocje.length === 0)
      komunikat = "Dodaj przynajmniej jedną uwolnioną emocję z Mapy Emocji.";
    else if (problemyZNazwa.some((p) => p.ocena_po === null))
      komunikat = "Uzupełnij nasilenie po sesji dla każdego problemu.";

    if (komunikat) {
      ev.preventDefault();
      setBlad(komunikat);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const nazwaneProblemy = stan.problemy
    .map((p, i) => ({ ...p, i }))
    .filter((p) => p.nazwa.trim().length > 0);

  return (
    <form action={akcja} onSubmit={sprawdzPrzedWyslaniem}>
      <input type="hidden" name="dane" value={JSON.stringify(stan)} />
      {idSesji !== undefined && <input type="hidden" name="id" value={idSesji} />}

      {blad && (
        <p className="blad" role="alert">
          {blad}
        </p>
      )}

      <div className="pole">
        <div className="karta-naglowek">
          <label htmlFor="klient" className="wymagane" style={{ margin: 0 }}>
            Klient
          </label>
          <Link href="/klienci/nowy?powrot=sesja" className="btn btn-fiolet btn-maly">
            + Dodaj nowego klienta
          </Link>
        </div>
        <select
          id="klient"
          value={stan.klient_id}
          onChange={(e) => zmien({ klient_id: e.target.value })}
        >
          <option value="">— wybierz klienta —</option>
          {klienci.map((k) => (
            <option key={k.id} value={k.id}>
              {k.etykieta}
            </option>
          ))}
        </select>
      </div>

      <div className="pole-wiersz">
        <div className="pole">
          <label htmlFor="data" className="wymagane">
            Data sesji
          </label>
          <input
            id="data"
            type="date"
            value={stan.data}
            onChange={(e) => zmien({ data: e.target.value })}
          />
        </div>
        <div className="pole">
          <WyborTypu
            etykieta="Typ sesji"
            wartosc={stan.typ}
            onZmiana={(typ) => zmien({ typ })}
            opcje={TYPY_SESJI.map((t) => ({
              id: t.id,
              nazwa: t.nazwa,
              opis: t.opis,
              ikona: IKONY_TYPOW[t.id] ?? "•",
            }))}
          />
        </div>
      </div>

      {/* ----------------------------------------------------------- problemy */}

      <h2>
        Problemy poruszone w sesji <span className="etykieta-opis">(maksymalnie 3)</span>
      </h2>
      {stan.problemy.map((p, i) => (
        <div className="karta" key={i}>
          <div className="pole-wiersz">
            <div>
              <label htmlFor={`problem-${i}`}>Nazwa problemu</label>
              <input
                id={`problem-${i}`}
                type="text"
                value={p.nazwa}
                placeholder="np. Ból prawego barku"
                onChange={(e) => zmienProblem(i, { nazwa: e.target.value })}
              />
            </div>
            <div>
              <Skala
                id={`przed-${i}`}
                etykieta="Nasilenie przed sesją"
                wartosc={p.ocena_przed}
                onZmiana={(ocena_przed) => zmienProblem(i, { ocena_przed })}
              />
            </div>
          </div>
          {stan.problemy.length > 1 && (
            <button
              type="button"
              className="btn-tekst usun"
              onClick={() =>
                setStan((s) => ({ ...s, problemy: s.problemy.filter((_, j) => j !== i) }))
              }
            >
              Usuń ten problem
            </button>
          )}
        </div>
      ))}

      {stan.problemy.length < 3 && (
        <button
          type="button"
          className="btn btn-fiolet btn-maly"
          onClick={() =>
            setStan((s) => ({
              ...s,
              problemy: [...s.problemy, { nazwa: "", ocena_przed: null, ocena_po: null }],
            }))
          }
        >
          + Dodaj kolejny problem
        </button>
      )}

      {/* ------------------------------------------------------------- emocje */}

      <h2 style={{ marginTop: "2.5rem" }}>Uwolnione uwięzione emocje</h2>

      {stan.emocje.length === 0 && (
        <p className="etykieta-opis">
          Nic jeszcze nie wybrano. Otwórz Mapę Emocji i klikaj kolejne uwolnione emocje.
        </p>
      )}

      {stan.emocje.map((e, i) => {
        const kat = znajdzEmocje(e.emocja_id);
        const etykiety = etykietySzczegolow(e.rodzaj);
        return (
          <div className="emocja-pozycja" key={`${e.emocja_id}-${i}`}>
            <div className="emocja-glowna">
              <span className="emocja-nazwa">{nazwaEmocji(e.emocja_id)}</span>
              {kat && (
                <span className="emocja-meta">
                  {kat.en} · wiersz {kat.wiersz}, kolumna {kat.kolumna}
                </span>
              )}
              <div className="przyciski-pozycji">
                <label className="checkbox" style={{ fontSize: "0.85rem" }}>
                  <input
                    type="checkbox"
                    checked={e.mur_serca}
                    onChange={(ev) => zmienEmocje(i, { mur_serca: ev.target.checked })}
                  />
                  z Muru Serca
                </label>
                <button
                  type="button"
                  className="btn-tekst usun"
                  onClick={() =>
                    setStan((s) => ({ ...s, emocje: s.emocje.filter((_, j) => j !== i) }))
                  }
                >
                  Usuń
                </button>
              </div>
            </div>

            <div className="emocja-szczegoly">
              <div>
                <label htmlFor={`rodzaj-${i}`}>Rodzaj</label>
                <select
                  id={`rodzaj-${i}`}
                  value={e.rodzaj}
                  onChange={(ev) => zmienEmocje(i, { rodzaj: ev.target.value })}
                >
                  {RODZAJE_EMOCJI.map((r) => (
                    <option key={r.id} value={r.id} title={r.opis}>
                      {r.nazwa}
                    </option>
                  ))}
                </select>
              </div>
              <div>
                <label htmlFor={`wiek-${i}`}>{etykiety.wiek}</label>
                <input
                  id={`wiek-${i}`}
                  type="text"
                  value={e.wiek}
                  onChange={(ev) => zmienEmocje(i, { wiek: ev.target.value })}
                />
              </div>
              {etykiety.zrodlo && (
                <div>
                  <label htmlFor={`zrodlo-${i}`}>{etykiety.zrodlo}</label>
                  <input
                    id={`zrodlo-${i}`}
                    type="text"
                    value={e.zrodlo}
                    onChange={(ev) => zmienEmocje(i, { zrodlo: ev.target.value })}
                  />
                </div>
              )}
              <div>
                <label htmlFor={`notatka-${i}`}>{etykiety.notatka}</label>
                <input
                  id={`notatka-${i}`}
                  type="text"
                  value={e.notatka}
                  onChange={(ev) => zmienEmocje(i, { notatka: ev.target.value })}
                />
              </div>
            </div>
          </div>
        );
      })}

      <button
        type="button"
        className="btn btn-zielony"
        style={{ marginTop: "0.75rem" }}
        onClick={() => setMapaOtwarta(true)}
      >
        Otwórz Mapę Emocji
      </button>

      {mapaOtwarta && (
        <WybieraczEmocji
          onWybierz={dodajEmocje}
          onZamknij={() => setMapaOtwarta(false)}
          liczbaWybranych={stan.emocje.length}
          problemy={nazwaneProblemy.map((p) => p.nazwa)}
        />
      )}

      {/* ---------------------------------------------------- nasilenie po */}

      <h2 style={{ marginTop: "2.5rem" }}>Nasilenie problemów na koniec sesji</h2>
      {nazwaneProblemy.length === 0 ? (
        <p className="etykieta-opis">Najpierw nazwij problemy powyżej.</p>
      ) : (
        nazwaneProblemy.map((p) => (
          <div className="karta" key={p.i}>
            <div className="pole-wiersz">
              <div>
                <span className="etykieta">Nazwa problemu</span>
                <input type="text" value={p.nazwa} readOnly tabIndex={-1} />
              </div>
              <div>
                <Skala
                  id={`po-${p.i}`}
                  etykieta="Nasilenie po sesji"
                  wartosc={p.ocena_po}
                  onZmiana={(ocena_po) => zmienProblem(p.i, { ocena_po })}
                />
              </div>
            </div>
          </div>
        ))
      )}

      <div className="pole" style={{ marginTop: "2.5rem" }}>
        <label htmlFor="komentarz">
          Komentarz <span className="etykieta-opis">(opcjonalny — notatka dla Ciebie)</span>
        </label>
        <textarea
          id="komentarz"
          value={stan.komentarz}
          onChange={(e) => zmien({ komentarz: e.target.value })}
        />
      </div>

      <div className="rzad-przyciskow">
        <button type="submit" className="btn btn-zielony">
          Zapisz sesję
        </button>
        {akcjaUsun && idSesji !== undefined && (
          <button
            type="submit"
            className="btn btn-czerwony"
            formAction={akcjaUsun}
            formNoValidate
            data-bez-walidacji="1"
            onClick={(ev) => {
              if (!window.confirm("Usunąć tę sesję? Tej operacji nie da się cofnąć.")) {
                ev.preventDefault();
              }
            }}
          >
            Usuń sesję
          </button>
        )}
        <Link href="/" className="btn-tekst">
          Anuluj
        </Link>
      </div>
    </form>
  );
}
