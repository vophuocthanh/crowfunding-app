const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
    accessToken: null,
  },
  reducers: {
    authLogin: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authRegister: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    authUpdateUser: (state, action) => {
      return {
        ...state,
        user: action.payload.user,
        accessToken: action.accessToken,
      };
    },
    authFetchMe: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
});

export const { authLogin, authRegister, authUpdateUser, authFetchMe } =
  authSlice.actions;
export default authSlice.reducer;