//Generales
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Componentes
import { Navbar } from "./components/header/Navbar";
import { Footer } from "./components/footer/Footer";
//vistas
import Home from "./pages/home/Home";
import Abogados from "./pages/abogados/Abogados";

function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/abogado/:abogado" element={<Abogados />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
