import { useEffect, useState } from "react";
import ListadoPeliculas from "../../peliculas/componentes/ListadoPeliculas";
import type Pelicula from "../../peliculas/modelos/pelicula.model";

export default function LandingPage() {
  const [peliculas, setPeliculas] = useState<AppState>({});

  useEffect(() => {
    setTimeout(() => {
      const enCines: Pelicula[] = [
        {
          id: 1,
          titulo: "Sonic 3",
          poster:
            "https://upload.wikimedia.org/wikipedia/en/f/f2/Sonic_the_Hedgehog_3_film_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        },
        {
          id: 2,
          titulo: "John Wick: Chapter 4",
          poster:
            "https://www.jbhifi.com.au/cdn/shop/products/631881-Product-0-I-638192833228347088.jpg?v=1683686584",
        },
      ];

      const proximosEstrenos: Pelicula[] = [
        {
          id: 3,
          titulo: "Spider-Man: Far From Home",
          poster:
            "https://upload.wikimedia.org/wikipedia/en/b/bd/Spider-Man_Far_From_Home_poster.jpg?utm_source=en.wikipedia.org&utm_campaign=imageinfo&utm_content=thumbnail_unscaled",
        },
      ];

      setPeliculas({ enCines, proximosEstrenos });
    }, 1000);
  }, []);

  return (
    <>
      <h3>En Cines</h3>
      <ListadoPeliculas peliculas={peliculas.enCines} />
      <h3>Próximos Estrenos</h3>
      <ListadoPeliculas peliculas={peliculas.proximosEstrenos} />
    </>
  );
}

interface AppState {
  enCines?: Pelicula[];
  proximosEstrenos?: Pelicula[];
}
