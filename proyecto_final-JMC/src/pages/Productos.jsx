import SeccionTarjetas from "../components/products/SeccionTarjetas";
import { useEffect, useState } from 'react';
import { Spinner, Alert } from "react-bootstrap";
import "./../styles/pages/products/Productos.css"

function Productos() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        const url = 'https://fakestoreapi.com/products?limit=19';
        fetch(url)
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
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

    useEffect(() => {
        //condicional evita llamadas innecesarias para setCategorias
        if (productos.length > 0) {
            setCategorias([...new Set(productos.map((prod) => prod.category))]);
        }
    }, [productos]);

    if (cargando || productos.length === 0 || categorias.length === 0) {
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
        <div className="containerPrincipal">
            <div className="filtros">
                <div>
                    <span>Filtrar por Categoria</span>
                    <ul>
                        {
                            categorias.map((cat) => {
                                return (
                                    <li key={cat}>{cat}</li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>

            <div className="containerProductos">
                {categorias.map((cat) => {
                    const prodXcat = productos.filter((prod) => prod.category === cat);

                    return (
                        <SeccionTarjetas key={cat} titulo={cat} props={prodXcat} />
                    );
                })}
            </div>
        </div>
    );
}

export default Productos;