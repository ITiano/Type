"use client";
import CustomBtn from "@components/utils/CustomBtn";
import CustomInput from "@components/utils/CustomInput";
import React, { useCallback, useEffect, useState } from "react";
import { verifyUser } from "@services/authApi";
import { useAuth } from "src/context/AuthContextProvider";
import { useRouter } from "next/navigation";
import routes from "@routes/routes";

const AuthContainer = () => {
  const [user] = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const [value, setValue] = useState({ email: "" });

  const onSubmit = useCallback(
    async (e) => {
      e.preventDefault();
      setLoading(true);
      const { error } = await verifyUser(value);
      !error && setStep(2);
      setLoading(false);
    },
    [value]
  );

  useEffect(() => {
    user && router.push(routes.home.path);
  }, [router, user]);

  return (
    <div className="bg-form centering py-[70px] px-[10px] min-h-[100svh]">
      <div className="form">
        {step === 1 ? (
          <>
            <h1 className="text-2xl font-bold">Typiano :)</h1>
            <p className="text-xs opacity-40 mt-3 mb-6 font-medium">Please enter your email to continue</p>
            <form className="flex flex-col" onSubmit={onSubmit}>
              <CustomInput setValue={setValue} name="email" label="Email" placeholder="info@gmail.com" />
              <CustomBtn type="submit" text="Submit" loading={loading} className="black-btn w-full mt-4" />
            </form>
          </>
        ) : (
          <div className="leading-6">
            a verification email has been sent to <strong>{value.email}</strong>.<br /> please verify your email address :)
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
