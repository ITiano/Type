import * as Yup from "yup";

export const registerValidation = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8).max(64),
  confirmPassword: Yup.string()
    .required()
    .oneOf([Yup.ref("password"), null], "Confirm password doesn't match"),
});

export const loginValidation = Yup.object({
  email: Yup.string().required().email(),
  password: Yup.string().required().min(8).max(64),
});
