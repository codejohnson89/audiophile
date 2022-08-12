import { createSlice } from "@reduxjs/toolkit";

/* The above code is creating a reducer for the cart. */
const initialState = {
    value: [],
    count: 0
}

/* Creating a reducer for the cart. */
export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
/* Adding the product to the cart. */
        addCart: (state, action) => {
            state.value.push(action.payload)
            state.count += 1
            
        },
/* Updating the cart. */
        updateCart: (state, action) => {
            console.log(action.payload.productName)
            if (action.payload.productName == state.value.find((item) => item.productName == action.payload.productName)) {
                console.log(true)
            }
            state.value.pop()
            state.value.push(action.payload)
        }
    }
})

export const { addCart, updateCart } = cartSlice.actions;
export default cartSlice.reducer;