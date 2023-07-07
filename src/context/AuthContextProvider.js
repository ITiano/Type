import { updateUser } from "@services/authApi";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import React, { createContext, useContext, useEffect, useMemo, useState } from "react";
import { toast } from "react-hot-toast";

const initialUserData = {
  name: "",
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
  const supabase = createClientComponentClient();

  useEffect(() => {
    const getUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      setUser(error ? null : data.user);
      if (data) {
        const { name, lastName, goals } = data.user.user_metadata;
        if (!goals) updateUser({ ...initialUserData, ...data.user.user_metadata });
        if (!name || !lastName) toast.error(<div className="text-xs">Please complete your profile from your panel</div>);
      }
    };
    getUser();
  }, [supabase.auth]);

  return <AuthContext.Provider value={[user, setUser]}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuth = () => {
  const data = useContext(AuthContext);
  return useMemo(() => data, [data]);
};
