"use client";

export default function PrzyciskDruku() {
  return (
    <button type="button" className="btn btn-zielony" onClick={() => window.print()}>
      Drukuj / zapisz jako PDF
    </button>
  );
}
