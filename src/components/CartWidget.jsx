import cartIcon from "../img/carritoUrbair.png";

function CartWidget() {
  return (
    <div className="cart-widget">
      <img src={cartIcon} alt="Carrito" className="cart-icon" />
      <span className="cart-count">2</span>
    </div>
  );
}

export default CartWidget;
