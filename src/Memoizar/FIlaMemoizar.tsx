import { memo } from "react";
import type Persona from "../persona.model";

const FilaMemoizar = memo(function FilaMemoizar({
  persona,
  remover,
}: FilaProps) {
  console.log(`Cargar fila de ${persona.nombre}`);

  if (persona.nombre === "Rafael") {
    throw Error();
  }

  return (
    <tr>
      <td>{persona.nombre}</td>
      <td>{persona.departamento}</td>
      <td>
        <button onClick={() => remover(persona)}>Remover</button>
      </td>
    </tr>
  );
});

interface FilaProps {
  persona: Persona;
  remover: (p: Persona) => void;
}

export default FilaMemoizar;
