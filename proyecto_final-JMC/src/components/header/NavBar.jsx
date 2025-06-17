import { Link, useNavigate } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './../../styles/components/header/NavBar.css'

function NavBar() {
    const navegador = useNavigate();
    const isUser = sessionStorage.getItem("user") === "true";
    const cerrarSesion = () => {
        sessionStorage.removeItem("user");
        navegador('/login');
    }

    window.addEventListener("scroll", function () {
        const nav = document.querySelector(".bg-dark");
        
        if (window.scrollY > 0) {
            nav.classList.add("scrolled");
        } else {
            nav.classList.remove("scrolled");
        }
    })

    return (
        <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">
                    <img
                        alt="JC"
                        src="./src/assets/react.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{' '}
                    JC Tienda
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <div>
                            <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                            <Nav.Link as={Link} to="/productos">Productos</Nav.Link>
                            <Nav.Link as={Link} to="/ofertas">Ofertas</Nav.Link>
                            <Nav.Link as={Link} to="/contacto">Contacto</Nav.Link>
                            {isUser &&
                                <Nav.Link as={Link} to="/administracion">Administración</Nav.Link>
                            }
                        </div>
                        <div>
                            {isUser ?
                                <Nav.Link as={Link} to="/login" onClick={cerrarSesion}><i className="bi bi-box-arrow-in-left"></i> Cerrar Sesion</Nav.Link> :
                                <Nav.Link as={Link} to="/login"><i className="bi bi-box-arrow-in-right"></i> Iniciar Sesión</Nav.Link>
                            }
                            <Nav.Link as={Link} to="/carrito"><i className="bi bi-cart4"></i></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;