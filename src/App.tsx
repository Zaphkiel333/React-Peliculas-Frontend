import { useState } from "react";

export default function App() {

  console.log('Renderizando el componente App');

  const [texto, setTexto] = useState('');

  const manejarClick = () => alert('Click');

  const manejarKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    setTexto(e.currentTarget.value);
  }

  return (
    <>
      <h1 className="rojo" onClick={() => alert('me has clickeado')}>Hola mundo</h1>

      <button onClick={manejarClick}>Clickeame</button>
      
      <div>
        <input onKeyUp={(e) => manejarKeyUp(e)} />
      </div>
      <div>
        <p>Haz escrito: {texto}</p>
      </div>
    </>
  );
}
