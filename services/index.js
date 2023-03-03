import axios from "axios";

export default NEXT_API =
  process.env.NODE_ENV === "production" ? process.env.NEXT_PUBLIC_PRODUCTION_API : process.env.NEXT_PUBLIC_DEVELOPMENT_API;

export const api = (options, notAuthorize) => {
  let op = options;
  if (!notAuthorize) {
    op = {
      ...options,
      headers: {
        Authorization: localStorage.getItem("Authorization"),
      },
    };
  }

  let axiosInstance = axios.create({
    baseURL: NEXT_API,
    headers: {
      "Content-type": "application/json",
    },
  });

  axiosInstance.interceptors.response.use(
    (response) => response.data,
    (error) => {
      if (error.response.status === 401) {
        localStorage.removeItem("Authorization");
        localStorage.removeItem("refreshToken");
        // history.replace({ search: `replace=${window.location.pathname}`, pathname: "/" });
      }

      return Promise.reject(error);
    }
  );

  return axiosInstance(op);
};
