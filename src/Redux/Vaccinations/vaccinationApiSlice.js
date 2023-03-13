import { apiSlice } from "../../app/api/apiSlice";

export const vaccinationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getvaccinations: builder.query({
      query: (userId) => `/api/vaccinations/getSchedules/${userId}`,
      keepUnusedDataFor: 5,
    }),
   
 
  }),
});

export const {
  useGetvaccinationsQuery,
} = vaccinationApiSlice;
