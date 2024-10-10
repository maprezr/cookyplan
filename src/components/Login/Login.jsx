import 'react';
import { useState, useRef } from 'react';
import { Button, Form, Modal, Navbar } from 'react-bootstrap';
import icono_email from '../../assets/images/imagesHeader/envelope.svg';
import icono_password from '../../assets/images/imagesHeader/lock.svg';
import icono_users from '../../assets/images/imagesHeader/user.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import stylesHeaderyLogin from '../Header/HeaderyLogin.module.css';
import icono_carritoCompra from '../../assets/images/imagesHeader/carritoCompra.svg';


const MyLogin = () => {
    const [isActive, setIsActive] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const formLoginRef = useRef(null);
    const formRegisterRef = useRef(null);

    const handleClick = () => {
        setIsActive(true);
        setIsRegistering(false);
    };

    const handleCloseClick = () => {
        setIsActive(false);
    };

    const handleLoginSubmit = (event) => {
        event.preventDefault();
        alert("Iniciar Sesión clickeado");
    };

    const handleRegisterSubmit = (event) => {
        event.preventDefault();
        const inputs = formRegisterRef.current.querySelectorAll("input");
        const allFilled = Array.from(inputs).every(input => {
            if (input.type === "checkbox") {
                return input.checked;
            } else {
                return input.value.trim() !== "";
            }
        });

        if (allFilled) {
            alert("¡Registro exitoso!. Redirigiendo al login...");
            setIsRegistering(false);
            formRegisterRef.current.reset();
        } else {
            alert("Favor, completar los campos");
        }
    };

    const handleRegisterLinkClick = () => {
        formLoginRef.current.reset();
        setIsRegistering(true);
    };

    const handleLoginLinkClick = () => {
        formRegisterRef.current.reset();
        setIsRegistering(false);
    };

    return (
        <div className="container">
            <Navbar expand="sm" variant="dark" className={`${stylesHeaderyLogin.navbarLogin} navbar-custom fixed-top`}>
                <Navbar.Brand href="#">
                    <Navbar.Toggle aria-controls="basic-navbar-nav"></Navbar.Toggle>
                        <Navbar.Collapse className="justify-content-end">
                            <Button variant="outline-primary" onClick={handleClick} className={stylesHeaderyLogin.buttonLogin}>
                                <img 
                                    src={icono_users} 
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                    alt="Icono de usuario"
                                 />
                            </Button>
        
                            <Button variant="outline-primary" onClick={handleClick} className={stylesHeaderyLogin.buttonCarritoCompra}>
                                <img 
                                    src={icono_carritoCompra} 
                                    width="20"
                                    height="20"
                                    className="d-inline-block align-top"
                                    alt="Icono Carrito Compra"
                                 />
                                </Button>
                        </Navbar.Collapse>
                </Navbar.Brand>
            </Navbar>

            <Modal show={isActive} onHide={handleCloseClick} centered>
                <Modal.Header closeButton>
                    <Modal.Title>{isRegistering ? 'Registrarse' : 'Iniciar Sesión'}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {!isRegistering ? (
                        <Form onSubmit={handleLoginSubmit} ref={formLoginRef}>
                            
                            {/* para validar */}
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id='floatingInputCustomLoginEmail'
                                    type='email'
                                    placeholder='name@example.com'
                                    className="form-control-custom"
                                    required
                                />
                                <label htmlFor="floatingInputCustomLoginEmail" className="floating-label">
                                      <img src={icono_email} alt="correo electrónico" />
                                      <span>Correo electrónico</span>
                                </label>
                            </Form.Floating>

                            <Form.Floating className="mb-3">
                              <Form.Control
                                id="floatingInputCustomLoginPassword"
                                type="password"
                                placeholder="Contraseña"
                                className="form-control-custom"
                                required
                              />
                              <label htmlFor="floatingInputCustomLoginPassword" className="floating-label">
                                <img src={icono_password} alt="contraseña" />
                                <span>Contraseña</span>
                              </label>
                            </Form.Floating>

                            <Form.Group controlId="formBasicCheckbox" className="mb-3">
                                <Form.Check type="checkbox" label="Recordar Sesión" />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Iniciar Sesión
                            </Button>
                            <div className="text-center mt-3">
                                <p>¿No tienes cuenta? <a href="#" onClick={handleRegisterLinkClick}>Registrarse</a></p>
                            </div>
                        </Form>
                    ) : (
                        <Form onSubmit={handleRegisterSubmit} ref={formRegisterRef}>
                            
                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id='floatingInputCustomRegisUsername'
                                    type='text'
                                    placeholder='Nombre de Usuario'
                                    className="form-control-custom"
                                    required
                                />
                                <label htmlFor="floatingInputCustomRegisUsername" className="floating-label">
                                      <img src={icono_users} alt="Username" />
                                      <span>Nombre de Usuario</span>
                                </label>
                            </Form.Floating>

                            <Form.Floating className="mb-3">
                                <Form.Control
                                    id='floatingInputCustomRegisEmail'
                                    type='email'
                                    placeholder='name@example.com'
                                    className="form-control-custom"
                                    required
                                />
                                <label htmlFor="floatingInputCustomRegisEmail" className="floating-label">
                                      <img src={icono_email} alt="correo electrónico" />
                                      <span>Correo electrónico</span>
                                </label>
                            </Form.Floating>

                            <Form.Floating className="mb-3">
                              <Form.Control
                                id="floatingInputCustomRegisPassword"
                                type="password"
                                placeholder="Contraseña"
                                className="form-control-custom"
                                required
                              />
                              <label htmlFor="floatingInputCustomRegisPassword" className="floating-label">
                                <img src={icono_password} alt="contraseña" />
                                <span>Contraseña</span>
                              </label>
                            </Form.Floating>

                            <Form.Group controlId="formBasicCheckbox" className="mb-3">
                                <Form.Check type="checkbox" label="Acepto los términos y condiciones" required />
                            </Form.Group>

                            <Button variant="primary" type="submit" className="w-100">
                                Registrarse
                            </Button>
                            <div className="text-center mt-3">
                                <p>¿Ya tienes cuenta? <a href="#" onClick={handleLoginLinkClick}>Iniciar Sesión</a></p>
                            </div>
                        </Form>
                    )}
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default MyLogin;
