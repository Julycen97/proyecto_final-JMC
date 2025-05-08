import NavBar from "./components/header/NavBar"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Inicio from './pages/Inicio.jsx'


function App() {

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Inicio />} />
        </Routes>
      </div>
    </Router>

  )
}

export default App
