import { Link } from "react-router-dom"
import "./Item.css"

function Item({ item }) {
  return (
    <div className="item-card">
      <img src={item.img[0]} alt={item.nombre} />
      <h3>{item.nombre}</h3>
      <p>${item.precio}</p>
      <Link to={`/producto/${item.id}`} className="ver-mas">Ver más</Link>
    </div>
  )
}

export default Item


