import axios from "../config/axios.config";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState();
  const [update, setUpdate] = useState(false);

  useEffect(() => {
    const token = Cookies.get("token");

    const fetchUser = async () => {
      try {
        const response = await axios.get("/api/user");
        setUser(response.data.user);
      } catch (err) {
        console.log(err);
      }
    };

    if (token) {
      setIsAuthenticated(true);
      fetchUser();
    }
  }, [isAuthenticated, update]);

  const handleLogout = () => {
    Cookies.remove("token");
    setIsAuthenticated(false);
  };

  const handleSignin = () => {
    setIsAuthenticated(true);
  };

  console.log(user);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated,
        handleLogout,
        handleSignin,
        user,
        update,
        setUpdate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
