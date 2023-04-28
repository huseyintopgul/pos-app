import { useEffect, useState } from "react";
import Header from "../Components/Header/Header"
import { Table, message } from "antd";


const CustomersPage = () => {
    const [invoiceItems, setInvoiceItems] = useState([]);

    useEffect(() => {
        const getInvoices = async (values) => {
            try {
                const res = await fetch("http://localhost:4000/api/invoices/get-all-invoices")
                const data = await res.json();
                setInvoiceItems(data);
            }
            catch (error) {
                message.error("İşlem başarısız");
            }
        }
        getInvoices();
    }, []);

    // table area start

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
            title: 'İşlem Tarihi',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render:(record)=>{
                return(<span>{record.substring(0, 10)} </span>)
            }
        },
    ];
    return (
        <>
            <Header />
            <h2 className="inv-hed text-4xl text-bold text-center mb-4">Müşterilerim</h2>
            <div className="cart-page px-6">
                <Table 
                dataSource={invoiceItems} 
                columns={columns} 
                bordered 
                pagination={false}
                scroll={{
                    x:600,
                    y:500
                }} />

            </div>
        </>
    )
}

export default CustomersPage