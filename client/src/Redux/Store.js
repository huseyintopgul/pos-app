import { configureStore } from "@reduxjs/toolkit"
import CartSlice from "./CartSlice"


export default configureStore({
    reducer: {
        cart: CartSlice,
    }
})


// uygulamazın state lerini tuttuğumuz alan
// Provider'ın bizden istemiş olduğu state adres merkezi