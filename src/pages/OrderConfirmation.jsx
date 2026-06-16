import { useNavigate } from 'react-router-dom';
import '../styles/OrderConfirmation.css';

function OrderConfirmation() {
  const navigate = useNavigate();

  return (
    <div className="confirmation-page">
      <div className="confirmation-box">

        <div className="confirmation-icon">✓</div>
        <h1>Order Placed Successfully!</h1>
        <p>Thank you for shopping with ShopEase.</p>
        <p>Your order has been confirmed and will be delivered soon.</p>

        <div className="confirmation-details">
          <p>📦 Estimated delivery: <strong>3-5 business days</strong></p>
          <p>📧 Confirmation sent to your email</p>
        </div>

        <button
          className="continue-shopping-btn"
          onClick={() => navigate('/products')}
        >
          Continue Shopping
        </button>

      </div>
    </div>
  );
}

export default OrderConfirmation;