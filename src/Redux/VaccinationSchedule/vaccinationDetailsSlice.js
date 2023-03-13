import { createSlice } from "@reduxjs/toolkit";

const vaccinationDetailsSlice = createSlice({
  name: "vaccinationDetails",
  initialState: {
    patientName: "",
    patientId: "",
    patientEmail: "",
    vaccinationType: "",
    hospitalName: "",
    appointmentDate: "",
    appointmentTime: "",
    vaccineDescription: "",
  },

  reducers: {
    updateVaccinationDetails: (state, action) => {
      const {
        patientName,
        patientId,
        patientEmail,
        vaccinationType,
        hospitalName,
        appointmentDate,
        appointmentTime,
        vaccineDescription,
      } = action.payload;

      state.patientName = patientName;
      state.patientId = patientId;
      state.patientEmail = patientEmail;
      state.vaccinationType = vaccinationType;
      state.hospitalName = hospitalName;
      state.appointmentDate = appointmentDate;
      state.appointmentTime = appointmentTime;
      state.vaccineDescription = vaccineDescription;
    },
  },
});

export const { updateVaccinationDetails } = vaccinationDetailsSlice.actions;

export default vaccinationDetailsSlice.reducer;

export const updatedVaccineDetails = (state) => state.vaccinationDetails;
