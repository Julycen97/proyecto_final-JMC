import { Button, Card, Modal } from 'react-bootstrap/';
import { useState } from 'react';
import "./../../styles/components/products/Tarjeta.css"

function Tarjeta({ props }) {

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Card>
            <Card.Img variant="top" src={props.image} />
            <Card.Body className='bodyCard'>
                <Card.Title>{props.title}</Card.Title>
                <span>${props.price}</span>
                <Button variant="info">Agregar al <i className="bi bi-cart4"></i></Button>
                <Button variant="secondary" onClick={handleShow}>Detalles <i className="bi bi-search"></i></Button>
                
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title className='h5'>{props.title}</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Card.Img variant="top" src={props.image} />
                        <Card.Text>{props.description}</Card.Text>
                        <span>${props.price}</span>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                    </Modal.Footer>
                </Modal>
            </Card.Body>
        </Card>
    );
}

export default Tarjeta;