import { createContext, useState } from "react";
import Swal from 'sweetalert2';

export const productsAdminContext = createContext();

function ProductsAdmin({ children }) {
    const [products, setProducts] = useState([]);
    const [ultimoID, setUltimoID] = useState(0);

    const agregarProductosAdmin = (producto) => {
        setUltimoID(ultimoID + 1);
        producto.id = ultimoID;
        producto.category = "products admin";
        setProducts([...products, producto]);

        Swal.fire({
            title: "Producto agregado",
            icon: "success",
            showConfirmButton: false,
            timer: 1200
        })
    };

    const editarProductoAdmin = (producto) => {
        setProducts((prevProducts) => prevProducts.map((item) => item.id === producto.id ? producto : item));

        Swal.fire({
            title: "Producto editado",
            icon: "success",
            showConfirmButton: false,
            timer: 1200
        })
    };

    const eliminarProductoAdmin = (id) => {
        setProducts((prevProducts) => prevProducts.filter((item) => item.id !== id));
    };

    return (
        <productsAdminContext.Provider
            value={{
                products,
                setProducts,
                agregarProductosAdmin,
                editarProductoAdmin,
                eliminarProductoAdmin
            }}>
            {children}
        </productsAdminContext.Provider>
    );
};

export default ProductsAdmin;