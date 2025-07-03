import React, { createContext, useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [name, setName] = useState(null);
  const [role, setRole] = useState(null)
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (!token) {
      setLoading(false);
      return;
    }

    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000;

      if (decoded.exp > currentTime) {
        setIsAuth(true);
        setRole(decoded.role || null);
        setName(decoded.userName || null);

      } else {
        localStorage.removeItem('token');
      }
    } catch (error) {
      console.error('Invalid token:', error);
      localStorage.removeItem('token');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleLogout = () => {
    if (isAuth) {
      localStorage.removeItem('token');
      setIsAuth(false);
    } else {
      alert('Wtf login first you fool');
    }
  };

  return (
    <AuthContext.Provider value={{ name, setName, isAuth, setIsAuth, loading, role, handleLogout }}>
      {children}
    </AuthContext.Provider>
  );
};
