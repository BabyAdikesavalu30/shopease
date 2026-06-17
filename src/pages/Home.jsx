import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import API_URL from '../api';
import '../styles/Home.css';

function Home() {
  const [featured, setFeatured] = useState([]);

  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => setFeatured(data.slice(0, 4)))
      .catch(err => console.log('Error:', err));
  }, []);

  return (
    <div className="home">

      <section className="hero">
        <div className="hero-content">
          <p className="hero-tag">🛍️ Premium Men's Collection</p>
          <h1>Shop Smart.<br />Live Better.</h1>
          <p className="hero-sub">
            Discover top quality men's products across Electronics,
            Clothing, Footwear, Bags and Accessories.
          </p>
          <div className="hero-buttons">
            <Link to="/products" className="hero-btn">Shop Now</Link>
            <Link to="/products" className="hero-btn-outline">
              View All Products
            </Link>
          </div>
          <div className="hero-stats">
            <div className="stat">
              <h3>32+</h3>
              <p>Products</p>
            </div>
            <div className="stat">
              <h3>5</h3>
              <p>Categories</p>
            </div>
            <div className="stat">
              <h3>Free</h3>
              <p>Delivery</p>
            </div>
          </div>
        </div>
      </section>

      <section className="featured">
        <h2>Featured Products</h2>
        <p className="featured-sub">Handpicked top products just for you</p>
        <div className="products-grid">
          {featured.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
        <div className="view-all">
          <Link to="/products" className="view-all-btn">
            View All Products →
          </Link>
        </div>
      </section>

    </div>
  );
}

export default Home;