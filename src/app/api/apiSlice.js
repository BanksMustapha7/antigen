import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { setCredentials, logOut } from "../../Redux/Auth/authSlice";

const baseQuery = fetchBaseQuery({
  baseUrl: "http://localhost:8001",
  credentials: "same-origin",
  prepareHeaders: (headers, { getState }) => {
    const token = getState().auth.token;
    console.log("Token", token);
    if (token) {
      headers.set("authorization", `Bearer ${token}`);
    }
    return headers;
  },
});

const baseQueryWithReauth = async (args, api, extraOptions) => {
  let result = await baseQuery(args, api, extraOptions);
<<<<<<< HEAD
  console.log(result.error);
=======
//   console.log(result.data);
>>>>>>> Abdullah

  if (result?.error?.originalStatus === 403) {
    console.log("Sending Refresh Token");

    //Send Refresh Token
    const refreshResult = await baseQuery("/refresh", api, extraOptions);
    console.log("Refresh Result", refreshResult);
    if (refreshResult.data) {
      const user = api.getState().auth.user;
      //store new token

      api.dispatch(setCredentials({ ...refreshResult.data, user }));
      //Retry original query with new access token
      result = await baseQuery(args, api, extraOptions);
    } else {
      console.log("The code dey reach here");
      api.dispatch(logOut());
    }
  }
//   console.log(result);
  return result;
};

export const apiSlice = createApi({
  baseQuery: baseQueryWithReauth,
  endpoints: (builder) => ({}),
});
