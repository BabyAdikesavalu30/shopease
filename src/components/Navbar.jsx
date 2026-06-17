import { NavLink, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import '../styles/Navbar.css';

function Navbar() {
  const { totalItems } = useCart();
  const { isLoggedIn, user, logout } = useAuth();
  const [search, setSearch] = useState('');
  const navigate = useNavigate();

  function handleSearch(e) {
    e.preventDefault();
    if (search.trim()) {
      navigate(`/products?search=${search.trim()}`);
      setSearch('');
    }
  }

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-logo">ShopEase</NavLink>

      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          placeholder="Search products..."
          value={search}
          onChange={e => setSearch(e.target.value)}
          className="search-input"
        />
        <button type="submit" className="search-btn">🔍</button>
      </form>

      <div className="navbar-links">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'active' : ''}>
          Home
        </NavLink>
        <NavLink to="/products" className={({ isActive }) => isActive ? 'active' : ''}>
          Products
        </NavLink>
        <NavLink to="/cart" className={({ isActive }) => isActive ? 'cart-link active' : 'cart-link'}>
          Cart
          {totalItems > 0 && <span className="cart-badge">{totalItems}</span>}
        </NavLink>

        {isLoggedIn ? (
          <>
            <span className="user-name">Hi, {user.name.split(' ')[0]}!</span>
            <button className="logout-btn" onClick={handleLogout}>Logout</button>
          </>
        ) : (
          <>
            <NavLink to="/login" className={({ isActive }) => isActive ? 'active' : ''}>
              Login
            </NavLink>
            <NavLink to="/register" className="register-btn">
              Register
            </NavLink>
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;