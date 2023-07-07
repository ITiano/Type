import AuthContainer from "@components/pages/auth/AuthContainer";
import routes from "@routes/routes";
import React from "react";

export const metadata = { title: routes.auth.title };

const Auth = () => {
  return <AuthContainer />;
};

export default Auth;
