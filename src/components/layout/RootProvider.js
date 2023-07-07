"use client";

import { AppProgressBar } from "next-nprogress-bar";
import React from "react";
import { Toaster } from "react-hot-toast";

const RootProvider = ({ children }) => {
  return (
    <>
      <Toaster toastOptions={{ error: { iconTheme: { primary: "#E35757" } }, success: { iconTheme: { primary: "#8FE357" } } }} />
      <AppProgressBar height="2px" color="#4a6dff" options={{ showSpinner: false }} shallowRouting />
      {children}
    </>
  );
};

export default RootProvider;
