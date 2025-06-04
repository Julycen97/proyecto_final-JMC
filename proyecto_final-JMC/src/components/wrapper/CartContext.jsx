import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const cartContext = createContext();

function CartContext({ children }) {
    const [cart, setCart] = useState([]);

    const agregarAlCarrito = (producto) => {
        setCart((prevCart) => {
            const productoExistente = prevCart.find((item) => item.id === producto.id);

            if (productoExistente) {
                return prevCart.map((item) =>
                    item.id === producto.id ? { ...item, cantidad: item.cantidad + 1 } : item
                );
            } else {
                return [...prevCart, { ...producto, cantidad: 1 }];
            }
        });

        Swal.fire({
            title: "Producto agregado al carrito",
            icon: "success",
            showConfirmButton: false,
            timer: 1200
        })
    };

    const eliminarDelCarrito = (id) => {
        setCart((prevCart) => prevCart.cantidad > 1 ? prevCart.map((item) => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item) : prevCart.filter((item) => item.id !== id));
    };

    const incrementarCantidad = (id) => {
        setCart((prevCart) => prevCart.map((item) => item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item));
    };

    const decrementarCantidad = (id) => {
        if (cart.find((item) => item.id === id).cantidad === 1) {
            eliminarDelCarrito(id);
        } else {
            setCart((prevCart) => prevCart.map((item) => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item));
        }
    };

    return (
        <cartContext.Provider
            value={{
                cart,
                setCart,
                agregarAlCarrito,
                eliminarDelCarrito,
                incrementarCantidad,
                decrementarCantidad
            }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContext;