import React from 'react'
import { NavLink } from 'react-router-dom'

import img1 from '../img/header-simpsons.jpg'
import 'bootstrap/dist/css/bootstrap.min.css';


export default function Header(props){
    return(
        <div>
             <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container-fluid">
          <img src={img1} alt=""/>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-link"> 
                <NavLink exact className='btn btn-secondary' to="/">Inicio</NavLink>
              </li>
              <li class="nav-link">
                <NavLink exact className='btn btn-secondary' to="/Blog">Blog</NavLink>
              </li>
              <li class="nav-link">
              <NavLink exact className='btn btn-secondary' to="/Formulario">Contacto</NavLink>
              </li>
            </ul>
            <form class="d-flex">
              <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button class="btn btn-secondary" type="submit">Busqueda</button>
            </form>
          </div>
        </div>
      </nav>
           </div>
    );
}