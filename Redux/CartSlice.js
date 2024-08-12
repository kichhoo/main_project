import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: [],
  reducers: {
    addToCart: (state, action) => {
      const isAvailable = state.find(
        (value) => value.name === action.payload.name
      );
      if (isAvailable) {
        isAvailable.quantity += 1;
      } else {
        state.push({ ...action.payload, quantity: 1 });
      }
    },
    removeFromCart: (state, action) => {
      return state.filter(
        (value) => value.name !== action.payload.name
      );
    },
    incrementQuantity: (state, action) => {
      const item = state.find(
        (value) => value.name === action.payload.name
      );
      if (item) {
        item.quantity += 1;
      } else {
        // Handle the error or inform the user appropriately
        console.error("Item not found in cart");
      }
    },
    decrementQuantity: (state, action) => {
      const item = state.find(
        (value) => value.name === action.payload.name
      );
      if (item) {
        if (item.quantity > 1) {
          item.quantity -= 1;
        } else {
          // Optionally, remove the item from the cart if quantity is 1
          // state = state.filter((value) => value.name !== action.payload.name);
          console.error("Quantity is already 1, cannot decrement further");
        }
      } else {
        // Handle the error or inform the user appropriately
        console.error("Item not found in cart");
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
