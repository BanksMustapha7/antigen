import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    _id: null,
    user: null,
    firstName: null,
    lastName: null,
    profilePic: null,
    roles: null,
    token: null,
  },

  reducers: {
    setCredentials: (state, action) => {
      const {
        _id,
        email,
        firstName,
        lastName,
        profilePic,
        roles,
        token,
      } = action.payload;
      state._id = _id;
      state.email = email;
      state.firstName = firstName;
      state.lastName = lastName;
      state.profilePic = profilePic;
      state.roles = roles;
      state.token = token;
    },
    logOut: (state, action) => {
      state._id = null;
      state.user = null;
      state.token = null;
      state.firstName = null;
      state.lastName = null;
      state.profilePic = null;
      state.roles = null;
    },
  },
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const setCurrentUser = (state) => state.auth.user;
export const setCurrentToken = (state) => state.auth.token;
