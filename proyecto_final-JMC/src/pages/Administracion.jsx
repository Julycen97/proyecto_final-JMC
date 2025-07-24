import { Table, Button } from "react-bootstrap";
import ReactDOM from 'react-dom/client';
import { useContext } from 'react';
import { productsAdminContext } from '../components/wrapper/ProductsAdmin';
import Swal from "sweetalert2";
import CargarProducto from "../components/administration/CargarProducto";

function Administracion() {
    const { products, setProducts, agregarProductosAdmin, editarProductoAdmin, eliminarProductoAdmin } = useContext(productsAdminContext);

    const addUpdateProduct = (titulo, producto = null) => {
        const tempDiv = document.createElement('div');

        Swal.fire({
            title: titulo,
            html: tempDiv,
            showConfirmButton: false,

            didOpen: () => {
                const root = ReactDOM.createRoot(tempDiv);
                root.render(
                    <CargarProducto
                        producto={producto}
                        onCancelarModal={() => {
                            Swal.fire({
                                title: "Operación Cancelada!",
                                icon: "error",
                                showConfirmButton: false,
                                timer: 1200
                            });
                        }}
                        onConfirmarModal={() => {
                            if (producto.id) {
                                editarProductoAdmin(producto);
                            }
                            else {
                                agregarProductosAdmin(producto);
                            }

                            Swal.fire({
                                title: "Operación Exitosa!",
                                icon: "success",
                                showConfirmButton: false,
                                timer: 1200
                            });
                        }} />
                );
                tempDiv._reactRoot = root;
            },

            didClose: () => {
                if (tempDiv._reactRoot) {
                    tempDiv._reactRoot.unmount();
                    tempDiv._reactRoot = null;
                }
            }
        });
    }

    const deleteProduct = (id) => {
        Swal.fire({
            title: "Desea eliminar el producto?",
            icon: "warning",
            customClass: {
                confirmButton: "btn btn-success",
                cancelButton: "btn btn-danger"
            },
            buttonsStyling: false,
            showCancelButton: true,
            confirmButtonText: "Eliminar"
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire({
                    title: "Eliminado!",
                    icon: "success",
                    showConfirmButton: false,
                    timer: 1200
                });

                eliminarProductoAdmin(id);
            }
        });
    }

    return (
        <>
            <h4>Administracion de productos propios</h4>

            <Button variant="success" onClick={() => addUpdateProduct("Agregar Producto", {})}>Agegar Producto</Button>
            <Table responsive="sm" style={{ textAlign: 'center' }}>
                <thead>
                    <tr>
                        <th>Cod. Producto</th>
                        <th>Título</th>
                        <th>Categoria</th>
                        <th>Precio</th>
                        <th colSpan={2}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.length > 0 ?
                            products.map((prod) => {
                                return (
                                    <tr key={prod.id}>
                                        <td id="cod">{prod.id}</td>
                                        <td>{prod.title}</td>
                                        <td>{prod.category}</td>
                                        <td>${prod.price}</td>
                                        <td>
                                            <Button variant="success" onClick={() => addUpdateProduct("Editar Producto", prod)}>Editar</Button>
                                        </td>
                                        <td>
                                            <Button variant="danger" onClick={() => deleteProduct(prod.id)}>Eliminar</Button>
                                        </td>
                                    </tr>
                                );
                            })
                            :
                            <td colSpan={6}>No hay productos cargados</td>
                    }
                </tbody>
            </Table>
        </>
    );
}

export default Administracion;