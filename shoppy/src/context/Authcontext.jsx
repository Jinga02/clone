/** @format */

import { login, logout, onUserStateChange } from "api/firebase";
import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

export function AuthContextProvider({ children }) {
  const [user, setUser] = useState();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // firebase에서 사용자 인증상태 추적...
    onUserStateChange((user) => {
      setIsLoading(false);
      setUser(user);
    });
  }, []);

  return (
    <AuthContext.Provider value={{ user, isLoading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuthContext() {
  return useContext(AuthContext);
}
