import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Home, { Teste } from './Home'
import Inicio from './Inicio'

import Catalog from './pages/Catalog/Catalog';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="inicio" element={<Inicio />} />
          <Route path="teste" element={<Teste />} />
          <Route path="catalogo" element={<Catalog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
