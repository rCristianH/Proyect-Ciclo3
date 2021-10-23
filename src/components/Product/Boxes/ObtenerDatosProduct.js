import React from 'react'

function ObtenerDatosProduct() {
  const Nombre = document.getElementById('Nombre').value;
  const Id = document.getElementById('Id').value;
  const Categoria = document.getElementById('Categoria').value;
  const Colores = document.getElementById('Colores').value;
  const Precio = parseFloat(document.getElementById('Precio').value);
  console.log(Nombre);
  console.log(Id);
  console.log(Categoria);
  console.log(Colores);
  console.log(Precio);
}

export default ObtenerDatosProduct
