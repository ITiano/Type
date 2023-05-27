import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

export const staggeredBaseQueryWithBailOut = retry(async (args, api, extraOptions) => {
  const result = await fetchBaseQuery({ baseUrl: "https://typiano-back.iran.liara.run/" })(args, api, extraOptions);
  if (result?.error) {
    result?.error?.data?.detail && toast.error(result?.error?.data?.detail);
    for (const error in result?.error?.data) {
      if (Object.hasOwnProperty.call(result?.error?.data, error)) {
        toast.error(result?.error?.data[error]);
      }
    }
    retry.fail(result?.error);
  }
  return result;
});
