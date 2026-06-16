import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/Cart.css';

function Cart() {
  const { cartItems, removeFromCart, increaseQty, decreaseQty, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cartItems.length === 0) {
    return (
      <div className="cart-empty">
        <h2>Your cart is empty!</h2>
        <p>Add some products to get started</p>
        <Link to="/products" className="shop-btn">Shop Now</Link>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <h1>Your Cart ({totalItems} items)</h1>

      <div className="cart-container">

        <div className="cart-items">
          {cartItems.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt={item.name} />
              <div className="cart-item-info">
                <h3>{item.name}</h3>
                <p className="cart-item-price">₹{item.price}</p>
              </div>
              <div className="cart-item-qty">
                <button onClick={() => decreaseQty(item.id)}>−</button>
                <span>{item.quantity}</span>
                <button onClick={() => increaseQty(item.id)}>+</button>
              </div>
              <div className="cart-item-total">
                ₹{item.price * item.quantity}
              </div>
              <button
                className="remove-btn"
                onClick={() => removeFromCart(item.id)}
              >
                ✕
              </button>
            </div>
          ))}
        </div>

        <div className="cart-summary">
          <h2>Order Summary</h2>
          <div className="summary-row">
            <span>Items ({totalItems})</span>
            <span>₹{totalPrice}</span>
          </div>
          <div className="summary-row">
            <span>Delivery</span>
            <span className="free">FREE</span>
          </div>
          <div className="summary-total">
            <span>Total</span>
            <span>₹{totalPrice}</span>
          </div>
          <button
            className="checkout-btn"
            onClick={() => navigate('/checkout')}
          >
            Proceed to Checkout
          </button>
          <Link to="/products" className="continue-btn">
            Continue Shopping
          </Link>
        </div>

      </div>
    </div>
  );
}

export default Cart;