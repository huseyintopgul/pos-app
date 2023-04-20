import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        // sepette ekli ürünlerimizi tutacağımız array "cartItems" olacak
        cartItems: [],
        total: 0,
        price: 0
    },
    // reducer içerisinde uygulama içerisinde gerçekleştireceğimiz fonksiyon ve metodlarımızı yazıyoruz.
    reducers: {
        // reducer alanı "actions" alanı olarak geçmektedir.
        // bu alan içerisinde yazılan bütün metodların export edilmesi gerekmektedir.!!!!!
        addProduct: (state, action) => {
            state.cartItems.push(action.payload)
        }
    },
})

export const { addProduct } = cartSlice.actions
export default cartSlice.reducer;