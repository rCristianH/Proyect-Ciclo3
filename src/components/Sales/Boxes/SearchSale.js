import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";

function BuscarVenta() {

  const [ValorBuscarVenta, CambiarValorBuscarVenta] = useState("");

  const ButtonClick = () => {
    if (ValorBuscarVenta === "") {
      alert("Los campos no pueden estar vacíos");
    } else {
      const BuscarVenta = {
        Buscar: ValorBuscarVenta,
      };
      console.log(BuscarVenta);
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
                CambiarValorBuscarVenta(event.target.value);
              }}
            />
            <button type={"button"} onClick={ButtonClick} className="buttons">
              Buscar Venta
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
}

export default BuscarVenta;
