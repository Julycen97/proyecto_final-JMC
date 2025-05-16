import SeccionTarjetas from "../components/products/SeccionTarjetas";
import { useEffect, useState } from 'react';
import { Spinner } from "react-bootstrap";
import "./../styles/pages/products/Productos.css"

function Productos() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);
    const [cargando, setCargando] = useState(true);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=19')
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
                setCargando(false);
            })
            .catch(error => console.log(error));
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

                <div>
                    <span>Ordenar por Precio</span>
                    <ol type="I">
                        <li>De mayor a menor</li>
                        <li>De menor a mayor</li>
                    </ol>
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