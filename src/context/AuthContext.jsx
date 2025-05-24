import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [isAuth, setIsAuth] = useState(!!localStorage.getItem('token'));

  const login = (token) => {
    localStorage.setItem('token', token);
    setIsAuth(true);
  };

  const logout = () => {
    localStorage.removeItem('token');
    setIsAuth(false);
  };

  return (
    <AuthContext.Provider value={{ isAuth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
