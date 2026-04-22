import { useState } from "react";
import Cabecera from "./Cabecera";
import MostrarTexto from "./MostrarTexto";

export default function App() {

  console.log('Renderizando el componente App');

  const [texto, setTexto] = useState('');

  const manejarClick = () => alert('Click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setTexto(e.currentTarget.value);
  }

  return (
    <>
      <Cabecera />

      <button onClick={manejarClick}>Clickeame</button>
      
      <div>
        <input onKeyUp={(e) => manejarKeyUp(e)} />
      </div>
      
      <MostrarTexto texto={texto} />
    </>
  );
}
