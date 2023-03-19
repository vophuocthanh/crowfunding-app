const { createSlice } = require("@reduxjs/toolkit");

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: undefined,
  },
  reducers: {},
});
