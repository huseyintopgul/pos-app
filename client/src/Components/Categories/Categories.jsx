import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";
import { Button, Form, Input, message, Modal } from "antd";
import "./Style.css";

const Categories = ({ categories, setCategories }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [form] = Form.useForm();

    const categoryAdd = (values) => {
        try {
            fetch("http://localhost:4000/api/categories/add-category", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Kategori başarıyla eklendi.");
            form.resetFields();
            setCategories([...categories, values]);
        } catch (error) {
            console.log(error);
        }
    };


    return (
        <ul className="cat-ul flex md:flex-col gap-3 text-center z-100 ">

            {categories.map((item) => (
                <li className="category-item" key={item._id}>
                    <span>{item.title}</span>
                </li>
            ))}
            <li
                className="category-item !bg-purple-800 hover:opacity-90"
                onClick={() => setIsAddModalOpen(true)}
            >
                <PlusOutlined className="md:text-2xl" />
            </li>
            <Modal
                title="Yeni Kategori Ekle"
                open={isAddModalOpen}
                onCancel={() => setIsAddModalOpen(false)}
                footer={false}
            >
                <Form layout="vertical" onFinish={categoryAdd} form={form}>
                    <Form.Item
                        name="title"
                        label="Kategori Ekle"
                        rules={[
                            { required: true, message: "Kategori Alanı Boş Geçilemez!" },
                        ]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item className="flex justify-end mb-0">
                        <Button type="primary" htmlType="submit">
                            Oluştur
                        </Button>
                    </Form.Item>

                </Form>
            </Modal>
        </ul>
    )
}

export default Categories