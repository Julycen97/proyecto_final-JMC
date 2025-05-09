import Carousel from 'react-bootstrap/Carousel';

function ImagenesInicio() {

    const estiloTexto = {
        color: "white",
        fontWieght: "bolder",
        textShadow: "1px 0 1px black, -1px 0 1px black, 0 1px 1px black, 0 -1px 1px black"
    }

    return (
        <Carousel data-bs-theme="dark" style={{width: '75%'}}>
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{width: '35vw', margin: 'auto'}}
                    src="./../src/assets/atencion.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5 style={estiloTexto}>Brindamos la mejor atención</h5>
                    <p style={estiloTexto}>Reconocidos mundialmente por nuestra experiencia, atención y calidad.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{width: '35vw', margin: 'auto'}}
                    src="./../src/assets/mundo.png"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5 style={estiloTexto}>Sedes en 12 paises</h5>
                    <p style={estiloTexto}>Con una fuerte presencia internacional, incluyendo paises como Argentina, Colombia y Brasil entre otros.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    style={{width: '35vw', margin: 'auto'}}
                    src="./../src/assets/proveedores.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5 style={estiloTexto}>Proveedores de calidad</h5>
                    <p style={estiloTexto}>Contamos con los mejores proveedores del mercado para ofrecerle los mejores productos.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImagenesInicio;