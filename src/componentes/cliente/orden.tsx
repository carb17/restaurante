import "../../static/css/cliente.css";

export function Orden({
  ordenSec = "unknown",
  ordenComent = "unknown",
  restTel = "unknown",
  restDir = "unknown",
  restCorreo = "unknown",
}) {
  const Button = ({ text = "unknown" }) => {
    return <button>{text}</button>;
  };
  return (
    <body>
      <header className="header-orden">
        <nav className="header-orden__nav">
          <ul className="header-orden__nav__links">
            <li className="header-orden__nav__links__item">
              {/* <Link to="/menu">Home</Link> */}
              <a href="#"> Home</a>
            </li>
            <li className="header-orden__nav__links__item">
              {/* <Link to="/orden">Ordená ahora</Link> */}
              <a href="#"> Ordená ahora</a>
            </li>
            <li className="header-orden__nav__links__item">
              <a href="#">Contáctanos</a>
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
    </body>
  );
}
