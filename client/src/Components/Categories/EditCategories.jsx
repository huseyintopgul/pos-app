import { Button, Form, Input, Modal, Table, message } from "antd";
import { EditOutlined, SaveOutlined, DeleteOutlined } from "@ant-design/icons"
import { useState } from "react";

const EditCategories = ({ isModalOpen, setIsModalOpen, categories, setCategories }) => {
    const [editRow, setEditRow] = useState({})

    // kategory-table içerisinde yer alan SAVE butonu için kullandığımız ""categoryEdit"" fonksiyonu. 
    const categoryEdit = (values) => {
        try {
            fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/update-category", {
                method: "PUT",
                body: JSON.stringify({ ...values, categoryId: editRow._id }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            message.success("Güncelleme işlemi başarılı.")
            setCategories(categories.map((item) => {
                if (item._id === editRow._id) {
                    return { ...item, title: values.title }
                }
                return item;
            }))
        }
        catch (error) {
            message.error("Güncelleme işlemi yapılamadı!");
        }
    }
    // kategory-table içerisinde yer alan SİL butonu için kullandığımız ""categoryDel"" fonksiyonu

    const categoryDel = (id) => {
        try {
            fetch(process.env.REACT_APP_SERVER_URL + "/api/categories/delete-category", {
                method: "DELETE",
                body: JSON.stringify({ categoryId: id }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            })
setCategories(categories.filter((item) => item._id !== id))
            message.success("Silme işlemi başarılı.")
        }
        catch (error) {
            message.error("Silme işlemi yapılamadı!");
        }

    }

    const tableCalumns = [
        {
            title: "Mevcut Kategoriler",
            dataIndex: "title",
            render: (_, record) => {
                // render özelliği ile table içerisine yeni elementler ekleyebiliyoruz.
                if (record._id === editRow._id) {
                    return (
                        <Form.Item className="mb-0" name="title">
                            <Input defaultValue={record.title} />
                        </Form.Item>
                    )
                } else {
                    return (record.title)
                };
            },
        },
        {
            title: "İşlem",
            dataIndex: "islem",
            render: (_, record) => {
                return (
                    <div className="render">
                        <Button onClick={() => setEditRow(record)}
                            type="text"> <EditOutlined className="text-blue-600" />
                        </Button>
                        <Button
                            htmlType="submit"
                            className="mx-1" type="text">
                            <SaveOutlined className="text-green-500" />
                        </Button>
                        <Button
                            htmlType="submit"
                            onClick={() => categoryDel(record._id)}
                            danger
                            type="text">
                            <DeleteOutlined />
                        </Button>
                    </div>
                )
            }
        }
    ]

    return (
        <>
            <Modal
                title="Kategorileri İşlemleri"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={false}
            >
                <Form onFinish={categoryEdit}>
                    <Form.Item>
                        <Table bordered
                            dataSource={categories}
                            columns={tableCalumns}
                            rowKey={"_id"} />
                    </Form.Item>
                </Form>
            </Modal>

        </>
    )
}

export default EditCategories;