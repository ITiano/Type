"use client";

import CustomBtn from "@components/utils/CustomBtn";
import CustomInput, { isEmailValidation } from "@components/utils/CustomInput";
import React, { useCallback, useState } from "react";
import { verifyUser } from "@services/authApi";
import { GoogleIcon, TwitterIcon } from "@assets/icons/icons";
import Spinner from "@components/utils/Spinner";
import { toast } from "react-hot-toast";

const AuthContainer = () => {
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({ email: "" });
  const [error, setError] = useState(null);

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      const formError = isEmailValidation(value.email);
      if (!formError) {
        setLoading(true);
        const { error } = await verifyUser(value);
        if (error) toast.error(error.message);
        else step === 1 ? setStep(2) : toast.success("please check your email address.");
        setLoading(false);
      } else setError(formError);
    },
    [value, step]
  );

  return (
    <div className="bg-form centering py-[70px] px-[10px] min-h-screen">
      <div className="form">
        <h1 className="font-bold text-2xl mb-4">{step === 1 ? "Login / Sign in" : "Verification"}</h1>
        {step === 1 ? (
          <>
            <p className="text-xs opacity-40 mt-3 mb-6 font-medium">Please enter your email to continue</p>
            <form className="flex flex-col" onSubmit={onSubmit} noValidate>
              <CustomInput
                name="email"
                type="email"
                label="Email"
                value={value}
                error={error}
                setValue={setValue}
                setError={setError}
                placeholder="info@gmail.com"
              />
              <CustomBtn type="submit" text="Submit" loading={loading} className="black-btn w-full mt-4" />
            </form>
            <div className="w-full centering gap-2 mt-6">
              <span className="h-px bg-gray-300 flex-1"></span>
              <span>Or continue with</span>
              <span className="h-px bg-gray-300 flex-1"></span>
            </div>
            <div className="centering gap-3 mt-6">
              <button className="w-12 h-12 centering rounded-full bg-gray-100">
                <GoogleIcon />
              </button>
              <button className="w-12 h-12 centering rounded-full bg-gray-100">
                <TwitterIcon />
              </button>
            </div>
          </>
        ) : (
          <>
            <div className="leading-6">
              a verification email has been sent to <strong>{value.email}</strong>. please check your email address.
            </div>
            <div className="w-full centering gap-2 mt-6 mb-4">
              <span className="h-px bg-gray-300 flex-1"></span>
              <span>You need help</span>
              <span className="h-px bg-gray-300 flex-1"></span>
            </div>
            <div className="flex-between-center gap-2 flex-wrap w-full">
              <button onClick={() => setStep(1)} className="hover:text-primary-900 transition text-left">
                Is your email wrong ?
              </button>
              {loading ? (
                <div className="flex-1 centering">
                  <Spinner />
                </div>
              ) : (
                <button onClick={onSubmit} className="hover:text-primary-900 transition text-left">
                  Don’t receive email ?
                </button>
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
