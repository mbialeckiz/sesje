"use client";

export default function FormularzImportu({
  akcja,
}: {
  akcja: (formData: FormData) => Promise<void>;
}) {
  return (
    <form
      action={akcja}
      onSubmit={(ev) => {
        if (
          !window.confirm(
            "Odtworzenie kopii usunie wszystkich obecnych klientów i sesje, a w ich miejsce wstawi dane z pliku. Kontynuować?",
          )
        ) {
          ev.preventDefault();
        }
      }}
    >
      <div className="pole">
        <label htmlFor="plik">Plik kopii zapasowej (JSON)</label>
        <input id="plik" name="plik" type="file" accept="application/json,.json" required />
      </div>
      <button type="submit" className="btn btn-czerwony">
        Odtwórz dane z pliku
      </button>
    </form>
  );
}
