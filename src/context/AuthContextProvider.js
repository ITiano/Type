import { dailyGoalList, weeklyGoalList } from "@helper/utils";
import { getUser } from "@services/authApi";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import toast from "react-hot-toast";

const initialUserData = {
  profile_cover: null,
  firstName: "",
  lastName: "",
  daily: dailyGoalList[0],
  weekly: weeklyGoalList[1],
};

const AuthContext = createContext();

const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState("");

  useEffect(() => {
    const getUserData = async () => {
      const { data, error } = await getUser();
      if (error) {
        toast.error("Something went wrong. Please try again");
        setUser(null);
      } else setUser({ ...data.user, user_metadata: { ...initialUserData, ...data.user.user_metadata } });
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
