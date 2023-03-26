import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { stat } from "fs/promises";
import { RootState, AppThunk } from "../../app/store";
import { IProduct } from "../home/home.interface";

export interface CartState {
  products: Array<IProduct>;
}

const initialState: CartState = {
  products: [],
};


export const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    increment: (state, action: PayloadAction<IProduct>) => {
    
    let newItem = true;
    
      state.products.forEach((item, index) => {
        //find the product object in the parent state and increment the quantity
        if (item.id === action.payload.id){ 
            state.products[index].quantity += 1;
            newItem = false;
        }
        return item;
      });
      //if the item is not is cart then increase the quantityfrom 0 to 1 and push to cart
      if(newItem){
        let newProduct ={ ...action.payload};
        newProduct.quantity += 1;
        state.products.push(newProduct);
      }
     
    },
    decrement: (state, action: PayloadAction<IProduct>) => {
      state.products.map((item, index) => {
        if (item.id === action.payload.id) state.products[index].quantity--;
        else state.products.push(action.payload);
      });
    },

  },
});
export const getProductsInCart = (state: RootState) => state.cart.products;
export const { increment, decrement } = cartSlice.actions;

export default cartSlice.reducer;
