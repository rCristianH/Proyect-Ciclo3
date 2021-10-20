import React from "react";
import { Component } from "react";
import "./../../css/RegisterProduct.css"

class FormularioNuevoProducto extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("A name was submitted: " + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
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
                value={this.state.value}
                onChange={this.handleChange}
              />
              <div className="box-topic">Id</div>
              <input
                className="number"
                type="text"
                name="Id"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <div className="box-topic">Categoria</div>
              <input
                className="number"
                type="text"
                name="Categoria"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <div className="box-topic">Descripcion</div>
              <input
                className="number"
                type="text"
                name="Descripcion"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <div className="box-topic">Colores</div>
              <input
                className="number"
                type="text"
                name="Colores"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <div className="box-topic">Precio</div>
              <input
                className="number"
                type="text"
                name="Precio"
                value={this.state.value}
                onChange={this.handleChange}
              />
              <button type="button" class="btn btn-outline-info">
                Agregar Producto
              </button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

export default FormularioNuevoProducto;
