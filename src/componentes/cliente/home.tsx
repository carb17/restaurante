import "../../static/css/cliente.css";
// import { Link } from "react-router-dom";

export function Home({
  restNombre = "unknown",
  restDesc = "unknown",
  restComent = "unknown",
  restTel = "unknown",
  restDir = "unknown",
  restCorreo = "unknown",
}) {
  const Button = ({ text = "unknown" }) => {
    return <button>{text}</button>;
  };
  return (
    <body>
      <header className="header-home">
        <nav className="header-home__nav">
          <ul className="header-home__nav__links">
            <li className="header-home__nav__links__item">
              {/* <Link to="/menu">Home</Link> */}
              <a href="#"> Home</a>
            </li>
            <li className="header-home__nav__links__item">
              {/* <Link to="/orden">Ordená ahora</Link> */}
              <a href="#"> Orden online</a>
            </li>
            <li className="header-home__nav__links__item">
              <a href="#contact">Contáctanos</a>
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
