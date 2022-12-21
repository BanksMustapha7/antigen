import {createSlice} from "@reduxjs/toolkit"

const messagesSlice = createSlice({
    name: "messages",
    initialState: [],

    reducers: {
        setMessages: (state, action) => {
            const {messages} = action.payload;
            state = messages;
        } 
    }
})

export const {setChats} = messagesSlice.actions;

export default  messagesSlice.reducer ;

export const setAllMessages = (state)=> state.chats;