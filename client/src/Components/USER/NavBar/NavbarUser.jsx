import React from 'react';
import { FaHome, FaList, FaSignInAlt, FaShoppingCart } from 'react-icons/fa';
import logo from '../../../Assets/logo.png';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../../Redux/Action';

export default function NavbarUser() {
 const dispatch =useDispatch();
 const navigate = useNavigate();
 const handleLogout = () =>{
    dispatch(logout())
    navigate('/')
 }
 


 

  return (
    <div className="container text-center mt-7">
      <nav className="navbar navbar-expand-lg navbar-light bg-info">
        <div className="container-fluid">
          <a className="navbar-brand" href="#"><img src={logo} alt="Img Not Found" width="100px" class="rounded" /></a>
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
            

             
              <ul className="navbar-nav">
               
                <li className="nav-item">
                  <a className="nav-link" href='#' onClick={handleLogout}><FaSignInAlt /> Logout</a>
                </li>
              </ul>
            
        

            {/* Icon and link to the shopping cart */}
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#"><FaShoppingCart /> Carrito</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}


   