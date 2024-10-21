import 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from '../../assets/images/ImagesHeader/logo.png';
import icono_inicio from '../../assets/images/ImagesHeader/inicio.svg';
import icono_recetas from '../../assets/images/ImagesHeader/recetas.svg';
import icono_servicios from '../../assets/images/ImagesHeader/servicios.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import stylesHeaderyLogin from '../Header/headeryLogin.module.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div>
      <Navbar expand="lg" variant="dark" className={`${stylesHeaderyLogin.navbarHeader} fixed-top`}>
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
        <span className={stylesHeaderyLogin.sloganText}>• Sabores que inspiran, momentos que recuerdan •</span>
      </Navbar>

      {/* Ajusta este div que contiene el menú horizontal */}
      <div className={`${stylesHeaderyLogin.horizontalMenu} d-flex`}>
        <Nav className="ml-auto"> {/* Cambiado para alinear los links a la izquierda */}
          <Nav.Link as={Link} to='/main' className={stylesHeaderyLogin.navLink}>
          <img src={icono_inicio} width="20" height="20" alt="Inicio" />Inicio</Nav.Link>
          <Nav.Link as={Link} to='/add_recipe' className={stylesHeaderyLogin.navLink}><img src={icono_servicios} width="20" height="20" alt="Servicios" />Agregar receta</Nav.Link>
          <Nav.Link as={Link} to='/recetas' className={stylesHeaderyLogin.navLink}><img src={icono_recetas} width="20" height="20" alt="Recetas" />Recetas</Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default Header;