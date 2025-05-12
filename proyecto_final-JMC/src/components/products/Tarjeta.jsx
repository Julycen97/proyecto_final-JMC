import { Button, Card } from 'react-bootstrap/';
import "./../../styles/components/products/Tarjeta.css"

function Tarjeta({props}) {
    return (
        <Card style={{
            width: '15rem',
            maxHeight: '21rem',
            minHeight: '16rem',
            margin: '0',
            padding: '0',
            borderColor: 'rgba(97, 218, 251, 1)',
            boxShadow: '2px 0 4px rgba(97, 218, 251, 1)'
        }}>
            <Card.Img variant="top"
                style={{
                    width: '20%',
                    height: '20%',
                    margin: 'auto',
                    marginTop: '5px',
                    padding: '0'
                }}
                src={props.image} />
            <Card.Body className='bodyCard'>
                <Card.Title>{props.title}</Card.Title>
                <Card.Text>{props.description}</Card.Text>
                <span>${props.price}</span>
                <Button variant="primary">Agregar al <i className="bi bi-cart4"></i></Button>
            </Card.Body>
        </Card>
    );
}

export default Tarjeta;