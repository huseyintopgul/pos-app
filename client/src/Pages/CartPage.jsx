import { useState } from "react";
import Header from "../Components/Header/Header";
import { Table, Card, Button, message, } from "antd"
import CreateInvoice from "../Components/Cart/CreateInvoice";
import { useDispatch, useSelector } from "react-redux";
import { MinusCircleOutlined, PlusCircleOutlined } from '@ant-design/icons';
import { increase, decrease, deleteCart } from "../Redux/CartSlice";


const CartPage = () => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    // isModalOpen, setIsModalOpen statelerini prop olarak "CreateInvoice" Componentine aktarıyoruz

    //     - onClick için showModal
    // const showModal = () => {
    //     setIsModalOpen(true)
    // }
    // - onCancel özelliği diğer seçenek olark kullanabiliriz
    // const onCancel = () => {
    //     setIsModalOpen(false);
    // };

    // table area start
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();


    const columns = [
        {
            title: 'Ürün Görseli',
            dataIndex: 'img',
            key: 'img',
            width: '150px',
            render: (text) => {
                return (<img src={text} alt="" className="w-full h-24 object-cover" />)
            }
        },
        {
            title: 'Ürün Adı',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Kategori',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Ürün Fiyatı',
            dataIndex: 'price',
            key: 'price',
            render: (text, _) => {
                return (
                    <span> {text} ₺ </span>
                )
            }
        },
        {
            title: 'Ürün Adeti',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => {
                return (
                    <>
                        <div className="cart-icons flex flex-row p-1">
                            <Button type='danger' size='small' className='cart-icon bg-red-500 text-white w-full flex !rounded-full items-center justify-center'
                                icon={<MinusCircleOutlined />}
                                onClick={() => {
                                    if (record.quantity === 1) {
                                        if (window.confirm("Ürünü silmek istediğinizden emin misiniz?")) {
                                            dispatch(decrease(record));
                                            message.success("Ürün silindi!")
                                        }
                                    };
                                    // Burada 2. if şartını kullanmazsak eğer; confirmi onaylamasak bile ürün silinecektir!!!!
                                    if (record.quantity > 1) {
                                        dispatch(decrease(record));
                                    };
                                }}
                            />
                            <span className='product-pc px-2'> {record.quantity} </span>
                            <Button type='primary' size='small' className='cart-icon text-whit w-full flex !rounded-full items-center justify-center'
                                icon={<PlusCircleOutlined />}
                                onClick={() => dispatch(increase(record))}
                            />
                        </div>
                    </>
                )
            }
        },
        {
            title: 'Toplam Fİyat',
            render: (_, record) => {
                return (
                    <span>{(record.quantity * record.price).toFixed(2)} ₺</span>
                )
            }
        },
        {
            title: 'İşlemler',
            render: (_, record) => {
                return (
                    <Button
                        type="link"
                        danger
                        onClick={() => {
                            if (window.confirm("Ürünü silmek istediğinizden emin misiniz?")) {
                                dispatch(deleteCart(record));
                                message.success("Ürün silindi.")
                            }
                        }
                        }> Sil </Button>
                )
            }
        }

    ];
    // table area finish

    return (
        <>
            <Header />
            <div className="cart-page px-6">
                <Table 
                dataSource={cart.cartItems} 
                columns={columns} 
                bordered 
                pagination={false}
                scroll={{
                    x:1200,
                    y:400,
                }} />
                <div className="cart-totals flex justify-end px-6 mt-5">
                    <Card className="w-[300px]">
                        <div className="ara-total flex flex-col">
                            <div className="ara-toplam py-1 px-3 flex flex-row justify-between">
                                <span className="">Ara Toplam</span>
                                <span>
                                    {Number(cart.total).toFixed(2)} ₺
                                </span>
                            </div>
                            <div className="ara-toplam py-1 px-3 flex flex-row justify-between">
                                <span className="">KDV % {cart.tax} </span>
                                <span className="text-red-600">
                                    {Number((cart.total * cart.tax) / 100).toFixed(2)} ₺
                                </span>
                            </div>
                            <div className="ara-toplam py-1 px-3 flex flex-row justify-between font-bold">
                                <span className="">Toplam Tutar</span>
                                <span className="">
                                    {(Number((cart.total)) + Number(((cart.total * cart.tax) / 100))).toFixed(2)} ₺
                                </span>
                            </div>
                            <div className="ara-toplam mt-3 px-3">
                                <Button type="primary"
                                    size="large"
                                    className="w-full tracking-wider display-block"
                                    disabled={cart.cartItems.length === 0}
                                    onClick={() => setIsModalOpen(true)}>
                                Siparişi Oluştur</Button>
                        </div>
                </div>
            </Card>
        </div >
            </div >
    <CreateInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
{/* isModalOpen, setIsModalOpen statelerini props olarak "CreateInvoice" Componentine aktarıyoruz */ }
        </>
    )
}

export default CartPage;