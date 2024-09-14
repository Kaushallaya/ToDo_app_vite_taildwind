import React, { createContext, useState, useContext } from "react";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); 

  // login function
  const login = (email, password) => {

    if (email === "user@example.com" && password === "password") {
      setUser({ email });
      return true;
    }
    return false;
  };

  // Logout function
  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
