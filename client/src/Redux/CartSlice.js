import {createSlice} from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name:"cart",
    initialState: {
        // sepette ekli ürünlerimizi tutacağımız array "cartItems" olacak
        cartItems:[],
    },
    reducer: {

    },
})

export default cartSlice.reducer;