import React from "react";
import BarraNavegacion from "./NavBar";
import ContenidoInicio from "./Content-Start";
import "./../css/StyleProduct.css";
import Productos from "../Product/NavProduct";
import Secciones from "../Product/Boxes/SeccionsProduct";
import Buscar from "../Product/Boxes/SearchProduct";
import RegistrarProducto from "../Product/Boxes/RegisterProduct";
import ListaProductos from "../Product/Boxes/ListProduct";

function Cabecera () {

    return(
        <div>
            <header>            
                <BarraNavegacion/>
                <RegistrarProducto/>
            </header>
        </div>
    )
};


export default Cabecera;