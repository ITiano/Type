import React, { createContext, useContext, useMemo, useState } from "react";

const AuthContext = createContext();

const initialStateUser = null;

const AuthContextProvider = ({ children }) => {
  const [value, setValue] = useState(initialStateUser);

  return <AuthContext.Provider value={[value, setValue]}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;

export const useAuth = () => {
  const data = useContext(AuthContext);
  return useMemo(() => data, [data]);
};
