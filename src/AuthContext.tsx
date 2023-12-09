import React, { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  isLoggedIn: boolean;
  login: (username: string, password: string) => Promise<boolean>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within a AuthProvider");
  }
  return context;
};

interface AuthProviderProps {
  children: ReactNode;
}

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("isLoggedIn") === "true"
  );
  const login = async (
    username: string,
    password: string
  ): Promise<boolean> => {
    let item = { username, password };
    console.log(item);
    try {
      let result = await fetch("http://localhost:3000/api/login", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });
      if (result.ok) {
        console.log("success");
        result = await result.json();
        console.log("result", result);
        setIsLoggedIn(true); //update login state
        localStorage.setItem("isLoggedIn", "true"); //store login state
        return true;
      } else {
        console.error("Request failed with status: " + result.status);
        console.error(await result.text());
        return false;
      }
    } catch (error) {
      console.error("Error while making the request:", error);
      return false;
    }
  };

  const logout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <AuthContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
