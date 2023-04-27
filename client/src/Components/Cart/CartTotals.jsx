import { Button, message } from 'antd';
import { ClearOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';
import { clearCart, decrease, deleteCart, increase } from '../../Redux/CartSlice';
import { useNavigate } from 'react-router-dom';

const CartTotals = () => {

    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate()
    // useNavigate ' i, cartTotals içerisinde bulunan "sipariş oluştur' butonuna tıklayınca
    // bizi "CART" sayfasına yönlendirmesi için kullanıyoruz.

    return (
        <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
            <h2 className="cart-h px-8 py-5 bg-blue-600 text-white font-bold tracking-wide text-center" >Sepetteki Ürünler</h2>
            <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2 overflow-auto">
                {cart.cartItems.length > 0 ?
                    cart.cartItems.map((item) => (
                        <li key={item._id}
                            className="cart-item flex items-center justify-between border-b pb-2">
                            <div className="item flex items-center justify-center">
                                <div className="cart-product w-20 mr-2 object-cover">
                                    <img src={item.img} alt="cart-product-img" className='cursor-pointer'
                                        onClick={() => {
                                            dispatch(deleteCart(item));
                                            message.success("Ürün silindi.")
                                        }} />
                                </div>
                                <div className="detay flex flex-col justify-center items-start">
                                    <span className='font-bold'>{item.title}</span>
                                    <span className='font-bold'>{item.price} x {item.quantity} ₺</span>
                                </div>
                            </div>
                            <div className="cart-icons flex flex-row p-1">
                                <Button type='danger' size='small' className='cart-icon bg-red-500 text-white w-full flex !rounded-full items-center justify-center'
                                    icon={<MinusCircleOutlined />}
                                    onClick={() => {
                                        if (item.quantity === 1) {
                                            if (window.confirm("Ürünü silmek istediğinizden emin misiniz?")) {
                                                dispatch(decrease(item));
                                                message.success("Ürün silindi!")
                                            }
                                        };
                                        // Burada 2. if şartını kullanmazsak eğer; confirmi onaylamasak bile ürün silinecektir!!!!
                                        if (item.quantity > 1) {
                                            dispatch(decrease(item));
                                        };
                                    }}
                                />
                                <span className='product-pc px-2'> {item.quantity} </span>
                                <Button type='primary' size='small' className='cart-icon text-whit w-full flex !rounded-full items-center justify-center'
                                    icon={<PlusCircleOutlined />}
                                    onClick={() => dispatch(increase(item))}
                                />
                            </div>
                        </li>
                    )) : "Sepetinizhe hiç ürün yok..."}
            </ul>

            <div className="cart-totals mt-auto">
                <div className="border-y">
                    <div className="araToplam flex justify-between p-2">
                        <b> Ara Toplam</b>
                        <span>
                            {Number(cart.total).toFixed(2)} ₺
                        </span>
                    </div>

                    <div className="kdv flex justify-between p-2">
                        <b> KDV %{cart.tax} </b>
                        <span className="text-red-700 font-bold">
                            {Number((cart.total * cart.tax) / 100).toFixed(2)} ₺
                        </span>
                    </div>
                </div>
                <div className="genel-toplam flex justify-between mt-3 border-b">
                    <b className="font-bold text-xl p-2 text-green-600">Genel Toplam</b>
                    <span className="font-bold text-xl p-2">
                        {(Number((cart.total)) + Number((cart.total * cart.tax) / 100)).toFixed(2)} ₺
                    </span>
                </div>
                <div className="button py-5 px-2 flex flex-col">
                    <Button
                        type='primary'
                        size='large'
                        disabled={cart.cartItems.length === 0}
                        className='w-full'
                        onClick={() => navigate("/cart")} >
                        Siparişi Oluştur
                    </Button>
                    <Button
                        type='primary'
                        size='large'
                        className='temizle w-full mt-3 !bg-red-500 text-white flex justify-center items-center'
                        icon={<ClearOutlined />}
                        disabled={cart.cartItems.length === 0}
                        onClick={() => {
                            if (window.confirm("Sepetteki ürünlerin hepsi silinsin mi?")) {
                                dispatch(clearCart());
                                message.success("Sepetinizdeki ürünler temizlendi")
                            }
                        }}>
                        Temizle
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartTotals;