import logo from './logo.svg';
import { Route, Switch } from 'react-router-dom';
import { Link } from 'react-router-dom';
import '../components/App.css';
import '../components/Estilos/Style.css'
import GoogleLogin from 'react-google-login';
import Registro from '../components/Registro';
import datoEmail from '../components/Registro';

function App() {
  const respuestaGoogle=(respuesta)=>{
    console.log(respuesta);
    console.log(respuesta.profileObj);
    
    for(const dato in respuesta.profileObj){
        console.log(`${dato}:${respuesta.profileObj[dato]}`)
        if(`${dato}` === 'email'){
          console.log(`${respuesta.profileObj[dato]}`);
          console.log(datoEmail);
          /*if(`${respuesta.profileObj[dato]}` == Registro(newUser){
            console.log("Bienvenido")
          }
          else{
            console.log("No eres bienvenido")
          }*/
        }
    }

  }
  return (
    <Switch>
      <Route exact path={'/'}>
        <section class="form">
          <div id="usercircle" class="fas fa-user-circle">              
          </div>
          <h1 id="signin">Bienvenido</h1>
          <div className="login">
          <GoogleLogin
          clientId="563173451966-f98vrgpdk1jtcoql1e267lo8f1nj0jtg.apps.googleusercontent.com"
          //buttonText="Login"
          render={renderProps => (
            <button className="buttons" onClick={renderProps.onClick} disabled={renderProps.disabled}><a Id="usericon" class="fas fa-user"></a><span>Iniciar Sesión</span></button>
          )}
          onSuccess={respuestaGoogle}
          onFailure={respuestaGoogle}
          cookiePolicy={'single_host_origin'}   
          />  
          <Link to={'/Registro'} style={{textDecoration: 'none'}}>  
          <button type={'button'} className="buttons">
            <a Id={'regisicon'} className="fas fa-user-plus"></a>Registrar
          </button>
          </Link>
        </div>          
    </section>
    </Route>
      <Route exact path={'/Registro'}>
          <Registro />
    </Route>
    </Switch>
  );
}

export default App;
