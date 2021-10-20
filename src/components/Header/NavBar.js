import React from "react";
import "./../css/StyleProduct.css";

function BarraNavegacion() {
  return (
    <div>
      <nav className="navbar">
        <div className="logo">
          <i className="bx bxs-up-arrow icon"></i>
          <a className="enlaceLogoBarraNavegacion">TARGET</a>
        </div>
        <ul className="menu">
          <li className="listaNavegacionBarra">
            <a className="enlaceListaBarraNavegacion">Home</a>
          </li>
          <li className="listaNavegacionBarra">
            <a className="enlaceListaBarraNavegacion">Ventas</a>
          </li>
          <li className="listaNavegacionBarra">
            <a className="enlaceListaBarraNavegacion" href="/productos.html">
              Productos
            </a>
          </li>
          <li className="listaNavegacionBarra">
            <a className="enlaceListaBarraNavegacion">Usuarios</a>
          </li>
          <li className="listaNavegacionBarra">
            <a className="enlaceListaBarraNavegacion">Contact</a>
          </li>
        </ul>
        <div className="buttons">
          <div className="button"></div>
          <div className="button"></div>
        </div>
      </nav>
    </div>
  );
}

export default BarraNavegacion;
