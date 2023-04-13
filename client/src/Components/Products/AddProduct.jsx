import { Form, Modal, Input, Button, Select, message } from "antd";

const AddProduct = ({ isAddModalOpen, setIsAddModalOpen, categories, products, setProducts }) => {
    const [form] = Form.useForm();

    const productAdd = (values) => {
        try {
            fetch("http://localhost:4000/api/products/add-product", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            message.success("Ürün ekleme işleminiz başarıyla gerçekleştirilmiştir.");
            form.resetFields();
            setProducts([...products, {
                ...values,
                _id: Math.random(),
                price: Number(values.price),
            }]);
            setIsAddModalOpen(false)
        } catch (error) {
            message.error(error)
        }
    };

    return (
        <>
            <Modal
                title="Yeni Ürün Ekle"
                open={isAddModalOpen}
                onCancel={() => setIsAddModalOpen(false)}
                footer={false}
            >
                <Form layout="vertical" onFinish={productAdd} form={form}>
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
                        <Button type="primary" htmlType="submit"> Ekle </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}


export default AddProduct;