import { createSlice } from "@reduxjs/toolkit";

const initialStateData = {
  cartData: [],
  cartItemCount: 0,
  totalAmount: 0,
  isCartOpen: false,
  isSubmitFormOpen: false,
};

const cartDataSlice = createSlice({
  name: "cart-data",
  initialState: initialStateData,
  reducers: {
    toggleIsCartOpen(state, actions) {
      if (actions.payload) {
        state.isCartOpen = false;
        return;
      }
      state.isCartOpen = !state.isCartOpen;
    },

    toggleIsSubmitFormOpen(state, actions) {
      if (actions.payload) {
        state.isSubmitFormOpen = false;
        return;
      }
      state.isSubmitFormOpen = !state.isSubmitFormOpen;
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

      if (removeItem.quantity === 1) {
        state.cartData = state.cartData.filter(
          (item) => item.id !== removeItem.id
        );
      }
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
