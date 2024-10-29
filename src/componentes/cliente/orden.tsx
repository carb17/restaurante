import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../static/css/cliente.css";

interface OrdenProps {
  restNombre: string;
  restDir: string;
  restTel: string;
  restCorreo: string;
  restComent: string;
}

interface MenuItem {
  id: number;
  nombre: string;
  descripcion: string;
  precio: number;
}

export function Orden({
  restNombre = "",
  restDir = "",
  restTel = "",
  restCorreo = "",
  restComent = "",
}: OrdenProps) {
  const Button = ({ text = "unknown" }) => {
    return <button>{text}</button>;
  };

  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchMenu = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5001/middlend/menu");
        if (!response.ok) {
          setError("Error en la respuesta de la API");
          throw new Error("Error en la respuesta de la API");
        }

        const data = await response.json();
        console.log("Respuesta de la API:", data);

        if (Array.isArray(data)) {
          setMenuItems(data);
        } else {
          setError("La respuesta no es un array");
        }
      } catch (error) {
        console.error("Error al cargar el menú:", error);
        setError("No se pudo cargar el menú.");
      }
    };

    fetchMenu();
  }, []);

  return (
    <>
      <header className="header-orden">
        <nav className="header-orden__nav">
          <ul className="header-orden__nav__links">
            <li className="header-orden__nav__links__item">
              <Link to="/">Home</Link>
            </li>
            <li className="header-orden__nav__links__item">
              <Link to="/orden">Ordená ahora</Link>
            </li>
          </ul>
          {error && <div className="error">{error}</div>}
        </nav>
      </header>

      <main className="contenedor-orden">
        <section className="contenedor-orden__descripcion">
          <h2>{restNombre}</h2>
        </section>
        <section>
          <ul>
            {menuItems.length > 0 ? (
              menuItems.map((item) => (
                <li key={item.id}>
                  {item.nombre} - {item.descripcion} - {item.precio} $
                </li> 
              ))
            ) : (
              <p>No hay elementos en el menú.</p>
            )}
          </ul>
          <Button text="Agregar" />
        </section>

        <section className="contenedor-home__info">
          <h2>{restNombre}</h2>
          <p>{restComent}</p>
          <ul>
            <li>Estamos abiertos: Lunes a Viernes 8am - 16pm</li>
            <li>{restDir}</li>
          </ul>
          <ul>
            <li>{restTel}</li>
            <li>{restCorreo}</li>
          </ul>
        </section>
      </main>

      <footer className="footer-orden">
        <p>&copy; 2024 {restNombre}. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
