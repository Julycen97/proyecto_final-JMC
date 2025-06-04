import { createContext, useState } from "react";
import Swal from 'sweetalert2';


const cartContext = createContext();

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
        })

        Swal.fire({
            title: "Producto agregado al carrito",
            icon: "success",
            showConfirmButton: false,
            timer: 1200
        })
    };

    const eliminarDelCarrito = (id) => {
        setCart((prevCart) => prevCart.cantida > 1 ? prevCart.map((item) => item.id === id ? { ...item, cantidad: item.cantidad - 1 } : item) : prevCart.filter((item) => item.id !== id));
    };

    return (
        <cartContext.Provider value={{ cart, setCart, agregarAlCarrito, eliminarDelCarrito }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContext