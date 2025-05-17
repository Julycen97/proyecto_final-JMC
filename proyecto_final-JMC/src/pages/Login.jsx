import { Form, Button } from 'react-bootstrap/';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Swal from 'sweetalert2';
import "./../styles/pages/login/Login.css"

function Login() {
    const navegador = useNavigate();
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const cargarUsuario = (email, pass) => {
        if ((!!email && !!pass)) {
            if ((email.includes("@") && email.includes(".com"))) {
                sessionStorage.setItem("user", "true");
                sessionStorage.setItem("email", email);
                sessionStorage.setItem("pass", pass);

                navegador('/administracion');
            }
            else {
                Swal.fire({
                    icon: "error",
                    title: "Email Incorrecto",
                    text: "Por favor verifique su correo",
                    confirmButtonText: "Aceptar"
                });
            }
        }
        else {
            Swal.fire({
                icon: "error",
                title: "Campos Incompletos",
                text: "Por favor complete todos los campos",
                confirmButtonText: "Aceptar"
            });
        }
    }

    return (
        <div className='containerLogin'>
            <div className='loguearse'>
                <h4>Iniciar Sesión</h4>
                <Form>
                    <Form.Group className="mb-3" controlId="formGroupEmail">
                        <Form.Label>Correo</Form.Label>
                        <Form.Control required type="email" placeholder="Ingrese su correo" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formGroupPassword">
                        <Form.Label>Contraseña</Form.Label>
                        <Form.Control required autoComplete='off' type="password" placeholder="Ingrese su contraseña" value={pass} onChange={(e) => setPass(e.target.value)} />
                    </Form.Group>
                    <Button variant="info" className='btnIniciarSesion' onClick={() => cargarUsuario(email, pass)}>Iniciar Sesión</Button>
                </Form>
            </div>
        </div>
    );
}

export default Login;