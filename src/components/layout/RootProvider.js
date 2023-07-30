"use client";

import CustomBtn from "@components/utils/CustomBtn";
import ModalContainer from "@components/utils/ModalContainer";
import { AppProgressBar } from "next-nprogress-bar";
import React, { useState } from "react";
import { Toaster } from "react-hot-toast";
import AuthContextProvider from "src/context/AuthContextProvider";

const RootProvider = ({ children }) => {
  const [open, setOpen] = useState(typeof window !== "undefined" && !localStorage.getItem("modal-vpn"));

  return (
    <>
      <ModalContainer necessary open={open} width="300px">
        <p className="leading-7">
          To ensure the best experience while using our service, we highly recommend using a Virtual Private Network (VPN).
        </p>
        <CustomBtn
          text="Yes, I got it"
          className="black-btn rounded-md w-full mt-4 py-3 sm:py-2.5 text-base sm:text-sm"
          onClick={() => {
            localStorage.setItem("modal-vpn", true);
            setOpen(false);
          }}
        />
      </ModalContainer>

      <Toaster toastOptions={{ error: { iconTheme: { primary: "#E35757" } }, success: { iconTheme: { primary: "#8FE357" } } }} />
      <AppProgressBar height="4px" color="#aae6f0" options={{ showSpinner: false }} shallowRouting />
      <AuthContextProvider>{children}</AuthContextProvider>
    </>
  );
};

export default RootProvider;
