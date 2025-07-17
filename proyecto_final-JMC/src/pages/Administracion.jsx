import { Table, Button } from "react-bootstrap";
import ReactDOM from 'react-dom/client';
import { useState } from "react";
import Swal from "sweetalert2";
import CargarProducto from "../components/administration/CargarProducto";

function Administracion() {
    let productosAdmin = localStorage.getItem("productosAdmin") != null ? JSON.parse(localStorage.getItem("productosAdmin")) : [];


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

                productosAdmin = productosAdmin.filter(p => p.id !== id);
            }
        });
    }

    const producto = {
        id: 1,
        titulo: "asdasd",
        descripcion: "asdasd",
        precio: 2,
        rating: 2
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
                        <th>Cantidad</th>
                        <th colSpan={2}>Acciones</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        {
                            productosAdmin.length > 0 ?
                                productosAdmin.map((prod) => {
                                    return (
                                        <tr key={prod.id}>
                                            <td id="cod">{prod.id}</td>
                                            <td>{prod.titulo}</td>
                                            <td>{prod.categoria}</td>
                                            <td>${prod.precio.toFixed(2)}</td>
                                            <td>{prod.cantidad}</td>
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
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default Administracion;