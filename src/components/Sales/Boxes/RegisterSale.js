import React from "react";
import {useState} from 'react'



const RegistrarVenta = () => {
  const [ValorProducto,CambiarValorProducto] = useState('');
  const [ValorVendedor,CambiarValorVendedor] = useState('');
  const [ValorValorVenta,CambiarValorVenta] = useState('');
  const [ValorNombreCliente,CambiarValorNombreCliente] = useState('');
  const [ValorIdCliente,CambiarValorIdCliente] = useState('');
  const [ValorFechaVenta,CambiarValorFechaVenta] = useState('');


  const ButtonClick = () => {

    if(ValorProducto === '' || ValorVendedor === '' || ValorValorVenta === '' || ValorNombreCliente === '' || ValorIdCliente === ''){
      alert("Los campos no pueden estar vacíos")

    }
    else{
     
      const Venta = {
        Producto: ValorProducto,
        Vendedor: ValorVendedor,
        ValorVenta: ValorValorVenta,
        NombreCliente: ValorNombreCliente,
        IdCliente: ValorIdCliente,
        FechaVenta: ValorFechaVenta,
      }
    console.log(Venta);
    
  } 

  
}

  return(
    <div>
      <form>
        <div className="overview-boxes">
          <div className="box">
            <div className="right-side">
              <div className="box-topic">Producto</div>
              <input
                className="number"
                type="text"
                id="Nombre"
                name="Nombre"
                onChange={(event) => {
                  CambiarValorProducto(event.target.value);
                }}
                autoFocus
              />
              <div className="box-topic">Vendedor</div>
              <input className="number" type="text" name="Id" onChange={(event) => {
                  CambiarValorVendedor(event.target.value);
                }}/>
              <div className="box-topic">Valor Venta</div>
              <input className="number" type="text" name="Categoria" onChange={(event) => {
                  CambiarValorVenta(event.target.value);
                }}/>
              <div className="box-topic">Nombre Cliente</div>
              <input className="number" type="text" name="Colores" onChange={(event) => {
                  CambiarValorNombreCliente(event.target.value);
                }}/>
              <div className="box-topic">ID Cliente</div>
              <input className="number" type="text" name="Precio" onChange={(event) => {
                  CambiarValorIdCliente(event.target.value);
                }}/>
              <div className="box-topic">Fecha de Venta</div>
              <input className="number" type="text" name="FV" onChange={(event) => {
                  CambiarValorFechaVenta(event.target.value);
                }}/>
              <button type={'button'} className="btn btn-outline-info" onClick={ButtonClick}>
                Agregar Venta
              </button>

            </div>
          </div>
        </div>
      </form>
    </div>
  )
}

export default RegistrarVenta;