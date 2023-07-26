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
    const getIPInfo = async () => {
      await fetch(`https://ipinfo.io/?token=${process.env.NEXT_PUBLIC_APIINFO}`)
        .then(async (res) => {
          const { country } = await res.json();
          alert(country);
          country === "IR" && toast.error("For the best performance, consider turning on your VPN");
        })
        .catch(() => toast.error("For the best performance, consider turning on your VPN"));
    };
    process.env.NODE_ENV === "production" && getIPInfo();

    const getUserData = async () => {
      const { data, error } = await getUser();
      if (error) {
        error.status !== 401 && toast.error(error.message);
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
