import React from "react";

function FormNewSale() {
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
              <div className="box-topic">Vendedor</div>
              <input className="number" type="text" name="Id" />
              <div className="box-topic">Valor Venta</div>
              <input className="number" type="text" name="Categoria" />
              <div className="box-topic">Nombre Cliente</div>
              <input className="number" type="text" name="Colores" />
              <div className="box-topic">ID Cliente</div>
              <input className="number" type="text" name="Precio" />
              <button type="submit" className="btn btn-outline-info">
                Agregar Venta
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}

export default FormNewSale;
