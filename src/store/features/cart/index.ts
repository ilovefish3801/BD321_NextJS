import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface cartState {
  items: any[];
}

const initialState: cartState = {
  items: [],
};

export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItemToCart: (state, action: PayloadAction<number>) => {
      state.items.push(action.payload);
      // set to LS
      localStorage.setItem("cart", JSON.stringify(state.items));
    },
    addDataFromLS: (state, action: PayloadAction<[]>) => {
      state.items = [...action.payload];
    },
  },
});

// export reducer
export const { addItemToCart, addDataFromLS } = cartSlice.actions;
// export slice
export default cartSlice.reducer;
