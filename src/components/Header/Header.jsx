// Header.js
import 'react';
import { Navbar, Nav, Form, Button } from 'react-bootstrap';
import logo from '../../assets/images/ImagesHeader/logo.png';
import icono_inicio from '../../assets/images/ImagesHeader/inicio.svg';
import icono_contacto from '../../assets/images/ImagesHeader/contactos.svg';
import icono_servicios from '../../assets/images/ImagesHeader/servicios.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import stylesHeaderyLogin from '../Header/HeaderyLogin.module.css';
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
      <div className={stylesHeaderyLogin.horizontalMenu}>
        <Nav>
          <Nav.Link>
            <Link to='/main'>
              <img src={icono_inicio} width="20" height="20" alt="Inicio" />
              Inicio
            </Link>
          </Nav.Link>
          <Nav.Link>
          <Link to='/add_recipe'>
            <img src={icono_servicios} width="20" height="20" alt="Servicios" />
            Agregar receta
          </Link>
          </Nav.Link>
          <Nav.Link>
          <Link to='/'>
            <img src={icono_contacto} width="20" height="20" alt="Contactos" />
            recetas
          </Link>
          </Nav.Link>
          {/* <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form> */}
        </Nav>
      </div>
    </div>
  );
}

export default Header;
