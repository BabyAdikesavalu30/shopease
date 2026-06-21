import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import '../styles/Checkout.css';

function Checkout() {
  const { cartItems, totalItems, totalPrice, clearCart } = useCart();
  const { isLoggedIn, token } = useAuth();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    city: '',
    pincode: ''
  });

  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: '' });
  }

  function validate() {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = 'Name is required';
    if (!form.email.trim()) newErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(form.email)) newErrors.email = 'Enter a valid email';
    if (!form.phone.trim()) newErrors.phone = 'Phone is required';
    else if (form.phone.length !== 10) newErrors.phone = 'Enter a valid 10 digit number';
    if (!form.address.trim()) newErrors.address = 'Address is required';
    if (!form.city.trim()) newErrors.city = 'City is required';
    if (!form.pincode.trim()) newErrors.pincode = 'Pincode is required';
    else if (form.pincode.length !== 6) newErrors.pincode = 'Enter a valid 6 digit pincode';
    return newErrors;
  }

  async function handlePlaceOrder() {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }

    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setLoading(true);
    try {
      const res = await fetch('http://localhost:5000/api/orders', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`
        },
        body: JSON.stringify({
          items: cartItems.map(item => ({
            product: item._id,
            name: item.name,
            price: item.price,
            quantity: item.quantity,
            image: item.image
          })),
          totalPrice,
          deliveryDetails: form
        })
      });

      await res.json();

      if (!res.ok) {
        alert('Order failed! Please try again.');
        setLoading(false);
        return;
      }

      clearCart();
      navigate('/order-confirmation');
    } catch (err) {
      console.log('Order error:', err);
      alert('Something went wrong!');
      setLoading(false);
    }
  }

  if (cartItems.length === 0) {
    return (
      <div className="checkout-empty">
        <h2>No items to checkout!</h2>
        <button onClick={() => navigate('/products')}>Shop Now</button>
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="checkout-empty">
        <h2>Please login to checkout!</h2>
        <button onClick={() => navigate('/login')}>Login Now</button>
      </div>
    );
  }

  return (
    <div className="checkout-page">
      <h1>Checkout</h1>

      <div className="checkout-container">

        <div className="checkout-form">
          <h2>Delivery Details</h2>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={form.name}
              onChange={handleChange}
              className={errors.name ? 'input-error' : ''}
            />
            {errors.name && <span className="error-msg">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              value={form.email}
              onChange={handleChange}
              className={errors.email ? 'input-error' : ''}
            />
            {errors.email && <span className="error-msg">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="tel"
              name="phone"
              placeholder="Enter 10 digit phone number"
              value={form.phone}
              onChange={handleChange}
              className={errors.phone ? 'input-error' : ''}
            />
            {errors.phone && <span className="error-msg">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter your full address"
              value={form.address}
              onChange={handleChange}
              className={errors.address ? 'input-error' : ''}
              rows={3}
            />
            {errors.address && <span className="error-msg">{errors.address}</span>}
          </div>

          <div className="form-row">
            <div className="form-group">
              <label>City</label>
              <input
                type="text"
                name="city"
                placeholder="City"
                value={form.city}
                onChange={handleChange}
                className={errors.city ? 'input-error' : ''}
              />
              {errors.city && <span className="error-msg">{errors.city}</span>}
            </div>

            <div className="form-group">
              <label>Pincode</label>
              <input
                type="text"
                name="pincode"
                placeholder="6 digit pincode"
                value={form.pincode}
                onChange={handleChange}
                className={errors.pincode ? 'input-error' : ''}
              />
              {errors.pincode && <span className="error-msg">{errors.pincode}</span>}
            </div>
          </div>
        </div>

        <div className="checkout-summary">
          <h2>Order Summary</h2>

          <div className="summary-items">
            {cartItems.map(item => (
              <div key={item._id} className="summary-item">
                <img src={item.image} alt={item.name} />
                <div className="summary-item-info">
                  <p className="summary-item-name">{item.name}</p>
                  <p className="summary-item-qty">Qty: {item.quantity}</p>
                </div>
                <p className="summary-item-price">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="summary-divider" />

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
            className="place-order-btn"
            onClick={handlePlaceOrder}
            disabled={loading}
          >
            {loading ? 'Placing order...' : 'Place Order'}
          </button>
        </div>

      </div>
    </div>
  );
}

export default Checkout;