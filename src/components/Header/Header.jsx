// Header.js
import 'react';
import { Navbar, Nav, Container, Form, Button } from 'react-bootstrap';
import logo from '../../assets/images/imagesHeader/logo.png';
import icono_inicio from '../../assets/images/imagesHeader/inicio.svg';
import icono_contacto from '../../assets/images/imagesHeader/contactos.svg';
import icono_servicios from '../../assets/images/imagesHeader/servicios.svg';
import 'bootstrap/dist/css/bootstrap.min.css';

import '../../styles/Header/Header_y_Login.css'; // Archivo CSS personalizado

function Header() {
  return (
    <div>    
      <Navbar expand="lg" variant="dark" className="navbarHeader fixed-top">
        <Navbar.Brand href="#">
          <img
            src={logo}
            width="70"
            height="70"
            className="d-inline-block align-top"
            alt="Logo"
          />
        </Navbar.Brand>
          <span className='slogan-text'>• Sabores que inspiran, momentos que recuerdan •</span>
      </Navbar>
      <div className="horizontal-menu">
        <Nav>
          <Nav.Link href="#">
            <img src={icono_inicio} width="20" height="20" alt="Inicio" />
            Inicio
          </Nav.Link>
          <Nav.Link href="#">
            <img src={icono_servicios} width="20" height="20" alt="Servicios" />
            Servicios
          </Nav.Link>
          <Nav.Link href="#">
            <img src={icono_contacto} width="20" height="20" alt="Contactos" />
            Contactos
          </Nav.Link>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
        </Form>
        </Nav>
      </div>

      
      
      <Container className="mt-5">
        <h1>Bienvenido a Mi Sitio</h1>
        <p>Este es un ejemplo sencillo utilizando React-Bootstrap.</p>
      </Container>
    </div>
  );
}

export default Header;
