import { Form, Modal, Table } from "antd";

const EditCategories = ({isModalOpen, setIsModalOpen,}) => {
    return (
        <>
        <Modal
        title="Kategorileri İşlemleri"
        open={isModalOpen}
        onCancel={() => setIsModalOpen(false)}
        footer={false}
        >
            <Form>
                <Form.Item>
                    <Table bordered />
                </Form.Item>
            </Form>
        </Modal>
        
        </>
    )
}

export default EditCategories;