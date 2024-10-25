import { Link } from "react-router-dom";
import "../../static/css/home.css";

interface OrdenProps {
  restNombre: string;
  restDir: string;
  restTel: string;
  restCorreo: string;
  ordenSec: string;
  ordenComent: string;
}

export function Orden({
  restNombre = "",
  restDir = "",
  restTel = "",
  restCorreo = "",
  ordenSec = "",
  ordenComent = "",
}: OrdenProps) {
  const Button = ({ text = "unknown" }) => {
    return <button>{text}</button>;
  };

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
        </nav>
      </header>

      <main className="contenedor-orden">
        <section className="contenedor-orden__descripcion">
          <p>
            {restNombre}
            {ordenComent}
          </p>
          <Button text="Envio" />
          <h2>{ordenSec}</h2>
          <img src="../../static/img/pizza.webp" alt="Pizza" />
        </section>

        <section className="informacion-orden">
          <h2>{ordenSec}</h2>
          <p>{ordenComent}</p>

          <ul>
            <li>Estamos abiertos: Lunes a Viernes 8am - 16pm</li>
            <li>{restDir}</li>
            <li>
              {restTel}, {restCorreo}
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer-orden">
        <p>&copy; 2024 {restNombre}. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
