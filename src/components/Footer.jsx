import { Link } from 'react-router-dom';
import '../styles/Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-brand">
          <h2>ShopEase</h2>
          <p>Your one stop destination for premium men's products at the best prices.</p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/products">Products</Link>
          <Link to="/cart">Cart</Link>
        </div>

        <div className="footer-categories">
          <h4>Categories</h4>
          <Link to="/products">Electronics</Link>
          <Link to="/products">Footwear</Link>
          <Link to="/products">Clothing</Link>
          <Link to="/products">Bags</Link>
          <Link to="/products">Accessories</Link>
        </div>

        <div className="footer-contact">
          <h4>Contact</h4>
          <p>📧 support@shopease.com</p>
          <p>📞 +91 98765 43210</p>
          <p>📍 Chennai, Tamil Nadu</p>
        </div>

      </div>

      <div className="footer-bottom">
        <p>© 2025 ShopEase. All rights reserved. Made with ❤️ by Baby P A</p>
      </div>
    </footer>
  );
}

export default Footer;