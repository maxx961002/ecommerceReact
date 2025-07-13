import { Link } from "react-router-dom"
import carrito from "../img/carritoUrbair.png"
import logo from "../img/logoUrbair.png"

function NavBar() {
  return (
    <header className="navbar">
      <div className="navbar-left">
        <Link to="/carrito">
          <img src={carrito} alt="Carrito" className="carrito-icon" />
        </Link>
      </div>

     <nav className="navbar-center">
  <ul className="nav-links">
    <li><Link to="/">Inicio</Link></li>

    <li className="dropdown">
      <span>Categorías</span>
      <ul className="dropdown-menu">
        <li><Link to="/">Todas</Link></li>
        <li><Link to="/categoria/urbanas">Urbanas</Link></li>
        <li><Link to="/categoria/deportivas">Deportivas</Link></li>
      </ul>
    </li>

    <li><Link to="/nosotros">Nosotros</Link></li>
  </ul>
</nav>

      <div className="navbar-right">
        <Link to="/">
          <img src={logo} alt="Logo Urbair" className="logo-icon" />
        </Link>
      </div>
    </header>
  )
}

export default NavBar


