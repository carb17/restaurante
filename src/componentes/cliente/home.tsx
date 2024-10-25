import "../../static/css/home.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Orden } from "./orden";
import { Contacto } from "./contacto";

export function Home({
  restNombre = "",
  restDesc = "",
  restComent = "",
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
    <body>
      <header className="header-home">
        <nav className="header-home__nav">
          <ul className="header-home__nav__links">
            <li className="header-home__nav__links__item">
              <Link to="/">Home</Link>
            </li>
            <li className="header-home__nav__links__item">
              <Link to="/orden">Ordená ahora</Link>
            </li>
            <li className="header-home__nav__links__item">
              <Link to="/contacto">Contactános</Link>{" "}
            </li>
          </ul>
        </nav>
      </header>

      <main className="contenedor-home">
        <section className="contenedor-home__descripcion">
          <h2>{restNombre}</h2>
          <h4>{restDesc}</h4>
        </section>

        <section className="contenedor-home__propaganda">
          <h4>GANA TIEMPO. COMÉ SANO.</h4>
          <h4>ABIERTO TODOS LOS DIAS PARA LLEVAR Y ENTREGAR A DOMICILIO.</h4>
        </section>

        <section>
          <h4>Menú</h4>
        </section>

        <section className="contenedor-home__pedido">
          <h2>Hambriento?</h2>
          <p>{restComent}</p>
          <Button text="Pedido online" />
        </section>

        <section className="contenedor-home__info">
          <h2>{restNombre}</h2>
          <p>{restComent}</p>

          <ul>
            <li>Estamos abiertos: Lunes a Viernes 8am - 16pm</li>
            <li>{restDir}</li>
            <li>
              {restTel}, {restCorreo}
            </li>
          </ul>
        </section>
      </main>

      <footer className="footer-home">
        <p>&copy; 2024 {restNombre}. Todos los derechos reservados.</p>
      </footer>
    </body>
  );
}
