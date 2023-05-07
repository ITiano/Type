import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { HYDRATE } from "next-redux-wrapper";

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://typiano-back.iran.liara.run/" }),
  extractRehydrationInfo(action, { reducerPath }) {
    if (action.type === HYDRATE) {
      return action.payload[reducerPath];
    }
  },
  // tagTypes: [],
  endpoints: (builder) => ({
    //Query for get Apis
    //Example: const { data = [], error, isLoading } = useGetAccountQuery();
    // getAccount: builder.query({
      // query: () => `auth/account/`,
    // }),
    //Mutation for post Apis
    //Exaple: const [addPost, {isLoading}] = useRegisterUserMutation();
    registerUser: builder.mutation({
      query: (user) => ({
        url: "auth/register/",
        method: "POST",
        body: user,
      }),
    }),
    loginUser: builder.mutation({
      query: (user) => ({
        url: "auth/login/",
        method: "POST",
        body: user,
      }),
    }),
  }),
});

export const { useGetAccountQuery, useRegisterUserMutation, useLoginUserMutation } = authApi;

// export endpoints for use in SSR
// export const { getPokemonByName, getPokemonList } = pokemonApi.endpoints;
