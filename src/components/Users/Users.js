import React from "react";
import { Link } from "react-router-dom";

function Usuarios() {
  return (
    <div>
      <div>
        <div className="titulo">
          <p>Usuarios</p>
        </div>
        <div className="overview-boxes">
          <Link to={"/ListaUsuarios"}>
          <button type={"button"} className="buttons">
            Listar
          </button>
          </Link>
          <Link to={"/ActualizarUsuario"}>
          <button type={"button"} className="buttons">
            Actualizar
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Usuarios;
