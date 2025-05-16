import { Button, Card, Modal } from 'react-bootstrap/';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PuntajeProducto from './PuntajeProducto';
import Swal from 'sweetalert2';
import "./../../styles/components/products/Tarjeta.css"

function actualizarCarrito() {
    let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    let nuevoCarro = [];

    sessionStorage.removeItem("carrito");

    for (let i = 0; i < carrito.length; i++) {
        let contador = 0;
        let indice;

        if (nuevoCarro != null) {
            for (let e = 0; e < nuevoCarro.length; e++) {
                if (carrito[i].id == nuevoCarro[e].id) {
                    contador++;
                    indice = e;
                }
            }

            if (contador == 0) {
                nuevoCarro.push(carrito[i]);
            }
            else {
                nuevoCarro[indice].cantidad += 1;
            }
        }
    }

    sessionStorage.setItem("carrito", JSON.stringify(nuevoCarro));
}

function agregarCarrito({ producto }) {
    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];

    carrito.push(producto);

    carrito[carrito.length - 1].cantidad = 1;

    sessionStorage.setItem("carrito", JSON.stringify(carrito));

    Swal.fire({
        title: "Producto agregado al carrito",
        icon: "success",
        draggable: true,
        confirmButtonText: "Aceptar",
        confirmButtonColor: "rgba(97, 218, 251, 1)"
    })

    actualizarCarrito();
}

function Tarjeta({ props }) {
    const [show, setShow] = useState(false);
    const navegador = useNavigate();
    const isUser = sessionStorage.getItem("user") === "true";

    return (
        <Card key={props.id}>
            <Card.Img variant="top" src={props.image} />
            <Card.Body className='bodyCard'>
                <Card.Title>{props.title}</Card.Title>
                <PuntajeProducto rating={props.rating.rate} />
                <span>${props.price}</span>
                {/* ONCLICK CON TERNARIO, SI NO ESTA LOGUEADO REDIRECCIONA A LOGIN, SINO DEJA AGREGAR AL CARRITO */}
                <Button
                    variant="info"
                    onClick={() => {
                        isUser ?
                            agregarCarrito({ producto: props }) :
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