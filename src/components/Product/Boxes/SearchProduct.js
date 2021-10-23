import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./../../css/StyleProduct.css";

const BuscarProducto = () => {
  const [ValorBuscarProducto, CambiarValorBuscarProducto] = useState("");

  const ButtonClick = () => {
    if (ValorBuscarProducto === "") {
      alert("Los campos no pueden estar vacíos");
    } else {
      const BuscarProducto = {
        Buscar: ValorBuscarProducto,
      };
      console.log(BuscarProducto);
    }
  };

  return (
    <div>
      <div>
        <div className="overview-boxes">
          <div>
            <input
              type="text"
              autoFocus
              className="searchbox"
              onChange={(event) => {
                CambiarValorBuscarProducto(event.target.value);
              }}
            />
            <button type={"button"} onClick={ButtonClick} className="buttons">
              Buscar Producto
            </button>
          </div>
              
          <Link>
            <button type={"button"} className="buttons">
              Modificar
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BuscarProducto;
