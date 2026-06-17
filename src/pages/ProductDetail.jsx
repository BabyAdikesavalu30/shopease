import { useParams, Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useCart } from '../context/CartContext';
import API_URL from '../api';
import '../styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`${API_URL}/products/${id}`)
      .then(res => res.json())
      .then(data => {
        setProduct(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error:', err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading product...</p>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="not-found">
        <h2>Product not found!</h2>
        <Link to="/products">Go back to Products</Link>
      </div>
    );
  }

  return (
    <div className="product-detail">
      <div className="detail-container">

        <div className="detail-image">
          <img
            src={product.image}
            alt={product.name}
            onError={e => {
              e.target.src = "https://placehold.co/400x300?text=No+Image";
            }}
          />
        </div>

        <div className="detail-info">
          <span className="detail-category">{product.category}</span>
          <h1>{product.name}</h1>
          <p className="detail-price">₹{product.price}</p>
          <p className="detail-description">{product.description}</p>

          <div className="detail-buttons">
            <button
              className="add-cart-btn"
              onClick={() => addToCart(product)}
            >
              Add to Cart
            </button>
            <Link to="/products" className="back-btn">
              Back to Products
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

export default ProductDetail;