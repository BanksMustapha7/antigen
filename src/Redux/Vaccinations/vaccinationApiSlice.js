import { apiSlice } from "../../app/api/apiSlice";

export const noteApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getvaccinations: builder.query({
      query: (userId) => `/api/vaccinations/getSchedules/${userId}`,
      keepUnusedDataFor: 5,
    }),
    createVaccination: builder.mutation({
      query: (credentials) => ({
        url: `/api/vaccinations/createSchedule`,
        method: "POST",
        body: { ...credentials },
      }),
    }),
    updateVaccination: builder.mutation({
      query: (credentials, userId) => ({
        url: `/api/vaccination/${userId}`,
        method: "PUT",
        body: { ...credentials },
      }),
    }),
  }),
});

export const {
  useGetvaccinationsQuery,
  useCreateVaccinationMutation,
  useUpdateVaccinationMutation,
} = noteApiSlice;
