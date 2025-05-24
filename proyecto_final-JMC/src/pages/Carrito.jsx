import { Table } from "react-bootstrap";

function Carrito() {

    const carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
    const isUser = sessionStorage.getItem("user") === "true";

    return (
        <Table responsive="sm" style={{textAlign: 'center'}}>
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
                {isUser ?
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
                    }):
                    <tr>
                        <td colSpan="6">Debe <a href="/login">iniciar sesión</a> para agregar productos al carrito</td>
                    </tr>
                }
            </tbody>
        </Table>
    )
}

export default Carrito;