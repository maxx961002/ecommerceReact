// src/components/NavBar.jsx
import CartWidget from "./CartWidget"
import logo from "../img/logoUrbair.png"

function NavBar() {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <CartWidget />
      </div>

      <div className="nav-center">
        <ul className="nav-links">
          <li>Inicio</li>
          <li>Productos</li>
          <li>Nosotros</li>
        </ul>
      </div>

      <div className="nav-right">
        <img src={logo} alt="URBAIR" className="logo" />
      </div>
    </nav>
  )
}

export default NavBar
