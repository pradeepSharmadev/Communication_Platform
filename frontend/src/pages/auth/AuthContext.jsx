import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check existing authentication with your backend.
    // Example:
    //
    // fetch("/api/auth/me", {
    //   credentials: "include",
    // })
    //   .then((res) => res.ok ? res.json() : null)
    //   .then((data) => setUser(data?.user ?? null))
    //   // ...

    setLoading(false);
  }, []);

  const login = (userData) => {
    setUser(userData);
  };

  const logout = async () => {
    // Call your backend logout endpoint here.
    // await fetch("/api/auth/logout", {
    //   method: "POST",
    //   credentials: "include",
    // });
    
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, loading, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error(
      "useAuth must be used inside an AuthProvider"
    );
  }

  return context;
}
