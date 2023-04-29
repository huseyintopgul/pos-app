import { createSlice } from "@reduxjs/toolkit"

// sepette ekli ürünlerimizi tutacağımız array "cartItems" olacak,
const cartSlice = createSlice({
    name: "cart",
    initialState: {
        cartItems: localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart")).cartItems
            : [],
        total: localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart")).total
        :0,
        tax: 18,
    },
    reducers: {
        // reducer alanı "actions" alanı olarak geçmektedir.
        // bu alan içerisinde yazılan bütün metodların export edilmesi gerekmektedir.!!!!!
        addProduct: (state, action) => {
            // sepette ekli ürünü tekrardan eklememek ve sepeti dinamik hale getirmek için
            // action ürününün daha önce sepette eklenip eklenmediğini find() metodu ile sorguluyoruz
            const findCartItem = state.cartItems.find(
                (item) => item._id === action.payload._id);
            if (findCartItem) {
                findCartItem.quantity = findCartItem.quantity + 1
            } else {
                state.cartItems.push(action.payload)
            }
            // find() metodu ile yapmış olduğumuz sorgu sonucunda ürün sepette varsa
            // "quantity" değerini +1 yapıyoruz, aki durumda ürünü sepete ekliyoruz.
            state.total += action.payload.price;
            // bu alanda sepete eklenen ürünlerin fiyat hesaplamasını yapıyoruz.
        },
        // "initialState" içerisindeki elementlerimize ulaşmak için "reducer" içerisinde 
        // oluşturduğumuz metodlara (state, action) değerlerini tanımlamamız gerekiyor.
        deleteCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            state.total -= action.payload.price * action.payload.quantity;
            // bu alanda sepetten çıkartılan ürünlerin fiyatlarını totalden eksiltiyoruz.
        },
        // bu alanda sepet içerisinde bulunan "+" butonu ile ürün adedi artırma işlemini tapıyoruz
        increase: (state, action) => {
            const cartItem = state.cartItems.find((item) => item._id === action.payload._id)
            cartItem.quantity += 1;
            state.total += cartItem.price;
        },
        // bu alanda sepet içerisinde bulunan "-" butonu ile ürün adedi azaltma işlemini tapıyoruz
        decrease: (state, action) => {
            const cartItem = state.cartItems.find((item) => item._id === action.payload._id)
            cartItem.quantity -= 1
            if (cartItem.quantity === 0) {
                state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
            }
            state.total -= cartItem.price;
        },
        clearCart: (state) => {
            state.cartItems = [];
            state.total = 0;
        }
    },
})

export const { addProduct, deleteCart, increase, decrease, clearCart } = cartSlice.actions;
export default cartSlice.reducer;