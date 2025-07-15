import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<ItemListContainer saludo="¡Bienvenido a URBAIR!" />} />
        <Route path="/categoria/:categoriaId" element={<ItemListContainer saludo="Filtrado por categoría" />} />
        <Route path="/producto/:productoId" element={<ItemDetail />} />
        <Route path="*" element={<h2>404 - Página no encontrada</h2>} />
      </Routes>
    </>
  )
}

export default App
