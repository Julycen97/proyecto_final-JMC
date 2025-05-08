import "./../../styles/components/footer/Footer.css";
import Datos from "./footer-content/Datos";
import Logo from "./footer-content/Logo";

function Footer(){

    const year = new Date().getFullYear();

    return(
        <footer className="footer">
            <Datos />
            <Logo />
            <p>&copy; {year} - Todos los derechos reservados </p>
        </footer>
    );
};

export default Footer;