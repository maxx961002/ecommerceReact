// src/Producto.jsx

function Producto({ data }) {
  const primeraImagen = new URL(`./assets/img/${data.imgs[0]}`, import.meta.url).href;

  return (
    <div className="producto">
      <img src={primeraImagen} alt={data.nombre} />
      <h3>{data.nombre}</h3>
      <p>Precio: ${data.precio}</p>
    </div>
  );
}

export default Producto;

