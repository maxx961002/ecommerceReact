import cartIcon from "../../img/carritoUrbair.png"
import "./CartWidget.css"

function CartWidget() {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Carrito" className="cart-icon" />
      <span className="cart-count">2</span>
    </div>
  )
}

export default CartWidget
