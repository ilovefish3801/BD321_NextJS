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
    deleteItemFromCart: (state, action: PayloadAction<number>) =>{
      const productID = action.payload
      // check if product ID is in the state
      const isExist = state.items.indexOf(productID)
      // cond
      if (isExist != -1){
        state.items = state.items.filter(item => item != productID)
      }else{
        alert('Цього продукту в корзині немає')
      }

    },
    deleteItemsFromCart: (state) =>{
      state.items = []
    }
  },
});

// export reducer
export const { addItemToCart, addDataFromLS, deleteItemFromCart, deleteItemsFromCart } = cartSlice.actions;
// export slice
export default cartSlice.reducer;
