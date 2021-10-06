import logo from './logo.svg';
import './App.css';
import '../components/Style.css'
import GoogleLogin from 'react-google-login';

function App() {
  return (
    <section class="form">
      <div id="usercircle" class="fas fa-user-circle">              
      </div>
      <h1 id="signin">Sign In</h1>
      <div class="login">
        <div class="divuser">
          <label Id="usericon" class="fas fa-user"></label>                      
          <input type="text" id="user" name="Username" placeholder="Ingrese el correo electrónico"></input>
        </div>
        <div class="divpass">
          <label id="iconpas" class="fas fa-lock"></label>
          <input type=""text id="password" name="password" placeholder="Ingrese el password"></input>
        </div>
        <div class="divend">
          <a style={{color: 'white'}}>¿Olvido su usuario o contraseña?</a>
            <a>Registrar</a>
          <button class="buttons">
            <a>login</a>
          </button>
        </div>
      </div>     
    </section>
  );
}

export default App;
