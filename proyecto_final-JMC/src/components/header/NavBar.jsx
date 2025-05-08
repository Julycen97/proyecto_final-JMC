import { Link } from 'react-router-dom'
import { Container, Nav, Navbar } from 'react-bootstrap';
import './../../styles/components/header/NavBar.css'

function NavBar() {
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
                        </div>
                        <div>
                            {/* ver como lograr que, al iniciar sesion, cambie el logo y texto */}
                            <Nav.Link as={Link} to="/login"><i className="bi bi-box-arrow-in-right"></i> Iniciar Sesión</Nav.Link>
                            <Nav.Link as={Link} to="/carrito"><i className="bi bi-cart4"></i></Nav.Link>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default NavBar;