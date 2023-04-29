import { Button, Form, Input, message, Modal } from "antd";


const AddCategory = ({ isAddModalOpen, setIsAddModalOpen, categories, setCategories }) => {
    const [form] = Form.useForm();

    const categoryAdd = (values) => {
        try {
            fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/add-category", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            message.success("Kategori başarıyla eklendi.");
            form.resetFields();
            setCategories([...categories, {
                _id: Math.random(),
                title: values.title
            }]);
            setIsAddModalOpen(false);
        } catch (error) {
            message.error(error);
        }
    };
    return (
        <>
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

        </>
    )
}

export default AddCategory;





