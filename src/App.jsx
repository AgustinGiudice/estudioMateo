//Generales
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

//Componentes
import { Navbar } from "./components/header/Navbar";

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
      </main>
    </BrowserRouter>
  );
}

export default App;
