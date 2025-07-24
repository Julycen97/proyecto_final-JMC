import { Form, Button } from 'react-bootstrap/';
import InputGroup from 'react-bootstrap/InputGroup';

function CargarProducto({ producto = {}, onCancelarModal, onConfirmarModal }) {
    const tieneProp = producto ? false : true;

    const onSubmit = (e) => {
        e.preventDefault();

        onConfirmarModal();
    }

    return (
        <Form>
            <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>Título</Form.Label>
                <Form.Control type="text" placeholder="Título" defaultValue={tieneProp ? producto.titulo : ''} ></Form.Control>
                <Form.Label>Precio</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text>$</InputGroup.Text>
                    <Form.Control aria-label="Amount (to the nearest dollar)" defaultValue={tieneProp ? producto.precio : ''} ></Form.Control>
                </InputGroup>
                <Form.Label>Descripción</Form.Label>
                <Form.Control as="textarea" placeholder='Descripción' defaultValue={tieneProp ? producto.descripcion : ''} ></Form.Control>
                <Form.Label>Valoración</Form.Label>
                <InputGroup className="mb-3">
                    <InputGroup.Text>★</InputGroup.Text>
                    <Form.Control type='number' placeholder='Valoración' min={1} max={5} defaultValue={tieneProp ? producto.rating : ''} ></Form.Control>
                </InputGroup>
            </Form.Group>
            <div>
                <Button variant="success" onClick={(e) => onSubmit(e)}>{!tieneProp ? 'Agregar' : 'Editar'}</Button>
                <Button variant="danger" onClick={onCancelarModal}>Cancelar</Button>
            </div>
        </Form>
    );
}

export default CargarProducto;