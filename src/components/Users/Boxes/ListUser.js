import React from "react";
import { Link } from "react-router-dom";

function ListaUsuarios() {
  return(
    <div>
      <div class="recent-sales box">
        <div class="title">Listado de Usuarios</div>
        <div class="sales-details">
          <ul class="details">
            <li class="topic">Nombre</li>
            <li>
              <p >02 Jan 2021</p>
            </li>
            <li>
              <p>02 Jan 2021</p>
            </li>
            <li>
              <p>02 Jan 2021</p>
            </li>
            <li>
              <p>02 Jan 2021</p>
            </li>
            <li>
              <p>02 Jan 2021</p>
            </li>
            <li>
              <p>02 Jan 2021</p>
            </li>
            <li>
              <p>02 Jan 2021</p>
            </li>
            <li>
              <p>02 Jan 2021</p>
            </li>
            <li>
              <p>02 Jan 2021</p>
            </li>
          </ul>
          <ul class="details">
            <li class="topic">Email</li>
            <li>
              <p>Alex Doe</p>
            </li>
            <li>
              <p>David Mart</p>
            </li>
            <li>
              <p>Roe Parter</p>
            </li>
            <li>
              <p>Diana Penty</p>
            </li>
            <li>
              <p>Martin Paw</p>
            </li>
            <li>
              <p>Doe Alex</p>
            </li>
            <li>
              <p>Aiana Lexa</p>
            </li>
            <li>
              <p>Rexel Mags</p>
            </li>
            <li>
              <p>Tiana Loths</p>
            </li>
          </ul>
          <ul class="details">
            <li class="topic">Rol</li>
            <li>
              <p>Delivered</p>
            </li>
            <li>
              <p>Pending</p>
            </li>
            <li>
              <p>Returned</p>
            </li>
            <li>
              <p>Delivered</p>
            </li>
            <li>
              <p>Pending</p>
            </li>
            <li>
              <p>Returned</p>
            </li>
            <li>
              <p>Delivered</p>
            </li>
            <li>
              <p>Pending</p>
            </li>
            <li>
              <p>Delivered</p>
            </li>
          </ul>
          <ul class="details">
            <li class="topic">Estado</li>
            <li>
              <p>$204.98</p>
            </li>
            <li>
              <p>$24.55</p>
            </li>
            <li>
              <p>$25.88</p>
            </li>
            <li>
              <p>$170.66</p>
            </li>
            <li>
              <p>$56.56</p>
            </li>
            <li>
              <p>$44.95</p>
            </li>
            <li>
              <p>$67.33</p>
            </li>
            <li>
              <p>$23.53</p>
            </li>
            <li>
              <p>$46.52</p>
            </li>
          </ul>
        </div>
        <div class="hello">
          <Link font="bold">
            <b>Mostar Todos</b>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default ListaUsuarios;