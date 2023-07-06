import api from "services";

export const signupUser = (data) => {
  return api(
    {
      url: "auth/register/",
      method: "POST",
      data,
    },
    true
  );
};

export const loginUser = (data) => {
  return api(
    {
      url: "auth/login/",
      method: "POST",
      data,
    },
    true
  );
};

export const getUserData = () => {
  return api({
    url: "auth/account/",
    method: "GET",
  });
};
