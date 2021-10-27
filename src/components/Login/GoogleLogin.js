import GoogleLogin from "react-google-login";
import { Link } from "react-router-dom";
import "../css/Style.css";
import newUser from "./Registro";
import {
  faUserCircle,
  faUser,
  faUserPlus,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Google(props) {
  const respuestaGoogle = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileObj);

    for (const dato in respuesta.profileObj) {
      console.log(`${dato}:${respuesta.profileObj[dato]}`);
      console.log(newUser);
      if (`${dato}` === "email") {
        console.log(`${respuesta.profileObj[dato]}`);
        //console.log(datoEmail);
      }
    }
  };

  return (
    <section class="form">
      <div className="usercircle">
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
      <h1 id="signin">Bienvenido</h1>
      <div className="login">
        <GoogleLogin
          clientId="563173451966-f98vrgpdk1jtcoql1e267lo8f1nj0jtg.apps.googleusercontent.com"
          //buttonText="Login"
          render={(renderProps) => (
            <button
              className="buttons"
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
            >
              <a className="usericon">
                <FontAwesomeIcon icon={faUser} />
              </a>
              {/* <Link className="usericon">
                <FontAwesomeIcon icon={faUser} />
              </Link> */}
              <span>Iniciar Sesión</span>
            </button>
          )}
          onSuccess={respuestaGoogle}
          onFailure={respuestaGoogle}
          cookiePolicy={"single_host_origin"}
        />
        <Link to={"/Registro"} style={{ textDecoration: "none" }}>
          <button type={"button"} className="buttons">
            <a className="regisicon">
              <FontAwesomeIcon icon={faUserPlus} />
            </a>
            {/* <Link className="regisicon">
              <FontAwesomeIcon icon={faUserPlus} />
            </Link> */}
            Registrar
          </button>
        </Link>
      </div>
    </section>
  );
}

export default Google;
