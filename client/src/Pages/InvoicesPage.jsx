import { useEffect, useState } from "react";
import Header from "../Components/Header/Header";
import { Table, Button } from "antd";
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
    const [invoiceItems, setInvoiceItems] = useState();
    const [customer, setCustomer] = useState();

    useEffect(() => {
        const getInvoices = async (values) => {
            try {
                const res = await fetch("http://localhost:4000/api/invoices/get-all-invoices");
                const data = await res.json();
                setInvoiceItems(data);
            }
            catch (error) {
                console.log(error);
            }
        };
        getInvoices();
    }, []);
    const columns = [
        {
            title: 'Müşteri Adı',
            dataIndex: 'customerName',
            key: 'customerName',
        },
        {
            title: 'Telefon Numarası',
            dataIndex: 'customerPhoneNumber',
            key: 'customerPhoneNumber',
        },
        {
            title: 'Oluşturulma Tarihi',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (text, _) => {
                return (<span> {text} </span>)
            }
        },
        {
            title: 'Ödeme YÖntemi',
            dataIndex: 'paymentMod',
            key: 'paymentMod'
        },
        {
            title: 'Toplam Fiyat',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            render: (text, _) => {
                return (<span> {text} ₺</span>)
            }
        },
        {
            title: 'İşlemler',
            render: (_, record) => {
                return (
                    <Button
                        onClick={() => {
                            setIsModalOpen(true);
                            setCustomer(record);
                        }}
                        type="link" >Yazdır</Button>
                )
            }
        }
    ];
    // table area finish
    return (
        <>
            <Header />
            <h2 className="inv-hed text-4xl text-bold text-center mb-4">Faturalar</h2>
            <div className="cart-page px-6">
                <Table dataSource={invoiceItems} columns={columns} bordered pagination={false} />
            </div>
            <PrintInvoices
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                customer={customer}
            />
            {/* isModalOpen, setIsModalOpen statelerini props olarak "CreateInvoice" Componentine aktarıyoruz */}
        </>
    )
}


export default InvoicesPage;