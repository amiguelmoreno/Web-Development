// features/cartSlice.js
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
  totalPrice: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const existingItem = state.cartItems.find(
        (item) => item.id === action.payload.id
      );
      if (existingItem) {
        existingItem.quantity += 1;
        state.totalPrice += action.payload.price;
      } else {
        state.cartItems.push({ ...action.payload, quantity: 1 });
        state.totalPrice += action.payload.price;
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.cartItems.find(
        (item) => item.id === action.payload
      );
      if (itemToRemove) {
        state.totalPrice -= itemToRemove.price * itemToRemove.quantity;
        state.cartItems = state.cartItems.filter(
          (item) => item.id !== action.payload
        );
      }
    },
    updateQuantity: (state, action) => {
      const { productId, quantity } = action.payload;
      const itemToUpdate = state.cartItems.find(
        (item) => item.id === productId
      );
      if (itemToUpdate) {
        const priceDifference =
          (quantity - itemToUpdate.quantity) * itemToUpdate.price;
        itemToUpdate.quantity = quantity;
        state.totalPrice += priceDifference;
      }
    },
  },
});

export const { addToCart, removeFromCart, updateQuantity } = cartSlice.actions;

export default cartSlice.reducer;
