import React from 'react';
import { FaHome, FaList, FaSignInAlt, FaShoppingCart } from 'react-icons/fa';
import logo from '../../Assets/logo-1.jpeg';

export default function Navbar() {
  return (
    <div className="container text-center mt-7">
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#" ><img src={logo} alt="Img Not Found" width="100px" /></a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#"><FaHome /> Inicio</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  <FaList /> Categorias 
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">tv</a></li>
                  <li><a className="dropdown-item" href="#">hogar</a></li>
                  <li><a className="dropdown-item" href="#">cel</a></li>
                  <li><a className="dropdown-item" href="#">moda</a></li>
                  <li><a className="dropdown-item" href="#">otros</a></li>
                </ul>
              </li>
            </ul>
            
            {/* Icono y enlace al carrito de compras */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#"><FaShoppingCart /> Carrito</a>
              </li>
            </ul>

            {/* Icono y enlace para iniciar sesión */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="/login"><FaSignInAlt /> Iniciar Sesión</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
