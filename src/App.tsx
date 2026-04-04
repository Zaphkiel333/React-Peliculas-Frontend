import styles from './App.module.css'

export default function App() {
  const subtitulo = "Esto es otro subtitulo";
  const imagenURL = "/favicon.svg";

  const duplicar = (valor: number) => valor * 2;

  const curadradoRojo = {
    backgroundColor: "red",
    width: "50px",
    height: "50px",
    marginLeft: "1rem",
  };

  return (
    <>
      <h1 className="rojo">Hola mundo</h1>
      <div style={curadradoRojo}></div>
      <h3 className={styles.color}>{subtitulo.toLocaleUpperCase()}</h3>
      <h4>El doble de 3 es {duplicar(3)}</h4>
      <div style={curadradoRojo}></div>
      <img src={imagenURL} alt="logo vite" />
    </>
  );
}
