import * as Yup from "yup";

export const loginValidation = Yup.object({
  email: Yup.string().required().email(),
});

export const profileValidation = Yup.object({
  email: Yup.string().required().email(),
  name: Yup.string().min(5).max(30),
  lastName: Yup.string().min(5).max(30),
});
