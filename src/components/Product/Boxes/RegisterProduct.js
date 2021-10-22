import React from "react";
import "./../../css/StyleProduct.css";
import "./../../css/RegisterProduct.css";


function RegistrarProducto() {
  return (
    <div>
      <form>
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Nombre</div>
              <input
                className="number"
                type="text"
                id="Nombre"
                name="Nombre"
                autoFocus
              />
              <div className="box-topic">Id</div>
              <input className="number" type="text" name="Id" />
              <div className="box-topic">Categoria</div>
              <input className="number" type="text" name="Categoria" />
              <div className="box-topic">Colores</div>
              <input className="number" type="text" name="Colores" />
              <div className="box-topic">Precio</div>
              <input className="number" type="text" name="Precio" />
              <button type="submit" className="btn btn-outline-info">
                Agregar Producto
              </button>
            </div>
          </div>
        </div>
      </form>
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
