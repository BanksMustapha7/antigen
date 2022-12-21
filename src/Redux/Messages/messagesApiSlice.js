import { apiSlice } from "../../app/api/apiSlice";

export const messagesApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getmessagess: builder.query({
      query: (userId) => `/api/vaccinations/getSchedules/${userId}`,
      keepUnusedDataFor: 5,
    }),
    createMessage: builder.mutation({
      query: (credentials) => ({
        url: `/api/vaccinations/createSchedule`,
        method: "POST",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
    useCreateMessageMutation,
    useGetmessagessQuery
} = messagesApiSlice;
