import "./../styles/pages/home/Inicio.css"
import ImagenesInicio from "../components/home/ImagenesInicio";
import Redes from "../components/home/Redes";

function Inicio() {

    return (
        <div className="containerInicio">
            <ImagenesInicio />
            <Redes />
        </div>
    )
}

export default Inicio;