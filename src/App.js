import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import './components/css/App.css';

//login
import Cabecera from "./components/Header/Header";
import Productos from "./components/Product/NavProduct";
import Ventas from "./components/Sales/Ventas";
import Usuarios from "./components/Users/Users";
//Cabecera
import ContenidoInicio from "./components/Header/Content-Start";
//Productos
import Secciones from "./components/Product/Boxes/SeccionsProduct";
import BuscarProducto from "./components/Product/Boxes/SearchProduct";
import RegistrarProducto from "./components/Product/Boxes/RegisterProduct";
import ListaProductos from "./components/Product/Boxes/ListProduct";
import FormularioNuevoProducto from "./components/Product/Boxes/FormRegisterProduct";
import BarraNavegacion from "./components/Header/NavBar";
//Ventas
import ActualizarVenta from "./components/Sales/Boxes/UpdateSale";
import BuscarVenta from "./components/Sales/Boxes/SearchSale";
import RegistrarVenta from "./components/Sales/Boxes/RegisterSale";
import ListarVentas from "./components/Sales/Boxes/ListSale";
//Usuarios
/* import ActualizarUsuario from "./components/Users/Boxes/UpdateUser"; */
import ListaUsuarios from "./components/Users/Boxes/ListUser";
import ActualizarUsuario from "./components/Users/Boxes/UpdateUser";




function App() {
return (
  <Switch>
    <Route exact path={'/'}>
      <Cabecera/>
      <ContenidoInicio/>
    </Route>
    <Route exact path={'/Ventas'}>
      <Cabecera/>
      <Ventas />
    </Route>
    <Route exact path={'/ListarVentas'}>
      <Cabecera/>
      <Ventas />
      <ListarVentas/>
    </Route>
    <Route exact path={'/RegistrarVenta'}>
      <Cabecera/>
      <Ventas />
      <RegistrarVenta/>
    </Route>
    <Route exact path={'/BuscarVenta'}>
      <Cabecera/>
      <Ventas />
      <BuscarVenta/>
    </Route>


    
    <Route exact path={'/Productos'}>
      <Cabecera/>
      <Productos/>
    </Route>
    <Route exact path={'/ListaProductos'}>
      <Cabecera/>
      <Productos/>
      <ListaProductos/>
    </Route>
    <Route exact path={'/RegistrarProducto'}>
      <Cabecera/>
      <Productos/>
      <RegistrarProducto/>
    </Route>
    <Route exact path={'/BuscarProducto'}>
      <Cabecera/>
      <Productos/>
      <BuscarProducto/>
    </Route>


    <Route exact path={'/Usuarios'}>
      <Cabecera />
      <Usuarios />
    </Route>
    <Route exact path={'/ListaUsuarios'}>
      <Cabecera/>
      <Usuarios/>
      <ListaUsuarios/>
    </Route>
    <Route exact path={'/ActualizarUsuario'}>
      <Cabecera />
      <Usuarios />
      <ActualizarUsuario/>
    </Route>
  </Switch>
  
  );
}

export default App;
