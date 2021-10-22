import React from "react";
import BarraNavegacion from "./NavBar";
import ContenidoInicio from "./Content-Start";
import "./../css/StyleProduct.css";
import Productos from "../Product/NavProduct";
import Secciones from "../Product/Boxes/SeccionsProduct";
import Buscar from "../Product/Boxes/SearchProduct";
import RegistrarProducto from "../Product/Boxes/RegisterProduct";
import ListaProductos from "../Product/Boxes/ListProduct";
import Ventas from "../Sales/Ventas";
import FormNewSale from "../Sales/Boxes/FormNewSale";
import BuscarVenta from "../Sales/Boxes/SearchSale";
import ListarVentas from "../Sales/Boxes/ListSale";
import RegistrarVenta from "../Sales/Boxes/RegisterSale";
import Usuarios from "../Users/Users";
import ListaUsuarios from "../Users/Boxes/ListUser";

function Cabecera () {

    return(
        <div>
                      
            <BarraNavegacion/>

            
        </div>
    )
};


export default Cabecera;