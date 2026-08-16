import type { EmocjaWejscie, ProblemWejscie } from "./typy";

/**
 * Stan formularza sesji. Leży poza komponentem, bo składają go zarówno
 * strony serwerowe (dane z bazy), jak i sam formularz w przeglądarce.
 */
export type StanSesji = {
  klient_id: string;
  data: string;
  typ: string;
  komentarz: string;
  problemy: ProblemWejscie[];
  emocje: EmocjaWejscie[];
};

export function pustyStan(klientId?: number): StanSesji {
  return {
    klient_id: klientId ? String(klientId) : "",
    data: new Date().toISOString().slice(0, 10),
    typ: "osobista",
    komentarz: "",
    problemy: [{ nazwa: "", ocena_przed: null, ocena_po: null }],
    emocje: [],
  };
}
