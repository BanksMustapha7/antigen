import { apiSlice } from "../../app/api/apiSlice";

export const vaccinationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getvaccinations: builder.query({
      query: (userId) => `/api/vaccinations/getSchedules/${userId}`,
      keepUnusedDataFor: 5,
    }),
<<<<<<< HEAD
   
 
=======
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
>>>>>>> Abdullah
  }),
});

export const {
  useGetvaccinationsQuery,
<<<<<<< HEAD
=======
  useCreateVaccinationMutation,
  useUpdateVaccinationMutation,
>>>>>>> Abdullah
} = vaccinationApiSlice;
