import { useEffect, useRef, useState } from "react";
import Header from "../Components/Header/Header";
import { Table, Button, message, Input, Space, Spin } from "antd";
import PrintInvoices from "../Components/Invoices/PrintInvoices";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';



const InvoicesPage = () => {
    const [searchText, setSearchText] = useState(" ");
    const [searchedColumn, setSearchedColumn] = useState(" ");
    const searchInput = useRef(null);
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
                const res = await fetch(process.env.REACT_APP_SERVER_URL + "/api/invoices/get-all-invoices");
                const data = await res.json();
                setInvoiceItems(data);
            }
            catch (error) {
                message.error(error);
            }
        };
        getInvoices();
    }, []);

    const handleSearch = (selectedKeys, confirm, dataIndex) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters) => {
        clearFilters();
        setSearchText(" ");
    };

    const getColumnSearchProps = (dataIndex) => ({
        filterDropdown: ({
            setSelectedKeys,
            selectedKeys,
            confirm,
            clearFilters,
            close,
        }) => (
            <div
                style={{
                    padding: 8,
                }}
                onKeyDown={(e) => e.stopPropagation()}
            >
                <Input
                    ref={searchInput}
                    placeholder={`Search ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={(e) =>
                        setSelectedKeys(e.target.value ? [e.target.value] : [])
                    }
                    onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
                    style={{
                        marginBottom: 8,
                        display: "block",
                    }}
                />
                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Ara
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"
                        style={{
                            width: 90,
                        }}
                    >
                        Yenile
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({
                                closeDropdown: false,
                            });
                            setSearchText(selectedKeys[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Filitre
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            close();
                        }}
                    >
                        Kapat
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered) => (
            <SearchOutlined
                style={{
                    color: filtered ? "#1890ff" : undefined,
                }}
            />
        ),
        onFilter: (value, record) =>
            record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
        onFilterDropdownOpenChange: (visible) => {
            if (visible) {
                setTimeout(() => searchInput.current?.select(), 100);
            }
        },
        render: (text) =>
            searchedColumn === dataIndex ? (
                <Highlighter
                    highlightStyle={{
                        backgroundColor: "#ffc069",
                        padding: 0,
                    }}
                    searchWords={[searchText]}
                    autoEscape
                    textToHighlight={text ? text.toString() : ""}
                />
            ) : (
                text
            ),
    });
    const columns = [
        {
            title: 'Müşteri Adı',
            dataIndex: 'customerName',
            key: 'customerName',
            ...getColumnSearchProps("customerName"),
        },
        {
            title: 'Telefon Numarası',
            dataIndex: 'customerPhoneNumber',
            key: 'customerPhoneNumber',
            ...getColumnSearchProps("customerPhoneNumber"),
        },
        {
            title: 'Oluşturulma Tarihi',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (record) => {
                return (<span> {record.substring(0, 10)} </span>)
            },
            sorter: (a, b) => new Date(a.createdAt) - new Date(b.createdAt),
        },
        {
            title: 'Ödeme Yöntemi',
            dataIndex: 'paymentMod',
            key: 'paymentMod',
            ...getColumnSearchProps("paymentMod"),
        },
        {
            title: 'Toplam Fiyat',
            dataIndex: 'totalAmount',
            key: 'totalAmount',
            render: (text, _) => {
                return (<span> {text} ₺</span>)
            },
            sorter: (a, b) => a.totalAmount - b.totalAmount,
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
            {invoiceItems ? (
                <div className="cart-page px-6">
                    <Table
                        dataSource={invoiceItems}
                        columns={columns}
                        bordered
                        pagination={false}
                        rowKey="_id"
                        scroll={{
                            x: 1000,
                            y: 400
                        }} />
                </div>
            ) : <Spin size="large" className="absolute flex w-screen justify-center h-screen top-1/2" />}
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