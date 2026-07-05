import { memo, useCallback, useState } from "react";
import FilaMemoizar from "./FIlaMemoizar";
import type Persona from "../persona.model";
import { ErrorBoundary } from "react-error-boundary";

const TablaMemoizar = memo(function TablaMemoizar() {
  console.log("Renderizando el componente de tabla");

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

  const removerPersona = useCallback((persona: Persona) => {
    setPersona((estadoActual) =>
      estadoActual.filter((p) => p.id !== persona.id),
    );
  }, []);

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
          <ErrorBoundary
            key={p.id}
            fallback={
              <>
                <td colSpan={3} style={{ color: "red" }}>
                  --Error: {p.nombre}
                </td>
              </>
            }
          >
            <FilaMemoizar persona={p} remover={removerPersona} />
          </ErrorBoundary>
        ))}
      </tbody>
    </table>
  );
});

export default TablaMemoizar;
