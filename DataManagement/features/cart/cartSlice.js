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
            state.value.push(action.payload)
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