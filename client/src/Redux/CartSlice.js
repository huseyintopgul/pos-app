import { createSlice } from "@reduxjs/toolkit"

const cartSlice = createSlice({
    name: "cart",
    initialState: {
        // sepette ekli ürünlerimizi tutacağımız array "cartItems" olacak,
        cartItems: [],
        total: 0,
        tax: 18,
    },
    // reducer içerisinde uygulama içerisinde gerçekleştireceğimiz fonksiyon ve metodlarımızı yazıyoruz.
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

        },
        // "initialState" içerisindeki elementlerimize ulaşmak için "reducer" içerisinde 
        // oluşturduğumuz metodlara (state, action) değerlerini tanımlamamız gerekiyor.
        deleteCart: (state, action) => {
            state.cartItems = state.cartItems.filter((item) => item._id !== action.payload._id);
        }
    },
})

export const { addProduct, deleteCart } = cartSlice.actions
export default cartSlice.reducer;