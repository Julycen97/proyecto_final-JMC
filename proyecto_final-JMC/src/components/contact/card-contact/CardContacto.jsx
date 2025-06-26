import { Card, Button } from 'react-bootstrap';
import './../../../styles/components/contact/CardContacto.css'

function CardContacto() {

    return (
        <Card className='tarjetaContacto' border="info" style={{ width: '18rem' }}>
            <Card.Header>Header</Card.Header>
            <Card.Body>
                <Card.Title>Info Card Title</Card.Title>
                <Card.Text>
                    Some quick example text to build on the card title and make up the
                    bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go to chat</Button>
            </Card.Body>
        </Card>
    )
}

export default CardContacto;