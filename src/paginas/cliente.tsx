import { Home } from "../componentes/cliente/home";

export function Cliente() {
  return (
    <Home
      restNombre="Nombre"
      restCorreo="correo@gmail.com"
      restDesc="descripcion"
      restComent="comentario"
      restDir="direccion"
      restTel="telefono"
    />
  );
}
