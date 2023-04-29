import React, { useEffect, useState } from 'react';
import { Button, Form, Table, message, Modal, Select, Input } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons"
import { useForm } from 'antd/es/form/Form';


const EditProduct = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [editProduct, setEditProduct] = useState({})
    const [isEditModalOpen, setIsEditModalOpen] = useState(false)
    const [form] = useForm();



    useEffect(() => {
        const getProduct = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_SERVER_URL + "/api/products/get-all-products");
                const data = await response.json();
                setProducts(data)
            }
            catch (error) {
                message.error(error)
            }
        }
        getProduct();
    }, []);

    useEffect(() => {
        const getCategories = async () => {
            try {
                const response = await fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/get-all-categories");
                const data = await response.json();
                // data && operatörünü kullanarak setCategories içerisinde datayı MAP edip mevcut "ITEM" ve o itemın "VALUE" değerlerini return ederek
                // AddProduct içerisinde kullanacağımız "SELECT" için veri oluşturuyoruz. Harici durumda setCategories(data) olarak state güncellemesi yapabiliriz

                data && setCategories(data.map((item) => {
                    return { ...item, value: item.title }
                }));
            } catch (error) {
                message.error(error)
            }
        };

        getCategories();
    }, []);

    // product-table içerisinde yer alan SAVE butonu için kullandığımız ""productEdit"" fonksiyonu. 
    const productEdit = (values) => {
        try {
            fetch(process.env.REACT_APP_SERVER_URL + "/api/products/update-product", {
                method: "PUT",
                body: JSON.stringify({ ...values, productId: editProduct._id }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            message.success("Güncelleme işlemi başarılı.")
            setProducts(
                products.map((item) => {
                    if (item._id === editProduct._id) {
                        return values;
                    }
                    return item;
                }));
        }
        catch (error) {
            message.error("Güncelleme işlemi yapılamadı!");
        }
    };

    const productDel = (id) => {
        if (window.confirm("Emin Misiniz?")) {
            try {
                fetch(process.env.REACT_APP_SERVER_URL + "/api/products/delete-product", {
                    method: "DELETE",
                    body: JSON.stringify({ productId: id }),
                    headers: { "Content-type": "application/json; charset=UTF-8" }
                })
                setProducts(
                    products.filter((item) => item._id !== id))
                message.success("Silme işlemi başarılı.")
            }
            catch (error) {
                message.error("Silme işlemi yapılamadı!");
            }
        }
    };


    const productsCalumns = [
        {
            title: "Ürün Adı",
            dataIndex: "title",
            width: "10%",
            render: (_, record) => {
                return <p>{record.title}</p>
            },
        },
        {
            title: "Ürün Görseli",
            dataIndex: "img",
            width: "7%",
            render: (_, record) => {
                return <img src={record.img} alt="" className='object-cover w-full h-20' />;
            },
        },
        {
            title: "Ürün Fiyatı",
            dataIndex: "price",
            width: "10%",
        },
        {
            title: "Kategori",
            dataIndex: "category",
            width: "10%",
        },
        {
            title: "İşlem",
            dataIndex: "islem",
            width: "10%",
            // table içerisine return açmamızın nedeni; "RENDER" ile table içerisine harici butonlar eklememizdir
            render: (_, record) => {
                return (
                    <div className="render flex flex-row justify-around h-s">
                        <Button
                            onClick={() => {
                                setIsEditModalOpen(true);
                                setEditProduct(record);
                            }}
                            type="link"> <EditOutlined className="text-blue-600" />
                        </Button>
                        <Button
                            htmlType="submit"
                            onClick={() => productDel(record._id)}
                            danger
                            type="text">
                            <DeleteOutlined />
                        </Button>
                    </div>
                );
            },
        },
    ];


    return (
        <>
            <Table bordered
                dataSource={products}
                columns={productsCalumns}
                rowKey={"_id"}
                scroll={{
                    x: 1000,
                    y: 600,
                }}
            />
            <Modal
                title="Ürünü Düzenle"
                open={isEditModalOpen}
                onCancel={() => setIsEditModalOpen(false)}
                footer={false}
            >
                <Form layout="vertical" onFinish={productEdit} form={form} initialValues={editProduct}>
                    <Form.Item
                        label={"Ürün Adı"}
                        name={"title"}
                        rules={[{
                            required: true,
                            message: "Ürün adı alanı boş geçilemez!"
                        }]}
                    >
                        <Input placeholder="Ürün adı giriniz." />
                    </Form.Item>
                    <Form.Item
                        label={"Ürün Görseli"}
                        name={"img"}
                        rules={[{
                            required: true,
                            message: "Ürün görseli alanı boş geçilemez!"
                        }]}
                    >
                        <Input placeholder="Ürün görseli giriniz." />
                    </Form.Item>
                    <Form.Item
                        label={"Ürün Fiyatı"}
                        name={"price"}
                        rules={[{
                            required: true,
                            message: "Ürün fiyatı alanı boş geçilemez!"
                        }]}
                    >
                        <Input placeholder="Ürün fiyatı giriniz." />
                    </Form.Item>
                    <Form.Item
                        label={"Ürün Kategorisi Seçiniz"}
                        name={"category"}
                        rules={[{
                            required: true,
                            message: "Ürün kategori alanı boş geçilemez!"
                        }]}>
                        <Select
                            showSearch
                            placeholder="Ürün kategorisi seçiniz."
                            optionFilterProp="children"
                            filterOption={(input, option) => (option?.title ?? '').includes(input)}
                            filterSort={(optionA, optionB) =>
                                (optionA?.title ?? '').toLowerCase().localeCompare((optionB?.title ?? '').toLowerCase())
                            }
                            options={categories}
                        />
                    </Form.Item>
                    <Form.Item className="flex justify-end mb-0">
                        <Button type="primary" htmlType="submit"> Düzenle </Button>
                    </Form.Item>
                </Form>
            </Modal>

        </>
    )
}

export default EditProduct;
