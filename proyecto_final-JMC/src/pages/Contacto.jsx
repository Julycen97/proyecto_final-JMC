import CardContacto from "../components/contact/card-contact/CardContacto.jsx";
import ContactForm from "../components/contact/contact-form/ContactForm.jsx";
import './../styles/pages/contact/Contacto.css'

function Contacto() {

    const redes = {
        instagram: {
            link: "https://www.instagram.com",
            icon: "bi bi-instagram",
            speech: "En nuestro perfil de instagram encontraras toda la información que necesitas, además de ofertas imperdibles."
        },
        facebook: {
            link: "https://www.facebook.com",
            icon: "bi bi-facebook",
            speech: "En nuestro perfil de facebook encontraras toda la información que necesitas, acompáñanos en nuestras redes sociales."
        },
        tiktok: {
            link: "https://www.tiktok.com",
            icon: "bi bi-tiktok",
            speech: "En nuestro perfil de tiktok encontraras toda la información que necesitas y siempre estamos compartiendo contenido interesante y divertido."
        },
        twitter: {
            link: "https://www.twitter.com",
            icon: "bi bi-twitter-x",
            speech: "En nuestro perfil de twitter encontraras toda la información que necesitas, seguinos para hacer crecer nuestra comunidad."
        }
    }

    return (
        <>
            <div>
                <div>
                    <h1>¿Necesitas ayuda?</h1>
                    <p>
                        Estamos aquí para ayudarte. Nuestros horarios de atención son de lunes a viernes de 09:00 a 18:00hs
                        mediante nuestras redes sociales Instagram, Facebook, Tiktok y Twitter, y los números de contacto detallados a continuación.
                    </p>
                </div>
                    <h3 className="borTop">Servicio al Cliente</h3>
                    <p>
                        Servicio disponible de <strong>lunes a viernes</strong> de <strong>09:00 a 18:00hs</strong> al <strong>0800-202-2025</strong>.
                    </p>
                    <div className="containerCardsContact">
                        {
                            Object.keys(redes).map((red) => (
                                <CardContacto
                                    key={red}
                                    title={red}
                                    link={redes[red].link}
                                    icon={redes[red].icon}
                                    speech={redes[red].speech}
                                />
                            ))
                        }
                    </div>
                <div>
                    <h3 className="borTop">Formulario de contacto</h3>
                    <p>Si deseas contactarnos por medio de un formulario, puedes hacerlo a continuación, a la brevedad nos pondremos en contacto contigo.</p>
                    <ContactForm />
                </div>
            </div>
        </>
    )
}

export default Contacto;