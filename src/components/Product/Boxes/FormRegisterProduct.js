import React from "react";
import "./../../css/RegisterProduct.css"

function FormularioNuevoProducto(){

    return (
      
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
              <input
                className="number"
                type="text"
                name="Id"
              
              />
              <div className="box-topic">Categoria</div>
              <input
                className="number"
                type="text"
                name="Categoria"
                
              />
              <div className="box-topic">Colores</div>
              <input
                className="number"
                type="text"
                name="Colores"
               
              />
              <div className="box-topic">Precio</div>
              <input
                className="number"
                type="text"
                name="Precio"
               
              />
              <button type="submit" className="btn btn-outline-info">
                Agregar Producto
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }


export default FormularioNuevoProducto;
