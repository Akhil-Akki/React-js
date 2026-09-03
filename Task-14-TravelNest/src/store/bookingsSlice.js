import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: JSON.parse(localStorage.getItem("travelnest-bookings") || "[]"),
};

const persist = (items) => {
  localStorage.setItem("travelnest-bookings", JSON.stringify(items));
};

const bookingsSlice = createSlice({
  name: "bookings",
  initialState,
  reducers: {
    addBooking: (state, action) => {
      state.items.push(action.payload);
      persist(state.items);
    },
    updateBooking: (state, action) => {
      const index = state.items.findIndex((item) => item.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
        persist(state.items);
      }
    },
    deleteBooking: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload);
      persist(state.items);
    },
  },
});

export const { addBooking, updateBooking, deleteBooking } = bookingsSlice.actions;
export default bookingsSlice.reducer;
