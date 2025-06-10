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

    const vaciarCarrito = () => {
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                confirmButton: "btn btn-success ms-2",
                cancelButton: "btn btn-danger me-2"
            },
            buttonsStyling: false
        });
        swalWithBootstrapButtons.fire({
            title: "Desea vaciar el carrito?",
            icon: "warning",
            showCancelButton: true,
            confirmButtonText: "Aceptar",
            cancelButtonText: "Cancelar",
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                swalWithBootstrapButtons.fire({
                    title: "Carrito Vaciado!",
                    icon: "success"
                });

                setCart([]);
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire({
                    title: "Operación Cancelada",
                    icon: "error"
                });
            }
        });
    };

    return (
        <cartContext.Provider
            value={{
                cart,
                setCart,
                agregarAlCarrito,
                eliminarDelCarrito,
                incrementarCantidad,
                decrementarCantidad,
                vaciarCarrito
            }}>
            {children}
        </cartContext.Provider>
    );
};

export default CartContext;