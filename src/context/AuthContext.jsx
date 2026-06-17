import { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem('shopease-user');
      return saved ? JSON.parse(saved) : null;
    } catch {
      return null;
    }
  });

  const [token, setToken] = useState(() => {
    return localStorage.getItem('shopease-token') || null;
  });

  function login(userData, userToken) {
    setUser(userData);
    setToken(userToken);
    localStorage.setItem('shopease-user', JSON.stringify(userData));
    localStorage.setItem('shopease-token', userToken);
  }

  function logout() {
    setUser(null);
    setToken(null);
    localStorage.removeItem('shopease-user');
    localStorage.removeItem('shopease-token');
  }

  const isLoggedIn = !!user;

  return (
    <AuthContext.Provider value={{
      user,
      token,
      login,
      logout,
      isLoggedIn
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}