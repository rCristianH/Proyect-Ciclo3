import "../css/StyleRegistro.css";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import React from "react";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Registro = (props) => {
  const [valorNombre, CambiarValorNombre] = useState("");
  const [valorApellidos, CambiarValorApellidos] = useState("");
  const [valorCorreo, CambiarValorCorreo] = useState("");
  const [valorvalida, CambiarValorValida] = useState("");
  const [valorFecha, CambiarValorFecha] = useState("2021-10-07");
  const [valorPerfil] = useState("Vendedor");
  const [valorEstado, CambiarValorEstado] = useState("No Autorizado");

  const buttonClick = (props) => {
    if (
      valorNombre === "" &&
      valorApellidos === "" &&
      valorCorreo === "" &&
      valorvalida === ""
    ) {
      alert("Los campos no pueden estar vacíos");
      /*document.getElementById('obligNom').style.display = 'inline-block';
            document.getElementById('obligApe').style.display = 'inline-block';
            document.getElementById('obligCorreo').style.display = 'inline-block';
            document.getElementById('obligVal').style.display = 'inline-block';*/
    } else if (valorNombre === "") {
      alert("El campo Nombre esta vacío");
      //document.getElementById('obligNom').style.display = 'inline-block';
      return false;
    } else if (valorApellidos === "") {
      alert("El campo Apellidos esta vacío");
      //document.getElementById('obligApe').style.display = 'inline-block';
      return false;
    } else if (valorCorreo === "") {
      alert("El campo Correo esta vacío");
      //document.getElementById('obligCorreo').style.display = 'inline-block';
      return false;
    } else if (valorvalida === "") {
      alert("El campo Validar Correo esta vacío");
      //document.getElementById('obligVal').style.display = 'inline-block';
      return false;
    } else {
      var expReg =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
      var esValido = expReg.test(valorCorreo);
      if (esValido == true) {
        if (valorCorreo == valorvalida) {
          let newUser = {
            Nombres: valorNombre,
            Apellidos: valorApellidos,
            Correo: valorCorreo,
            Perfil: valorPerfil,
            Estado: valorEstado,
            Date: new Date(),
          };
          //const datoEmail = (props) =>{ newUser}
          console.log(newUser);
          alert(
            "Su registro ha sido exitosamente, esta a la espera de ser autorizado"
          );
          return newUser;
        } else {
          //document.getElementById('Valida').style.display = 'inline-block';
        }
      } else {
        alert("El correo no es valido");
        //document.getElementById('obligCorreo').style.display = 'inline-block';
      }
    }
  };

  return (
    <section className="form">
      <div className="usercircle2">
        <FontAwesomeIcon icon={faUserCircle} />
      </div>
      <div className={"Regis"}>
        <div className="campo">
          <label id="Nombre">
            Nombre<a className={valorNombre === "" ? "oblig" : "oculto"}>*</a>
          </label>
          <input
            className="textbox"
            type={"text"}
            name={"Nombre"}
            value={valorNombre}
            placeholder={"Ingrese su nombre"}
            onChange={(event) => {
              CambiarValorNombre(event.target.value);
            }}
          />
        </div>
        <div className="campo">
          <label>
            Apellidos
            <a className={valorApellidos === "" ? "oblig" : "oculto"}>*</a>
          </label>
          <input
            className="textbox"
            type={"text"}
            name={"Apellidos"}
            value={valorApellidos}
            placeholder={"Ingrese sus apellidos"}
            onChange={(event) => {
              CambiarValorApellidos(event.target.value);
            }}
          />
        </div>
        <div className="campo">
          <label for="email">
            Correo Electrónico
            <a className={valorCorreo === "" ? "oblig" : "oculto"}>*</a>
          </label>
          <input
            id={"email"}
            className="textbox"
            type={"email"}
            required
            name={"Correo"}
            value={valorCorreo}
            placeholder={"Ingrese correo Gmail"}
            onChange={(event) => {
              CambiarValorCorreo(event.target.value);
            }}
          />
        </div>
        <div className="campo">
          <label>
            Validar Correo
            <a className={valorvalida === "" ? "oblig" : "oculto"}>*</a>
          </label>
          <input
            className="textbox"
            type={"text"}
            value={valorvalida}
            placeholder={"Ingrese de nuevo el correo"}
            onChange={(event) => {
              CambiarValorValida(event.target.value);
            }}
          />
          <a className={valorCorreo === valorvalida ? "oculto" : "valida"}>
            El valor ingresado no coincide con su correo
          </a>
        </div>
        <div style={{ textAlign: "center" }}>
          <button type={"button"} className="btnlink" onClick={buttonClick}>
            Registrar
          </button>
          <Link to={"/"}>
            <button className="btnlink">Regresar</button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Registro;
