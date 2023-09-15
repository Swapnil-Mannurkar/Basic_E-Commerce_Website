import { configureStore } from "@reduxjs/toolkit";
import cartData from "./cartData";

const store = configureStore({
  reducer: { cartData: cartData },
});

export default store;
