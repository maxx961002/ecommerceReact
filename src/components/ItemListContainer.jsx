import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import ItemList from "./ItemList"
import zapatillas from "../data/zapatillas"

function ItemListContainer({ greeting }) {
  const [productos, setProductos] = useState([])
  const { categoriaId } = useParams()

  useEffect(() => {
    const obtenerProductos = new Promise((resolve) => {
      setTimeout(() => {
        if (categoriaId) {
          resolve(zapatillas.filter((zapa) => zapa.categoria === categoriaId))
        } else {
          resolve(zapatillas)
        }
      }, 500)
    })

    obtenerProductos.then((res) => setProductos(res))
  }, [categoriaId])

  return (
    <section>
      <div className="video-banner">
        <video autoPlay muted loop>
          <source src="/img/video.mp4" type="video/mp4" />
          Tu navegador no soporta el video.
        </video>
      </div>


      <h3>{greeting}</h3>
      <ItemList items={productos} />
    </section>
  )
}

export default ItemListContainer


