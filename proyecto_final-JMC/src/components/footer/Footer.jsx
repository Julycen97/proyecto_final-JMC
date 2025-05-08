import "./../../styles/components/footer/Footer.css"
import Datos from "./footer-content/Datos";
import Logo from "./footer-content/Logo";

function Footer(){

    return(
        <footer className="footer">
            <Datos />
            <Logo />
        </footer>
    )
}

export default Footer;