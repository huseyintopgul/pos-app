import { Form, Modal, Input, Button } from "antd";

const AddProduct = ({ isAddModalOpen, setIsAddModalOpen }) => {
    return (
        <>
            <Modal
                title="Yeni Ürün Ekle"
                open={isAddModalOpen}
                onCancel={() => setIsAddModalOpen(false)}
                footer={false}
            >
                <Form layout="vertical">
                    <Form.Item
                        label={"Yeni Ürün"}
                        name={"title"}
                        rules={[{
                            required: true,
                            message: "Belirtilen alanları lütfen eksiksiz doldurunuz!"
                        }]}
                    >
                        <Input />
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