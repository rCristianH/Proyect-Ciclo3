import React from "react";
import "./../../css/StyleProduct.css";
import "./../../css/SearchProduct.css";

function Buscar() {
  return(
    <div>
      <div>
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <a className="enlaceListaBarraNavegacion">
                <div className="number">Buscar Producto</div>
              </a>
              <div className="search-box">
                  <input type="text" placeholder="Search..."/>        
              </div>
            </div>
          </div>
          <div className="box">
            <div className="right-side">
              <a className="enlaceListaBarraNavegacion">
                <div className="number">Modificar</div>
              </a>
            </div>
          </div>  
        </div>
    </div>
  </div>
  )
}

export default Buscar;