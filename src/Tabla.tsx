import { useState } from "react";
import Fila from "./FIla";
import type Persona from "./persona.model";

export default function Tabla() {
  const personasFunte: Persona[] = [
    { id: 1, nombre: "Rafael", departamento: "Masaya" },
    { id: 2, nombre: "Yanna", departamento: "Managua" },
    { id: 3, nombre: "Edgard", departamento: "Granada" },
    { id: 4, nombre: "Edwin", departamento: "Carazo" },
    { id: 5, nombre: 'Enrique alias "Kike"', departamento: "Rivas" },
    { id: 6, nombre: "Manuel", departamento: "Chontales" },
    { id: 7, nombre: "Samuel", departamento: "Boaco" },
  ];

  const [personas, setPersona] = useState(personasFunte);

  const removerPersona = (persona: Persona) => {
    setPersona(personas.filter((p) => p.id !== persona.id));
  };

  return (
    <table>
      <thead>
        <tr>
          <th>Nombre</th>
          <th>Departamento</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {personas.map((p) => (
          <Fila key={p.id} persona={p} remover={removerPersona} />
        ))}
      </tbody>
    </table>
  );
}
