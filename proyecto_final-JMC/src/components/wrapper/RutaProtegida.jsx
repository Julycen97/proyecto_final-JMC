import { Navigate } from "react-router-dom";

function RutaProtegida({ children }) {
    const user = localStorage.getItem("user") === "true";

    return user ? children : <Navigate to="/login" />
}

export default RutaProtegida;