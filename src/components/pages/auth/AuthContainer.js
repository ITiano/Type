"use client";

import CustomBtn from "@components/utils/CustomBtn";
import CustomInput from "@components/utils/CustomInput";
import React, { useCallback, useEffect, useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { verifyUser } from "@services/authApi";
import { useAuth } from "src/context/AuthContextProvider";
import { useRouter } from "next/navigation";
import routes from "@routes/routes";
import * as Yup from "yup";

const loginValidation = Yup.object({
  email: Yup.string().required().email(),
});

const defaultValues = { email: "" };

const AuthContainer = () => {
  const [user] = useAuth();
  const router = useRouter();
  const [step, setStep] = useState(1);
  const [loading, setLoading] = useState(false);
  const form = useForm({ defaultValues, resolver: yupResolver(loginValidation) });

  const onSubmit = useCallback(async (value) => {
    setLoading(true);
    const { error } = await verifyUser(value);
    !error && setStep(2);
    setLoading(false);
  }, []);

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
            <form className="flex flex-col" onSubmit={form.handleSubmit(onSubmit)}>
              <CustomInput name="email" label="Email" placeholder="info@gmail.com" form={form} />
              <CustomBtn type="submit" text="Submit" loading={loading} className="black-btn w-full mt-4" />
            </form>
          </>
        ) : (
          <div className="leading-6">
            a verification email has been sent to <strong>{form.getValues("email")}</strong>.<br /> please verify your email
            address :)
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthContainer;
