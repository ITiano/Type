import axios from "axios";
import Router from "next/router";
import routes from "routes/routes";

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BASE_URL,
});

instance.interceptors.response.use(
  (res) => res.data,
  (err) => {
    if (err.response.status === 401) {
      localStorage.removeItem("token");
      Router.push(routes.home.path);
    }
    err?.error?.data?.detail && toast.error(err?.error?.data?.detail);
    return Promise.reject(err);
  }
);

const api = (options, disableAuthorize) => {
  if (!disableAuthorize) {
    const authorization = localStorage.getItem("token");
    options.headers = { ...options.headers, authorization: `Bearer ${authorization}` };
  }
  return instance(options);
};

export default api;
