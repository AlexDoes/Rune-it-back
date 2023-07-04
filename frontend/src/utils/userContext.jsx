import React, { createContext, useState, useEffect, useContext } from "react";

const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/userinfo", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
          credentials: "include",
        });
        const data = await response.json();
        setUser(data);
      } catch (err) {}
    };
    getUserInfo();
  }, []);

  const logOut = async () => {
    setUser(null);
  };

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    // throw new Error("useUser must be used within a UserProvider");
    return null;
  }
  return context;
};
