import { useState } from "react";
import ContenidoDinamico from "./ContenidoDinamico";
import ContenidoDinamicoIf from "./ContenidoDinamicoIf";

export default function App() {
  const [mostrar, setMostrar] = useState(false);

  const [calificacion, setCalificacion] = useState<number | null>(null);

  return (
    <>
      <input type="checkbox" onChange={(e) => setMostrar(e.target.checked)} />
      <label>Mostrar el mensaje oculto</label>

      <ContenidoDinamico mostrarContenido={mostrar} />

      <label> ingrese la calificacion:</label>
      <input
        type="number"
        onChange={(e) => setCalificacion(Number(e.target.value))}
      />

      {calificacion ? (
        <ContenidoDinamicoIf calificacion={calificacion} />
      ) : undefined}
    </>
  );
}
