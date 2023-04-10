import { useState } from "react";
import Header from "../Components/Header/Header";
import { Table, Card, Button, } from "antd"
import CreateInvoice from "../Components/Cart/CreateInvoice";


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
    const dataSource = [
        {
            key: '1',
            name: 'Mike',
            age: 32,
            address: '10 Downing Street',
        },
        {
            key: '2',
            name: 'John',
            age: 42,
            address: '10 Downing Street',
        },
    ];
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
        },
        {
            title: 'Address',
            dataIndex: 'address',
            key: 'address',
        },
    ];
    // table area finish





    return (
        <>
            <Header />
            <div className="cart-page px-6">
                <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
                <div className="cart-totals flex justify-end px-6 mt-5">
                    <Card className="w-[300px]">
                        <div className="ara-total flex flex-col">
                            <div className="ara-toplam py-1 px-3 flex flex-row justify-between">
                                <span className="">Ara Toplam</span>
                                <span className="">1000₺</span>
                            </div>
                            <div className="ara-toplam py-1 px-3 flex flex-row justify-between">
                                <span className="">Toplam KDV %18</span>
                                <span className="text-red-600">+540₺</span>
                            </div>
                            <div className="ara-toplam py-1 px-3 flex flex-row justify-between font-bold">
                                <span className="">Toplam Tutar</span>
                                <span className="">1540₺</span>
                            </div>
                            <div className="ara-toplam mt-3 px-3">
                                <Button type="primary" size="large" className="w-full tracking-wider display-block" onClick={() => setIsModalOpen(true)}>Siparişi Tamamla</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <CreateInvoice isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            {/* isModalOpen, setIsModalOpen statelerini props olarak "CreateInvoice" Componentine aktarıyoruz */}
        </>
    )
}

export default CartPage;