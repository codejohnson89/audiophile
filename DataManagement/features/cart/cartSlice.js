import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    value: [],
    count: 0
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        addCart: (state, action) => {
            // state.count += 1
            // console.log(action.payload.productName)
            state.value.push(action.payload)
            state.total.push(action.payload.productPrice * action.payload.quantity)
            state.count += 1
            
        },
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