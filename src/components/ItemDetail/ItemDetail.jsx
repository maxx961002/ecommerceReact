import { useParams } from "react-router-dom"
import zapatillas from "../../data/zapatillas"
import { useEffect, useState } from "react"
import "./ItemDetail.css"

function ItemDetail() {
  const { productoId } = useParams()

  const [producto, setProducto] = useState(null)
  const [imgPrincipal, setImgPrincipal] = useState("")
  const [cantidad, setCantidad] = useState(1)

  useEffect(() => {
    const obtenerProducto = new Promise((resolve) => {
      setTimeout(() => {
        const resultado = zapatillas.find(
          (zapa) => zapa.id === parseInt(productoId)
        )
        resolve(resultado)
      }, 500)
    })

    obtenerProducto.then((res) => {
      if (res) {
        setProducto(res)
        setImgPrincipal(res.img[0])
      } else {
        setProducto(null)
      }
    })
  }, [productoId])

  const sumar = () => {
    if (cantidad < producto.stock) {
      setCantidad(cantidad + 1)
    }
  }

  const restar = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1)
    }
  }

  if (!producto) return <h2>Producto no encontrado</h2>

  return (
    <div className="detalle-container">
      <div className="miniaturas">
        {producto.img.map((url, i) => (
          <img
            key={i}
            src={url}
            alt="mini"
            className="miniatura"
            onClick={() => setImgPrincipal(url)}
          />
        ))}
      </div>

      <div className="imagen-principal">
        <img src={imgPrincipal} alt={producto.nombre} />
      </div>

      <div className="info-producto">
        <h2>{producto.nombre}</h2>
        <p className="precio">${producto.precio}</p>
        <p className="talle">Talles disponibles:</p>
        <select>
          <option>Elegí tu talle</option>
          <option>39</option>
          <option>40</option>
          <option>41</option>
          <option>42</option>
        </select>

        <div className="contador">
          <button onClick={restar}>-</button>
          <span>{cantidad}</span>
          <button onClick={sumar}>+</button>
        </div>

        <div className="botones">
          <button className="comprar">Comprar</button>
          <button className="carrito">
            Agregar al carrito ({cantidad})
          </button>
        </div>
      </div>
    </div>
  )
}

export default ItemDetail


