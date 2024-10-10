// Footer.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../components/Footer/footer.css'


export const Footer = () => {
  return (
    <footer className="bg-dark text-white mt-5">
      <Container fluid className="py-3">
        <Row>
          <Col md={4} className="text-center text-md-left">
            <h5>Nosotros</h5>
            <p>
              
            </p>
          </Col>
          <Col md={4} className="text-center my-3 my-md-0">
            <h5>Contacto</h5>
            <ul className="list-unstyled">
              <li>Email: info@test.com</li>
              <li>Telefono: +123 456 789</li>
            </ul>
          </Col>
          <Col md={4} className="text-center text-md-right">
            <h5>Siguenos</h5>
            <ul className="list-inline">
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="fab fa-facebook"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" className="text-white">
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
        <Row>
          <Col className="text-center pt-3">
            <p>&copy; {new Date().getFullYear()} cook&plan. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};