import React from "react";
import { Link } from "react-router-dom";
import "./../css/StyleVentas.css"

function Ventas() {
  return (
    <div>
      <div>
        <div className="titulo">
          <p>Ventas</p>

        </div>
        <div className="overview-boxes">
        <Link to={'/ListarVentas'}>
        <button type={'button'} className="buttons" >
          Listar
          </button>
          </Link>
          
          <Link to={'/RegistrarVenta'}>
          <button type={'button'} className="buttons" >
          Registrar
          </button>
          </Link>

          <Link to={'/BuscarVenta'}>
          <button type={'button'} className="buttons" >
          Buscar
          </button>
          </Link>
         
         
        </div>
      </div>
    </div>
  );
}

export default Ventas;
