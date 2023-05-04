import { useRef, useState } from "react";
import Header from "../Components/Header/Header";
import { Table, Card, Button, Input, message, Space } from "antd"
import CreateInvoice from "../Components/Cart/CreateInvoice";
import { useDispatch, useSelector } from "react-redux";
import { MinusCircleOutlined, PlusCircleOutlined, SearchOutlined } from '@ant-design/icons';
import { increase, decrease, deleteCart } from "../Redux/CartSlice";
import Highlighter from 'react-highlight-words';


const CartPage = () => {
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
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch();
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
            ...getColumnSearchProps('title'),
        },
        {
            title: 'Kategori',
            dataIndex: 'category',
            key: 'category',
            ...getColumnSearchProps('category'),
        },
        {
            title: 'Ürün Fiyatı',
            dataIndex: 'price',
            key: 'price',
            render: (text, _) => {
                return (
                    <span> {text} ₺ </span>
                )
            },
            sorter: (a, b) => a.price - b.price,
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
                        x: 1200,
                        y: 400,
                    }} />
                <div className="cart-totals flex justify-end py-10 px-6 ">
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
                                    {(Number((cart.total * cart.tax)) / 100).toFixed(2)} ₺
                                </span>
                            </div>
                            <div className="ara-toplam py-1 px-3 flex flex-row justify-between font-bold">
                                <span className="">Toplam Tutar</span>
                                <span className="">
                                    {((Number((cart.total)) + Number(cart.total) * Number(cart.tax) / 100)).toFixed(2)} ₺
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
            {/* isModalOpen, setIsModalOpen statelerini props olarak "CreateInvoice" Componentine aktarıyoruz */}
        </>
    )
}

export default CartPage;