import "../../static/css/contacto.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Home } from "./home";
import { Orden } from "./orden";

export function Contacto() {
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
      <form>
        <h2>Contactános</h2>
        <p>
          Agradecemos sus consultas, comentarios y sugerencias. ¡Queremos saber
          de vos!
        </p>

        <div className="form-group">
          <label htmlFor="nombre">Ingresa tu nombre</label>
          <input type="text" name="nombre" placeholder="Nombre" required />
        </div>
        <div className="form-group">
          <label htmlFor="correo">Ingresa tu correo</label>
          <input type="email" name="correo" placeholder="Correo" required />
        </div>
        <div className="form-group">
          <label htmlFor="tel">Ingresa tu teléfono</label>
          <input type="number" name="tel" placeholder="Teléfono" required />
        </div>
        <div className="form-group">
          <label htmlFor="mensaje">Ingresa un mensaje</label>
          <textarea
            name="mensaje"
            placeholder="Escribir algo..."
            required
          ></textarea>
        </div>
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
