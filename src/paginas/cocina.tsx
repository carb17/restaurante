import { Routes, Route } from "react-router-dom";
import { Comanda } from "../componentes/cocina/comanda";

export function Cocina() {
  const restNombre = "Nombre del restaurante";
  const nombreCliente = "Nombre del cliente";
  const menu = "";

  return (
    <Routes>
      <Route
        path="/comanda"
        element={
          <Comanda
            restNombre={restNombre}
            nombreCliente={nombreCliente}
            menu={menu}
          />
        }
      />
    </Routes>
  );
}
