import { Button, Card } from 'react-bootstrap/';
import { useNavigate } from 'react-router-dom';
import PuntajeProducto from './PuntajeProducto';
import { useContext} from 'react';
import { cartContext } from '../wrapper/CartContext';
import Swal from 'sweetalert2';
import "./../../styles/components/products/Tarjeta.css"

function Tarjeta({ props }) {
    const navegador = useNavigate();
    const { agregarAlCarrito } = useContext(cartContext);
    const isUser = sessionStorage.getItem("user") === "true";

    return (
        <Card key={props.id}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body className='bodyCard'>
                <Card.Title>{props.title}</Card.Title>
                <PuntajeProducto rating={props.rating.rate} />
                <span>${props.price}</span>
                <Button
                    variant="info"
                    onClick={() => {
                        isUser ?
                            agregarAlCarrito(props) :
                            navegador('/login')
                    }}>
                    Agregar al <i className="bi bi-cart4"></i>
                </Button>
                <Button
                    variant="secondary"
                    onClick={() => {
                        Swal.fire({
                            title: props.title,
                            text: props.description,
                            imageUrl: props.image,
                            imageWidth: "30%",
                            imageHeight: "auto",
                            imageAlt: props.title,
                            confirmButtonText: "Cerrar",
                            confirmButtonColor: "rgba(97, 218, 251, 1)"
                        });
                    }}>
                    Detalles <i className="bi bi-search"></i>
                </Button>
            </Card.Body>
        </Card>
    );
}

export default Tarjeta;