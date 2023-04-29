import { useEffect, useRef, useState } from "react";
import Header from "../Components/Header/Header"
import { Table, message, Input, Space, Button, Spin } from "antd";
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';


const CustomersPage = () => {
    const [invoiceItems, setInvoiceItems] = useState();
    const [searchText, setSearchText] = useState(" ");
    const [searchedColumn, setSearchedColumn] = useState(" ");
    const searchInput = useRef(null);

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
    // table area start

    const columns = [
        {
            title: 'Müşteri Adı',
            dataIndex: 'customerName',
            key: 'customerName',
            ...getColumnSearchProps("custonerName")
        },
        {
            title: 'Telefon Numarası',
            dataIndex: 'customerPhoneNumber',
            key: 'customerPhoneNumber',
            ...getColumnSearchProps("customerPhoneNumber")
        },
        {
            title: 'İşlem Tarihi',
            dataIndex: 'createdAt',
            key: 'createdAt',
            render: (record) => {
                return (<span>{record.substring(0, 10)} </span>)
            },
            sorter: (a, b) => a.createdAt - b.createdAt,
        },
    ];
    return (
        <>
            <Header />
            <h2 className="i nv-hed text-4xl text-bold text-center mb-4">Müşterilerim</h2>
            {invoiceItems ? (
                <div className="cart-page px-6">
                    <Table
                        dataSource={invoiceItems}
                        columns={columns}
                        bordered
                        pagination={false}
                        rowKey="_id"
                        scroll={{
                            x: 600,
                            y: 500
                        }} />

                </div>
            ) : <Spin size="large" className="absolute flex w-screen justify-center h-screen top-1/2" />}
        </>
    )
}

export default CustomersPage

