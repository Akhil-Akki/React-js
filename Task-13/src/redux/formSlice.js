import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  formData: null,
};

const formSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    saveFormData: (state, action) => {
      state.formData = action.payload;
    },
    clearFormData: (state) => {
      state.formData = null;
    },
  },
});

export const { saveFormData, clearFormData } = formSlice.actions;

export default formSlice.reducer;