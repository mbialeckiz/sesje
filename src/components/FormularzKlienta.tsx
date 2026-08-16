"use client";

import Link from "next/link";
import { useState } from "react";
import WyborTypu from "./WyborTypu";
import type { Klient } from "@/lib/typy";

export default function FormularzKlienta({
  klient,
  akcja,
  akcjaUsun,
  powrot,
  liczbaSesji = 0,
}: {
  klient?: Klient;
  akcja: (formData: FormData) => Promise<void>;
  akcjaUsun?: (formData: FormData) => Promise<void>;
  powrot?: string;
  liczbaSesji?: number;
}) {
  const [rodzaj, setRodzaj] = useState<string>(klient?.rodzaj ?? "czlowiek");
  const [maMurSerca, setMaMurSerca] = useState<boolean>(Boolean(klient?.ma_mur_serca));

  return (
    <form action={akcja}>
      {klient && <input type="hidden" name="id" value={klient.id} />}
      {powrot && <input type="hidden" name="powrot" value={powrot} />}
      <input type="hidden" name="rodzaj" value={rodzaj} />

      <div className="pole-wiersz">
        <div>
          <div className="pole">
            <label htmlFor="imie" className="wymagane">
              Imię
            </label>
            <input
              id="imie"
              name="imie"
              type="text"
              required
              maxLength={80}
              defaultValue={klient?.imie ?? ""}
            />
          </div>

          <div className="pole">
            <label htmlFor="inicjal">
              Inicjał nazwiska <span className="etykieta-opis">(opcjonalny)</span>
            </label>
            <input
              id="inicjal"
              name="inicjal"
              type="text"
              maxLength={4}
              defaultValue={klient?.inicjal ?? ""}
            />
          </div>

          <div className="pole">
            <label htmlFor="wiek">
              Wiek <span className="etykieta-opis">(liczba lat)</span>
            </label>
            <input
              id="wiek"
              name="wiek"
              type="number"
              min={0}
              max={129}
              defaultValue={klient?.wiek ?? ""}
            />
          </div>
        </div>

        <div>
          <div className="pole">
            <WyborTypu
              etykieta="Rodzaj klienta"
              wartosc={rodzaj}
              onZmiana={setRodzaj}
              opcje={[
                { id: "czlowiek", nazwa: "Człowiek", ikona: "👥" },
                { id: "zwierze", nazwa: "Zwierzę", ikona: "🐾" },
              ]}
            />
          </div>

          <div className="pole">
            <label className="checkbox">
              <input
                type="checkbox"
                name="czy_ja"
                defaultChecked={Boolean(klient?.czy_ja)}
              />
              To ja <span className="etykieta-opis">(sesje własne)</span>
            </label>
          </div>

          <div className="pole">
            <label className="checkbox">
              <input
                type="checkbox"
                name="ma_mur_serca"
                checked={maMurSerca}
                onChange={(e) => setMaMurSerca(e.target.checked)}
              />
              Klient z Murem Serca
            </label>
          </div>

          {maMurSerca && (
            <div className="pole">
              <label className="checkbox">
                <input
                  type="checkbox"
                  name="mur_serca_usuniety"
                  defaultChecked={Boolean(klient?.mur_serca_usuniety)}
                />
                Mur Serca w pełni usunięty
              </label>
            </div>
          )}
        </div>
      </div>

      <div className="pole">
        <label htmlFor="notatki">
          Notatki o kliencie <span className="etykieta-opis">(opcjonalne)</span>
        </label>
        <textarea id="notatki" name="notatki" defaultValue={klient?.notatki ?? ""} />
      </div>

      <div className="rzad-przyciskow">
        <button type="submit" className="btn btn-zielony">
          Zapisz klienta
        </button>
        {akcjaUsun && klient && (
          <button
            type="submit"
            className="btn btn-czerwony"
            formAction={akcjaUsun}
            formNoValidate
            onClick={(ev) => {
              const ostrzezenie =
                liczbaSesji > 0
                  ? `Usunąć klienta ${klient.imie} razem z ${liczbaSesji} zapisanymi sesjami? Tej operacji nie da się cofnąć.`
                  : `Usunąć klienta ${klient.imie}? Tej operacji nie da się cofnąć.`;
              if (!window.confirm(ostrzezenie)) ev.preventDefault();
            }}
          >
            Usuń klienta
          </button>
        )}
        <Link href="/" className="btn-tekst">
          Anuluj
        </Link>
      </div>
    </form>
  );
}
