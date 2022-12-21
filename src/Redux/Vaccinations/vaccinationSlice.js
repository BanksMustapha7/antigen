import {createSlice} from "@reduxjs/toolkit"

const vaccinationSlice = createSlice({
    name: "vaccinations",
    initialState: [],

    reducers: {
        setVaccinations: (state, action) => {
            const {vaccinations} = action.payload;
            state = vaccinations;
        } 
    }
})

export const {setVaccinations} = vaccinationSlice.actions;

export default  vaccinationSlice.reducer ;

export const setAllVaccinations = (state)=> state.vaccinations;