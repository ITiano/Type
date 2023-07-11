"use client";

import { AppProgressBar } from "next-nprogress-bar";
import React from "react";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "src/context/AuthContextProvider";

const RootProvider = ({ children }) => {
  return (
    <>
      <Toaster toastOptions={{ error: { iconTheme: { primary: "#E35757" } }, success: { iconTheme: { primary: "#8FE357" } } }} />
      <AppProgressBar height="4px" color="#aae6f0" options={{ showSpinner: false }} shallowRouting />
      <AuthContextProvider>{children}</AuthContextProvider>
    </>
  );
};

export default RootProvider;
