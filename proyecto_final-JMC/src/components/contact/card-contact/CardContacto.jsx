import { Card, Button } from 'react-bootstrap';
import './../../../styles/components/contact/CardContacto.css'

function CardContacto({ link, icon, title, speech }) {

    return (
        <Card className='tarjetaContacto' border="info" style={{ width: '18rem' }}>
            <Card.Header><i className={icon}></i></Card.Header>
            <Card.Body>
                <Card.Title>{title.toUpperCase()}</Card.Title>
                <Card.Text>{speech}</Card.Text>
                <Button variant="primary" href={link} target='_blank'>Ir al chat</Button>
            </Card.Body>
        </Card>
    )
}

export default CardContacto;