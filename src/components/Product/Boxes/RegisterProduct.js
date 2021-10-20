import React from "react";
import "./../../css/StyleProduct.css";
import "./../../css/RegisterProduct.css";
import FormularioNuevoProduct from "./FormRegisterProduct";

function RegistrarProducto() {
  return (
    <div>
      <div>
        <FormularioNuevoProduct/>
      </div>
    </div>
  );
}

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
