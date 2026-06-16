import { useParams, Link } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';
import '../styles/ProductDetail.css';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === parseInt(id));

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
          <img src={product.image} alt={product.name}
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