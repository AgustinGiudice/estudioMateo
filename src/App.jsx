//Generales
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Componentes
import { Navbar } from "./components/header/Navbar";
import { Footer } from "./components/footer/Footer";
//vistas
import Home from "./pages/home/Home";
import Derechos from "./pages/derechos/Derechos";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <main className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/derechos/:derecho" element={<Derechos />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
