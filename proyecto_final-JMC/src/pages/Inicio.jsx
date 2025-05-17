import "./../styles/pages/home/Inicio.css"
import ImagenesInicio from "../components/home/ImagenesInicio";
import Redes from "../components/home/Redes";
import Logo from './../components/footer/footer-content/Logo.jsx'

function Inicio() {

    return (
        <div className="containerInicio">
            <ImagenesInicio />
            <Logo />
            <Redes />
        </div>
    )
}

export default Inicio;