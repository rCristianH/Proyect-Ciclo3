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
              <button type={"button"} className="btn btn-outline-info"  onClick={ButtonClick}>
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
/* 
<div className="right-side">
  <label className="box-topic" for="Nombre">
    Nombre
  </label>
  <input className="number" type="text" id="Nombre" name="Nombre" autoFocus />
  <label className="box-topic" for="Id">
    Id
  </label>
  <input className="number" type="text" id="Id" name="Id" />
  <label className="box-topic" for="Categoria">
    Categoria
  </label>
  <input className="number" type="text" id="Categoria" name="Categoria" />
  <label className="box-topic" for="Descripcion">
    Descripcion
  </label>
  <input className="number" type="text" id="Descripcion" name="Descripcion" />
  <label className="box-topic" for="Colores">
    Colores
  </label>
  <input className="number" type="text" id="Colores" name="Colores" />
  <label className="box-topic" for="Precio">
    Precio
  </label>
  <input className="number" type="text" id="Precio" name="Precio" />
  <button type="button" class="btn btn-outline-info">
    Agregar Producto
  </button>
</div>; */
