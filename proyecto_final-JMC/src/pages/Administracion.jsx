import { Table, Button } from "react-bootstrap";
import ReactDOM from 'react-dom/client';
import Swal from "sweetalert2";
import CargarProducto from "../components/administration/CargarProducto";

function Administracion() {

    const addUpdateProduct = (producto = null) => {
        const tempDiv = document.createElement('div');

        Swal.fire({
            title: 'Cargar Producto',
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

            <Button variant="success" onClick={addUpdateProduct}>Agegar Producto</Button>
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
                        <td>asdasd</td>
                        <td>asdasdsa</td>
                        <td>asdasdsa</td>
                        <td>asdasdsa</td>
                        <td>2</td>
                        <td>
                            <Button variant="warning" title="Editar" onClick={() => addUpdateProduct(producto)}><i className="bi bi-gear"></i></Button>
                            <Button variant="danger" title="Eliminar"><i className="bi bi-trash3"></i></Button>
                        </td>
                    </tr>
                </tbody>
            </Table>
        </>
    );
}

export default Administracion;