import { apiSlice } from "../../app/api/apiSlice";

export const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    login: builder.mutation({
      query: (credentials) => ({
        url: "/api/auth/login",
        method: "POST",
        body: { ...credentials },
      }),
    }),
    register: builder.mutation({
      query: (details) => ({
        url: "/api/auth/signup",
        method: "POST",
        body: {...details}
      })
    }),
    signOut: builder.mutation({
      query: () => ({
        url: "/logout",
        method: "GET",
      })
    })
  }),
});

export const { useLoginMutation, useRegisterMutation, useSignOutMutation } = authApiSlice;
