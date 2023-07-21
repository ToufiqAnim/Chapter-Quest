import { api } from "@/redux/api/apiSlice";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    signin: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/login",
          method: "POST",
          body: data,
        };
      },
    }),
    signup: builder.mutation({
      query: (data) => {
        return {
          url: "/auth/signup",
          method: "POST",
          body: data,
        };
      },
    }),
  }),
});

export const { useSigninMutation, useSignupMutation } = authApi;
