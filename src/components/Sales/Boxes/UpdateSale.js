import React from "react";

function ActualizarVenta () {
  return(
    <div>
      <div>
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <a className="enlaceListaBarraNavegacion">
                <div className="number">Buscar Ventas</div>
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

export default ActualizarVenta;