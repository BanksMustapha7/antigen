import { apiSlice } from "../../app/api/apiSlice";

export const chatApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getchats: builder.query({
      query: (userId) => `/api/chatRoutes/`,
      keepUnusedDataFor: 5,
    }),
    createChat: builder.mutation({
      query: (credentials) => ({
        url: `/api/chat/chatRoutes`,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const { useGetchatsQuery, useCreateChatMutation } = chatApiSlice;
