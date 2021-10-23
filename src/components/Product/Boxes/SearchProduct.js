import React from "react";
import { Link } from "react-router-dom";
import "./../../css/StyleProduct.css";


function BuscarProducto() {
  return(
    <div>
      <div>
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <Link className="enlaceListaBarraNavegacion">
                <div className="number">Buscar Producto</div>
              </Link>
              <div className="search-box">
                  <input type="text" placeholder="Search..."/>        
              </div>
            </div>
          </div>
          <div className="box">
            <div className="right-side">
              <Link className="enlaceListaBarraNavegacion">
                <div className="number">Modificar</div>
              </Link>
            </div>
          </div>  
        </div>
    </div>
  </div>
  )
}

export default BuscarProducto;