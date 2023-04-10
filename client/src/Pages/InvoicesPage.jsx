import { useState } from "react";
import Header from "../Components/Header/Header";
import { Table, Card, Button } from "antd";
import PrintInvoices from "../Components/Invoices/PrintInvoices";

const InvoicesPage = () => {
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
            <h2 className="inv-hed text-4xl text-bold text-center mb-4">Faturalar</h2>
            <div className="cart-page px-6">
                <Table dataSource={dataSource} columns={columns} bordered pagination={false} />
                <div className="cart-totals flex justify-end px-6 mt-5">
                    <Card className="w-[300px]">
                        <div className="ara-total flex flex-col">
                            <div className="ara-toplam mt-3 px-3">
                                <Button type="primary" size="large" className="w-full tracking-wider display-block" onClick={() => setIsModalOpen(true)}>Yazdır</Button>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
            <PrintInvoices isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
            {/* isModalOpen, setIsModalOpen statelerini props olarak "CreateInvoice" Componentine aktarıyoruz */}
        </>
    )
}


export default InvoicesPage;