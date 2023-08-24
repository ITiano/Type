import AuthContainer from "src/app/auth/components/AuthContainer";
import routes from "@routes/routes";
import React from "react";

export const metadata = { title: routes.auth.title };

const Auth = () => {
  return <AuthContainer />;
};

export default Auth;
