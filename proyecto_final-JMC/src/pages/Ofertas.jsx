import SeccionTarjetas from "../components/products/SeccionTarjetas";
import { useEffect, useState } from 'react';
import { Spinner, Alert } from "react-bootstrap";
import './../styles/pages/offert/Ofertas.css'

function Ofertas() {
    const [productos, setProductos] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const url = 'https://fakestoreapi.com/products?limit=19';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProductos(data.filter((prod) => prod.price < 100.00));
                setCargando(false);
            })
            .catch(error => {
                const [show, setShow] = useState(true);

                if (show) {
                    return (
                        <Alert variant="danger" onClose={() => setShow(false)} dismissible>
                            <Alert.Heading>Vaya! Hubo un error</Alert.Heading>
                            <p>
                                Te recomiendo revisar tu conexion a internet, la URL a la que intentas
                                acceder es {url} y el error es {error}
                            </p>
                        </Alert>
                    );
                }
            });
    }, []);

    if (cargando || productos.length === 0) {
        return (
            <div className="text-center spinnerCentral">
                <Spinner animation="border"
                    role="status"
                    variant="info"
                    style={
                        {
                            width: '15rem',
                            height: '15rem',
                            fontSize: '2rem'
                        }}>
                </Spinner>
                <span>Cargando...</span>
            </div>
        );
    }

    return (
        <div className="containerOfertas">
            <div className="containerProductos">
                <h1>TODO POR MENOS DE $100</h1>
                <SeccionTarjetas key={"ofertas"} titulo={""} props={productos} />
            </div>
        </div>
    );
}

export default Ofertas;