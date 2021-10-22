import React from "react";
import "./../css/StyleProduct.css";
import { Switch, Route, Link } from "react-router-dom";

function BarraNavegacion() {
  return (
    <div>
      <nav className="navbar">
      <Link to={"/"}>
        <div className="logo">
          <i className="bx bxs-up-arrow icon"></i>
          <a className="enlaceLogoBarraNavegacion">TARGET</a>
        </div>
        </Link>
        <ul className="menu">
          <li className="listaNavegacionBarra">
            <Link to={"/"}>
            <a className="enlaceListaBarraNavegacion">Home</a>
            </Link>
          </li>
          <li className="listaNavegacionBarra">
            <Link to={"/Ventas"}>
              <a className="enlaceListaBarraNavegacion">Ventas</a>
            </Link>
          </li>
          <li className="listaNavegacionBarra">
            <Link to={'/Productos'}>
            <a className="enlaceListaBarraNavegacion">Productos</a>
            </Link>
          </li>
          <li className="listaNavegacionBarra">
            <Link to={'/Usuarios'}> 
            <a className="enlaceListaBarraNavegacion">Usuarios</a>
            </Link>
          </li>
          <li className="listaNavegacionBarra">
            {/* <Link to="/Contact"> */}
            <a className="enlaceListaBarraNavegacion">Contact</a>
            {/* </Link> */}
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default BarraNavegacion;
