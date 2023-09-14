import { createSlice } from "@reduxjs/toolkit";

const initialStateData = {
  cartData: [],
  cartItemCount: 0,
  totalAmount: 0,
  isCartOpen: false,
};

const cartDataSlice = createSlice({
  name: "cart-data",
  initialState: initialStateData,
  reducers: {
    toggleIsCartOpen(state) {
      state.isCartOpen = !state.isCartOpen;
    },
    addItem(state, actions) {
      const newItem = actions.payload;
      const existingItem = state.cartData.find(
        (item) => item.id === newItem.id
      );
      if (!existingItem) {
        state.cartData.push({
          id: newItem.id,
          price: newItem.price,
          img: newItem.img,
          quantity: 1,
        });
        state.totalAmount += Number(newItem.price);
        state.cartItemCount++;
      } else {
        existingItem.quantity++;
        state.cartItemCount++;
        state.totalAmount += Number(newItem.price);
      }
    },
    decreaseItem(state, actions) {
      const removeItem = actions.payload;
      const existingItem = state.cartData.find(
        (item) => item.id === removeItem.id
      );
      state.cartItemCount--;
      existingItem.quantity--;
      state.totalAmount -= Number(removeItem.price);
    },
    removeItem(state, actions) {
      const removeItem = actions.payload;
      const itemPrice = Number(removeItem.price) * Number(removeItem.quantity);
      const existingItem = state.cartData.find(
        (item) => item.id === removeItem.id
      );

      state.cartItemCount -= existingItem.quantity;
      state.totalAmount -= itemPrice;
      state.cartData = state.cartData.filter(
        (item) => item.id !== removeItem.id
      );
    },
  },
});

export const cartDataActions = cartDataSlice.actions;
export default cartDataSlice.reducer;
