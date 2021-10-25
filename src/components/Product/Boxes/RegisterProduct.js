import React from "react";
import "./../../css/StyleProduct.css";
import "./../../css/RegisterProduct.css";
import { useState } from "react";

const RegistrarProducto = () => {
  const [ValorNombre, CambiarValorNombre] = useState("");
  const [ValorId, CambiarValorId] = useState("");
  const [ValorCategoria, CambiarValorCategoria] = useState("");
  const [ValorColores, CambiarValorColores] = useState("");
  const [ValorPrecio, CambiarValorPrecio] = useState("");

  const ButtonClick = () => {
    if (
      ValorNombre === "" ||
      ValorId === "" ||
      ValorCategoria === "" ||
      ValorColores === "" ||
      ValorPrecio === ""
    ) {
      alert("Los campos no pueden estar vacíos");
    } else {
      const Producto = {
        Nombre: ValorNombre,
        Id: ValorId,
        Categoria: ValorCategoria,
        Colores: ValorColores,
        Precio: ValorPrecio,
      };
      console.log(Producto);
    }
  };

  return (
    <div>
      <form>
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Nombre</div>
              <input
                type="text"
                className="number"
                autoFocus
                onChange={(event) => {
                  CambiarValorNombre(event.target.value);
                }}
              />
              <div className="box-topic">Id</div>
              <input
                className="number"
                type="text"
                onChange={(event) => {
                  CambiarValorId(event.target.value);
                }}
              />
              <div className="box-topic">Categoria</div>
              <input
                type="text"
                className="number"
                onChange={(event) => {
                  CambiarValorCategoria(event.target.value);
                }}
              />
              <div className="box-topic">Colores</div>
              <input
                type="text"
                className="number"
                onChange={(event) => {
                  CambiarValorColores(event.target.value);
                }}
              />
              <div className="box-topic">Precio</div>
              <input
                type="text"
                className="number"
                onChange={(event) => {
                  CambiarValorPrecio(event.target.value);
                }}
              />
              <button
                type={"button"}
                className="btn btn-outline-info"
                onClick={ButtonClick}
              >
                Agregar Producto
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegistrarProducto;
