import NavBar from "./components/header/NavBar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx';
import Productos from './pages/Productos.jsx';
import Ofertas from './pages/Ofertas.jsx';
import Contacto from './pages/Contacto.jsx';
import Login from './pages/Login.jsx';
import Carrito from './pages/Carrito.jsx';
import Footer from "./components/footer/Footer.jsx";


function App() {

  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route path="/" element={<Inicio />} />
            <Route path="/productos" element={<Productos />} />
            <Route path="/ofertas" element={<Ofertas />} />
            <Route path="/contacto" element={<Contacto />} />
            <Route path="/login" element={<Login />} />
            <Route path="/carrito" element={<Carrito />} />
          </Routes>
        </div>
      </Router>
      <Footer />
    </>
  );
}

export default App;
