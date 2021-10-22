import React from "react";
import { Link } from "react-router-dom";
import "./../css/StyleProduct.css";


function Productos() {
  return (
    <div>
      <div>
        <div className="titulo">
          <p>Productos</p>
        </div>
        <div className="overview-boxes">
          <Link to={'/ListaProductos'}>
          <button type={"button"} className="buttons">
            Listar
          </button>
          </Link>

          <Link to={'/RegistrarProducto'}>
          <button type={"button"} className="buttons">
          Registrar
          </button>
          </Link>

          <Link to={'/BuscarProducto'}>
          <button type={"button"} className="buttons">
            Buscar
          </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Productos;
