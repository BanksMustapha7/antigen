import { apiSlice } from "../../app/api/apiSlice";

export const vaccinationDetailsApiSlice = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
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
    })
})


export const {
    useCreateVaccinationMutation,
    useUpdateVaccinationMutation,
  } = vaccinationDetailsApiSlice;