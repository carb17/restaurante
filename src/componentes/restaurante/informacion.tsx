import React from "react";
import { RestauranteProps } from "../../types/interfaces";

const Informacion: React.FC<RestauranteProps> = ({
  nombre,
  direccion,
  telefono,
  correo,
  descripcion,
  comentario,
}) => {
  return (
    <section className="informacion">
      <h2>{nombre}</h2>
      <ul>
        <li>Dirección: {direccion}</li>
        <li>Teléfono: {telefono}</li>
        <li>Correo: {correo}</li>
        <li>Descripcion: {descripcion}</li>
        <li>Comentario: {comentario}</li>
        <li>Estamos abiertos: Lunes a Viernes 8am - 16pm</li>
      </ul>
    </section>
  );
};

export default Informacion;
