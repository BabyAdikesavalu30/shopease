import { Link } from 'react-router-dom';

function ProductCard({ product }) {
  return (
    <div className="product-card">
      <img
  src={product.image}
  alt={product.name}
  onError={e => {
    e.target.src = "https://placehold.co/400x300?text=No+Image";
  }}
/>
      <div className="product-info">
        <span className="product-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="product-price">₹{product.price}</p>
        <Link to={`/products/${product.id}`} className="view-btn">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default ProductCard;