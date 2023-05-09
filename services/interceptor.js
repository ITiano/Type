import { fetchBaseQuery, retry } from "@reduxjs/toolkit/query/react";
import toast from "react-hot-toast";

export const staggeredBaseQueryWithBailOut = retry(async (args, api, extraOptions) => {
  const result = await fetchBaseQuery({ baseUrl: "https://typiano-back.iran.liara.run/" })(args, api, extraOptions);
  if (result.error) {
    toast.error(result?.error?.data?.detail);
    retry.fail(result?.error);
  }
  return result;
});
