import { createSlice } from "@reduxjs/toolkit";

// Step 1: Set initial state
// Set authSlice
// Define name, initialState, reducers
// Export action creators and reducer separately

const initialState = {
  isLoggedIn: false,
  role: "",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      // localStorage.setItem("login", true);
      sessionStorage.setItem("login", "true");
    },
    logout: (state, action) => {
      localStorage.removeItem("userId");
      sessionStorage.removeItem("login");
      state.isLoggedIn = false;
      state.role = "";
    },
    roleSetter: (state, action) => {
      state.role = action.payload;
    },
  },
});

export const { login, logout, roleSetter } = authSlice.actions;
export const authReducer = authSlice.reducer;
