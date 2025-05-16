import { Navigate } from "react-router-dom";

function LoginProtegido({ children }) {
    const user = sessionStorage.getItem("user") != "true";

    return user ? children : <Navigate to="/administracion" />
}

export default LoginProtegido;