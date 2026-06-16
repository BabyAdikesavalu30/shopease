import { createContext, useContext, useState, useEffect } from 'react';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState(() => {
    try {
      const saved = localStorage.getItem('shopease-cart');
      return saved ? JSON.parse(saved) : [];
    } catch {
      return [];
    }
  });

  const [toast, setToast] = useState(null);

  // Save cart to localStorage
  useEffect(() => {
    localStorage.setItem('shopease-cart', JSON.stringify(cartItems));
  }, [cartItems]);

  // Show toast
  function showToast(message) {
    setToast(message);
    setTimeout(() => setToast(null), 2500);
  }

  // Add to cart
  function addToCart(product) {
    setCartItems(prev => {
      const existing = prev.find(item => item.id === product.id);
      if (existing) {
        return prev.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { ...product, quantity: 1 }];
    });
    showToast(`${product.name} added to cart!`);
  }

  // Remove from cart
  function removeFromCart(id) {
    setCartItems(prev => prev.filter(item => item.id !== id));
  }

  // Increase quantity
  function increaseQty(id) {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  }

  // Decrease quantity
  function decreaseQty(id) {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      ).filter(item => item.quantity > 0)
    );
  }

  // Clear cart
  function clearCart() {
    setCartItems([]);
    localStorage.removeItem('shopease-cart');
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity, 0
  );

  return (
    <CartContext.Provider value={{
      cartItems,
      addToCart,
      removeFromCart,
      increaseQty,
      decreaseQty,
      clearCart,
      totalItems,
      totalPrice,
      toast
    }}>
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  return useContext(CartContext);
}