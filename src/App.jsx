import "./App.css";
import zapatillas from "./zapatillas";
import Producto from "./producto.jsx";

function App() {
  return (
    <div className="App">
      <header className="banner">
        <h1>Mi Tienda de Zapatillas</h1>
      </header>
      <main className="lista">
        {zapatillas.map(z => (
          <Producto key={z.id} data={z} />
        ))}
      </main>
    </div>
  );
}

export default App;

