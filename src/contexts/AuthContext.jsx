import React, { createContext, useCallback, useEffect, useState } from "react";

export const AuthContext = createContext({
  isLoggedIn: false,
  token: null,
  login: () => {},
  logout: () => {},
});

const TOKEN_KEY = "token";

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(null);

//   // Load token on refresh
//   useEffect(() => {
//     const t = localStorage.getItem(TOKEN_KEY);
//     if (t) setToken(t);
//   }, []);

  const login = useCallback((t) => {
    localStorage.setItem(TOKEN_KEY, t);
    setToken(t);
  }, []);

  const logout = useCallback(() => {
    localStorage.removeItem(TOKEN_KEY);
    setToken(null);
  }, []);

  return (
    <AuthContext.Provider value={{ isLoggedIn: !!token, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
