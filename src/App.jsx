import './App.css'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { Routes, Route } from 'react-router-dom'



function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a URBAIR!" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer saludo="Filtrado por categoría" />} />
        <Route path="/producto/:productoId" element={<div>Detalle del producto</div>} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer />} />
      </Routes>
    </>
  )
}

export default App
