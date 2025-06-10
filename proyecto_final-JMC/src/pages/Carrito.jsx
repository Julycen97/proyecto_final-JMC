import { Table } from "react-bootstrap";
import { useContext } from "react";
import { cartContext } from "../components/wrapper/CartContext";
import './../styles/pages/cart/Carrito.css'

function Carrito() {
    const { cart, incrementarCantidad, decrementarCantidad, vaciarCarrito } = useContext(cartContext);
    const isUser = sessionStorage.getItem("user") === "true";

    return (
        <>
            <Table responsive="sm" style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Cod. Producto</th>
                        <th>Título</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th>Cantidad</th>
                        <th colSpan={2}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {isUser ? (cart.length > 0 ?
                        cart.map((prod) => {
                            return (
                                <tr key={prod.id}>
                                    <td id="cod">{prod.id}</td>
                                    <td>{prod.title}</td>
                                    <td>{prod.category}</td>
                                    <td>${prod.price.toFixed(2)}</td>
                                    <td>{prod.cantidad}</td>
                                    <td>
                                        <button className="btn btn-success" onClick={() => incrementarCantidad(prod.id)}>+</button>
                                    </td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => decrementarCantidad(prod.id)}>-</button>
                                    </td>
                                </tr>
                            )
                        }) :
                        <tr>
                            <td colSpan="6">El carrito esta vacio</td>
                        </tr>) :
                        <tr>
                            <td colSpan="6">Debe <a href="/login">iniciar sesión</a> para agregar productos al carrito</td>
                        </tr>
                    }
                </tbody>
            </Table>

            {cart.length > 0 &&
                <div>
                    <div className="d-flex justify-content-center pb-3">
                        <h2 name="total">Total: ${cart.reduce((acc, prod) => { return acc + prod.price * prod.cantidad }, 0).toFixed(2)}</h2>
                    </div>
                    <div className="d-flex justify-content-center pb-3">
                        <button className="btn btn-danger" onClick={() => vaciarCarrito()}>Vaciar Carrito</button>
                    </div>
                </div>
            }
        </>
    )
}

export default Carrito;