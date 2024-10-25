import { Routes, Route } from "react-router-dom";
import { Home } from "../componentes/cliente/home";
import { Orden } from "../componentes/cliente/orden";

export function Cliente() {
  const restNombre = "Nombre del Restaurante";
  const restCorreo = "correo@gmail.com";
  const restDesc = "Descripción del restaurante";
  const restComent = "Comentarios adicionales";
  const restDir = "Dirección del restaurante";
  const restTel = "Teléfono del restaurante";

  const ordenSec = "Sección de Orden";
  const ordenComent = "Comentario de la orden";

  return (
    <Routes>
      <Route
        path="/"
        element={
          <Home
            restNombre={restNombre}
            restCorreo={restCorreo}
            restDesc={restDesc}
            restComent={restComent}
            restDir={restDir}
            restTel={restTel}
          />
        }
      />
      <Route
        path="/orden"
        element={
          <Orden
            restNombre={restNombre}
            restCorreo={restCorreo}
            restDir={restDir}
            restTel={restTel}
            ordenSec={ordenSec}
            ordenComent={ordenComent}
          />
        }
      />
    </Routes>
  );
}
