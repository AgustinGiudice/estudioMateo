//Generales
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Componentes
import { Navbar } from "./components/header/Navbar";
import { Footer } from "./components/footer/Footer";
//vistas
import Home from "./pages/home/Home";

function App() {
  return (
    <BrowserRouter>
      <main className="container">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </main>
    </BrowserRouter>
  );
}

export default App;
