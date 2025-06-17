import Tarjeta from "./Tarjeta";
import "./../../styles/components/products/SeccionTarjetas.css"

function SeccionTarjetas({titulo, props}) {

    return (
        <section className="containerTarjetas" id={titulo}>
            <h3>{titulo.charAt(0).toUpperCase() + titulo.slice(1)}</h3>
            {props.map((prop) => <Tarjeta key={prop.id} props={prop} />)}
        </section>
    );
};

export default SeccionTarjetas;