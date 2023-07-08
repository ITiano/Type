import { updateUser, getUser } from "@services/authApi";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";

const initialUserData = {
  firstName: "",
  lastName: "",
  goals: {
    daily: 3000,
    weekly: 6000,
    monthly: 9000,
  },
};

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      const { data, error } = await getUser();
      setUser(error ? null : data.user);
      if (data.user) {
        const { goals } = data.user.user_metadata;
        if (!goals) updateUser({ ...initialUserData, ...data.user.user_metadata });
      }
    };
    getUserData();
  }, []);

  return <AuthContext.Provider value={[user, setUser]}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuth = () => {
  const data = useContext(AuthContext);
  return useMemo(() => data, [data]);
};
