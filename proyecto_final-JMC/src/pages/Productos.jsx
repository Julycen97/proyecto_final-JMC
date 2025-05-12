import SeccionTarjetas from "../components/products/SeccionTarjetas";
import "./../styles/pages/products/Productos.css"
import { useEffect, useState } from 'react';

function Productos() {
    const [productos, setProductos] = useState([]);
    const [categorias, setCategorias] = useState([]);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products?limit=19')
            .then((response) => response.json())
            .then((data) => {
                setProductos(data);
            })
            .catch(error => console.log(error));
    }, []);

    useEffect(() => {
        //condicional evita llamadas innecesarias para setCategorias
        if (productos.length > 0) {
            setCategorias([...new Set(productos.map((prod) => prod.category))]);
        }
    }, [productos]);

    return (
        <div>
            <h4>Nuestros Productos</h4>
            {categorias.map((cat) => {
                const prodXcat = productos.filter((prod) => prod.category === cat);

                return (
                    <SeccionTarjetas key={cat} titulo={cat} props={prodXcat} />
                );
            })}
        </div>
    );
}

export default Productos;