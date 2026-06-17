import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ProductCard from '../components/ProductCard';
import API_URL from '../api';
import '../styles/Products.css';

function Products() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('default');
  const [searchQuery, setSearchQuery] = useState('');

  const location = useLocation();

  // Fetch products from backend
  useEffect(() => {
    fetch(`${API_URL}/products`)
      .then(res => res.json())
      .then(data => {
        setProducts(data);
        setLoading(false);
      })
      .catch(err => {
        console.log('Error fetching products:', err);
        setLoading(false);
      });
  }, []);

  // Read search query from URL
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const q = params.get('search');
    if (q) {
      setSearchQuery(q);
      setSelectedCategory('All');
    } else {
      setSearchQuery('');
    }
  }, [location.search]);

  // Get unique categories
  const categories = ['All', ...new Set(products.map(p => p.category))];

  // Filter by search
  const searched = searchQuery
    ? products.filter(p =>
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase())
      )
    : products;

  // Filter by category
  const filtered = selectedCategory === 'All'
    ? searched
    : searched.filter(p => p.category === selectedCategory);

  // Sort
  const sorted = [...filtered].sort((a, b) => {
    if (sortOrder === 'low') return a.price - b.price;
    if (sortOrder === 'high') return b.price - a.price;
    return 0;
  });

  if (loading) {
    return (
      <div className="loading">
        <div className="spinner"></div>
        <p>Loading products...</p>
      </div>
    );
  }

  return (
    <div className="products-page">

      <div className="products-header">
        <h1>
          {searchQuery
            ? `Search results for "${searchQuery}"`
            : 'All Products'}
        </h1>
        <p>{sorted.length} products found</p>
      </div>

      {searchQuery && (
        <button
          className="clear-search-btn"
          onClick={() => setSearchQuery('')}
        >
          ✕ Clear Search
        </button>
      )}

      <div className="products-toolbar">
        <div className="category-filters">
          {categories.map(category => (
            <button
              key={category}
              className={selectedCategory === category
                ? 'filter-btn active'
                : 'filter-btn'}
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <select
          className="sort-select"
          value={sortOrder}
          onChange={e => setSortOrder(e.target.value)}
        >
          <option value="default">Sort by: Default</option>
          <option value="low">Price: Low to High</option>
          <option value="high">Price: High to Low</option>
        </select>
      </div>

      {sorted.length === 0 ? (
        <div className="no-results">
          <h2>No products found!</h2>
          <p>Try searching with a different keyword</p>
        </div>
      ) : (
        <div className="products-grid">
          {sorted.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
}

export default Products;