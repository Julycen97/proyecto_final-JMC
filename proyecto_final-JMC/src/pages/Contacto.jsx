import CardContacto from "../components/contact/card-contact/CardContacto.jsx";
import './../styles/pages/contact/Contacto.css'

function Contacto() {
    return (
        <>
            <div>
                <artiticle>
                    <h1>¿Necesitas ayuda?</h1>
                    <p>
                        Estamos aquí para ayudarte. Nuestros horarios de atención son de lunes a viernes de 09:00 a 18:00hs
                        mediante nuestras redes sociales Facebook e Instagram, y los números de contacto detallados a continuación.
                    </p>
                </artiticle>
                    <h3>Servicio al Cliente</h3>
                    <p>
                        Servicio disponible de <strong>lunes a viernes</strong> de <strong>09:00 a 18:00hs</strong>.
                    </p>
                    <div className="containerCardsContact">
                        <CardContacto/>
                        <CardContacto/>
                        <CardContacto/>
                        <CardContacto/>
                    </div>
                <artiticle>

                </artiticle>

                <artiticle>

                </artiticle>
            </div>
        </>
    )
}

export default Contacto;