import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

export const staggeredBaseQueryWithBailOut = retry(async (args, api, extraOptions) => {
  const result = fetchBaseQuery({
    baseUrl: "https://typiano-back.iran.liara.run/",
    prepareHeaders: (headers) => {
      let token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  });
  if (result?.error) {
    if (result?.error?.data?.detail) toast.error(result?.error?.data?.detail);
    else {
      for (const error in result?.error?.data) {
        if (Object.hasOwnProperty.call(result?.error?.data, error)) {
          toast.error(result?.error?.data[error]);
        }
      }
    }
    retry.fail(result?.error);
  }
  return await result(args, api, extraOptions);
});
