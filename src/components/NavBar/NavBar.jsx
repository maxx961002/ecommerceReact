import { Link } from "react-router-dom"
import carrito from "../../img/carritoUrbair.png"
import logo from "../../img/logoUrbair.png"
import { useState } from "react"
import "./NavBar.css"

function NavBar() {
  const [open, setOpen] = useState(false)

  const toggleDropdown = () => {
    setOpen(!open)
  }

  const closeDropdown = () => {
    setOpen(false)
  }

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

          <li className="dropdown" onClick={toggleDropdown}>
            <span className="nav-link">Categorías</span>
            {open && (
              <ul className="dropdown-menu">
                <li><Link to="/" onClick={closeDropdown}>Todas</Link></li>
                <li><Link to="/categoria/urbanas" onClick={closeDropdown}>Urbanas</Link></li>
                <li><Link to="/categoria/deportivas" onClick={closeDropdown}>Deportivas</Link></li>
              </ul>
            )}
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
