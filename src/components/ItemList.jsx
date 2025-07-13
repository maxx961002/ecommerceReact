function ItemList({ items }) {
  return (
    <div className="product-grid">
      {items.map((item) => (
        <div key={item.id} className="product-card">
          <img src={item.img[0]} alt={item.nombre} className="product-img" />
          <h3>{item.nombre}</h3>
          <p>${item.precio}</p>
        </div>
      ))}
    </div>
  )
}

export default ItemList
