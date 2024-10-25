import "../../static/css/orden.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./home";
import { Contacto } from "./contacto";

export function Orden({
  ordenSec = "",
  ordenComent = "",
  restTel = "",
  restDir = "",
  restCorreo = "",
}) {
  const Button = ({ text = "unknown" }) => {
    return <button>{text}</button>;
  };
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/orden" element={<Orden />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
  </BrowserRouter>;
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
            <li className="header-orden__nav__links__item">
              <Link to="/contacto">Contactános</Link>{" "}
            </li>
          </ul>
        </nav>
      </header>

      <main className="contenedor">
        <section className="descripcion">
          <p>{ordenComent}</p>
          <Button text="Envio" />
          <h2>{ordenSec}</h2>
          <img src="../../static/img/pizza.webp" alt="" />
        </section>

        <section className="informacion">
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

      <footer>
        <p>&copy; 2024 {ordenSec}. Todos los derechos reservados.</p>
      </footer>
    </>
  );
}
