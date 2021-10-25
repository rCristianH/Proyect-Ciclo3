import React from "react";
import "./../css/StyleProduct.css";
import { Link } from "react-router-dom";

function BarraNavegacion() {
  return (
    <div>
      <nav className="navbar">
      <Link to={"/Header"}>
        <div className="logo">
          <i className="bx bxs-up-arrow icon"></i>
          <p className="enlaceLogoBarraNavegacion">TARGET</p>
        </div>
        </Link>
        <ul className="menu">
          <li className="listaNavegacionBarra">
            <Link to={"/Header"}>
            <p className="enlaceListaBarraNavegacion">Home</p>
            </Link>
          </li>
          <li className="listaNavegacionBarra">
            <Link to={"/Ventas"}>
              <p className="enlaceListaBarraNavegacion">Ventas</p>
            </Link>
          </li>
          <li className="listaNavegacionBarra">
            <Link to={'/Productos'}>
            <p className="enlaceListaBarraNavegacion">Productos</p>
            </Link>
          </li>
          <li className="listaNavegacionBarra">
            <Link to={'/Usuarios'}> 
            <p className="enlaceListaBarraNavegacion">Usuarios</p>
            </Link>
          </li>
          <li className="listaNavegacionBarra">
            {/* <Link to="/Contact"> */}
            <p className="enlaceListaBarraNavegacion">Contact</p>
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BarraNavegacion;
