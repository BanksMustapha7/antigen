import { apiSlice } from "../../app/api/apiSlice";

export const noteApiSlice = apiSlice.injectEndpoints({
    endpoints: builder => ({
      getchats: builder.query({
        query: (userEmail) => `/api/chatRoute/${userEmail}`,
        keepUnusedDataFor: 5,
      }),
    })
})

export const { useGetchatsQuery } = noteApiSlice;