import { Table } from "react-bootstrap";

function recuperarCarrito(){
    return JSON.parse(sessionStorage.getItem("carrito"));
}

function carritoVacio(){
    const carroVacio = [{
    }]

    return carroVacio;
}

function Carrito() {

    const carrito =  recuperarCarrito() || carritoVacio();

    return (
        <Table responsive="sm">
            <thead>
                <tr>
                    <th>Cod. Producto</th>
                    <th>Título</th>
                    <th>Categoria</th>
                    <th>Precio</th>
                    <th>Cantidad</th>
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {
                    carrito.map((prod) => {
                        return (
                            <tr key={prod.id}>
                                <td>{prod.id}</td>
                                <td>{prod.title}</td>
                                <td>{prod.category}</td>
                                <td>${prod.price}</td>
                                <td>{prod.cantidad}</td>
                                <td>
                                    <button className="btn btn-success">+</button>
                                    <button className="btn btn-danger">-</button>
                                </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </Table>
    )
}

export default Carrito;