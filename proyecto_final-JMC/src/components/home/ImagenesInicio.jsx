import Carousel from 'react-bootstrap/Carousel';
import "./../../styles/pages/home/ImagenesInicio.css"

function ImagenesInicio() {

    return (
        <Carousel data-bs-theme="dark" style={{width: '75%'}}>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="./../src/assets/atencion.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h5>Brindamos la mejor atención</h5>
                    <p>Reconocidos mundialmente por nuestra experiencia, atención y calidad.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="./../src/assets/mundo.png"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h5>Sedes en 12 paises</h5>
                    <p>Con una fuerte presencia internacional, incluyendo paises como Argentina, Colombia y Brasil entre otros.</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block"
                    src="./../src/assets/proveedores.png"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h5>Proveedores de calidad</h5>
                    <p>Contamos con los mejores proveedores del mercado para ofrecerle los mejores productos.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default ImagenesInicio;