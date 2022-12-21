import {createSlice} from "@reduxjs/toolkit"

const chatSlice = createSlice({
    name: "chats",
    initialState: [],

    reducers: {
        setChats: (state, action) => {
            const {chats} = action.payload;
            state = chats;
        } 
    }
})

export const {setChats} = chatSlice.actions;

export default  chatSlice.reducer ;

export const setAllChats = (state)=> state.chats;