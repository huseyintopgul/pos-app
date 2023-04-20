import { Button } from 'antd'
import { ClearOutlined, MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons'

const CartTotals = () => {
    return (
        <div className="cart h-full max-h-[calc(100vh_-_90px)] flex flex-col">
            <h2 className="cart-h px-8 py-5 bg-blue-600 text-white font-bold tracking-wide text-center" >Sepetteki Ürünler</h2>
            <ul className="cart-items px-2 flex flex-col gap-y-3 pt-2 overflow-auto">
                <li className="cart-item flex items-center justify-between border-b pb-2">
                    <div className="item flex items-center justify-center">
                        <div className="cart-product w-20 mr-2 object-cover">
                            <img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg" alt="cart-product-img" />
                        </div>
                        <div className="detay flex flex-col justify-center items-start">
                            <span className='font-bold'>fffFujifilm</span>
                            <span className='font-bold'>5.000₺ x 1</span>
                        </div>
                    </div>
                    <div className="cart-icons flex flex-row p-1">
                        <Button type='danger' size='small' className='cart-icon bg-red-500 text-white w-full flex !rounded-full items-center justify-center'
                            icon={<MinusCircleOutlined />} >
                        </Button>
                        <span className='product-pc px-2'> 1 </span>
                        <Button type='primary' size='small' className='cart-icon bg-red-500 text-white w-full flex !rounded-full items-center justify-center'
                            icon={<PlusCircleOutlined />} >
                        </Button>
                    </div>
                </li>
            </ul>

            <div className="cart-totals mt-auto">
                <div className="border-y">
                    <div className="araToplam flex justify-between p-2">
                        <span className="font-bold">Ara Toplam</span>
                        <span>15.000₺</span>
                    </div>

                    <div className="kdv flex justify-between p-2">
                        <span className="font-bold">KDV %18</span>
                        <span className="text-red-700 font-bold">+ 540₺</span>
                    </div>
                </div>
                <div className="genel-toplam flex justify-between mt-3 border-b">
                    <span className="font-bold text-xl p-2 text-green-600">Genel Toplam</span>
                    <span className="font-bold text-xl p-2">15.000₺</span>
                </div>
                <div className="button py-5 px-2 flex flex-col">
                    <Button type='primary' size='large' className='w-full' >
                        Siparişi Oluştur
                    </Button>
                    <Button type='danger' size='large' className='temizle w-full mt-3 bg-red-500 text-white flex justify-center items-center'
                        icon={<ClearOutlined />} >
                        Temizle
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default CartTotals;