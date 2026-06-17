import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/MyOrders.css';

function MyOrders() {
  const { isLoggedIn, token } = useAuth();
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login');
      return;
    }
    fetch('http://localhost:5000/api/orders/myorders', {
      headers: {
        'Authorization': `Bearer ${token}`
      }
    })
      .then(res => res.json())
      .then(data => {
        setOrders(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error:', err);
        setLoading(false);
      });
  }, [isLoggedIn, token, navigate]);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading orders...</p>
      </div>
    );
  }

  if (orders.length === 0) {
    return (
      <div className="orders-empty">
        <h2>No orders yet!</h2>
        <p>Start shopping to see your orders here</p>
        <button onClick={() => navigate('/products')}>Shop Now</button>
      </div>
    );
  }

  return (
    <div className="orders-page">
      <h1>My Orders</h1>
      <p className="orders-count">{orders.length} order(s) found</p>

      {orders.map(order => (
        <div key={order._id} className="order-card">

          <div className="order-header">
            <div>
              <p className="order-id">Order ID: #{order._id.slice(-8).toUpperCase()}</p>
              <p className="order-date">
                {new Date(order.createdAt).toLocaleDateString('en-IN', {
                  day: 'numeric',
                  month: 'long',
                  year: 'numeric'
                })}
              </p>
            </div>
            <span className="order-status">{order.status}</span>
          </div>

          <div className="order-items">
            {order.items.map((item, index) => (
              <div key={index} className="order-item">
                <img
                  src={item.image}
                  alt={item.name}
                  onError={e => {
                    e.target.src = "https://placehold.co/60x60?text=No+Image";
                  }}
                />
                <div className="order-item-info">
                  <p className="order-item-name">{item.name}</p>
                  <p className="order-item-qty">Qty: {item.quantity}</p>
                </div>
                <p className="order-item-price">₹{item.price * item.quantity}</p>
              </div>
            ))}
          </div>

          <div className="order-footer">
            <div className="order-address">
              <p>📍 {order.deliveryDetails.address}, {order.deliveryDetails.city} - {order.deliveryDetails.pincode}</p>
            </div>
            <div className="order-total">
              Total: <strong>₹{order.totalPrice}</strong>
            </div>
          </div>

        </div>
      ))}
    </div>
  );
}

export default MyOrders;