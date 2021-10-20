import React from "react";
import "./../css/StyleProduct.css";
import "./../css/Product.css";

function Productos() {
  return (
    <div>
      <div>
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <a href="lista.html">
                <div className="number">Listar</div>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="right-side">
              <a href="secciones.html">
                <div className="number">Secciones</div>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="right-side">
              <a href="registrarproduct.html">
                <div className="number">Registrar</div>
              </a>
            </div>
          </div>
          <div className="box">
            <div className="right-side">
              <a href="buscar.html">
                <div className="number">Buscar</div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Productos;
