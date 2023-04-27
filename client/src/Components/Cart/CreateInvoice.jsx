import { Form, Modal, Input, Select, Card, Button, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../../Redux/CartSlice";

const CreateInvoice = ({ isModalOpen, setIsModalOpen }) => {
    const cart = useSelector((state) => state.cart)
    const navigate = useNavigate();
    const dispatch = useDispatch()
    // CartPage'den gönderilen isModalOpen, setIsModalOpen statelerini burada prop olarak karşılıyoruz ve Modal içerisine aktarıyoruz.
    // !!! karşıladığımız props ların function olarak çalışabilmesi için " { } " içerisinde bulunması gerekli !!!!
    const onFinish = async (values) => {
        // onFinish fonksiyonu ile "Form" içersinde girilen value ları toplu olarak dışarı çekebiliyoruz
        try {
            const res = await fetch("http://localhost:4000/api/invoices/add-invoice", {
                method: "POST",
                body: JSON.stringify({
                    ...values,
                    subTotal: cart.total,
                    tax: cart.tax,
                    totalAmount: (Number((cart.total)) + Number(((cart.total * cart.tax) / 100))).toFixed(2),
                    cartItems: cart.cartItems,
                }),
                headers: { "Content-type": "application/json; charset=UTF-8" }
            });
            if (res.status === 200) {
                message.success("İşlem başarılı.");
                dispatch(clearCart());
                navigate("/invoices");
            };
        }
        catch (error) {
            message.error("İşlem gerçekleştirilemedi");
        }
    }
    return (
        <>
            <Modal title="Fatura Oluştur"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={false} >
                <Form layout="vertical" onFinish={onFinish}>
                    {/* onFinish ' i "Form" içererisine yazmamızın nedeni içeride girilen value ları kolayca alabilmek */}
                    <Form.Item
                        label="Müşteri Adı"
                        name={"customerName"}
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen Adınızı Giriniz!',
                            },
                        ]}>
                        <Input placeholder="Adınızı Giriniz" />
                    </Form.Item>
                    <Form.Item
                        label="Tel No"
                        name={"customerPhoneNumber"}
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen Geçerli Bir Telefon Numarası Giriniz!',
                            },
                        ]}>
                        <Input placeholder="Telefon Numaranızı Giriniz" maxLength={11} minLength={11} />
                    </Form.Item>
                    <Form.Item
                        label="Ödeme Yöntemi"
                        name={"paymentMod"}
                        rules={[
                            {
                                required: true,
                                message: 'Lütfen Bir Ödeme Yöntemi Seçiniz!'
                            }
                        ]}>
                        <Select placeholder="Lütfen Bir Ödeme yöntemi Seçiniz">
                            <Select.Option value="Nakit">Nakit</Select.Option>
                            <Select.Option value="Kredi Kartı">Kredi Kartı</Select.Option>
                        </Select>
                    </Form.Item>
                    <Card className="w-full">
                        <div className="ara-total flex flex-col">
                            <div className="ara-toplam flex flex-row justify-between">
                                <span className="">Ara Toplam</span>
                                <span className=""> {Number(cart.total).toFixed(2)} ₺ </span>
                            </div>
                            <div className="ara-toplam py-2 flex flex-row justify-between">
                                <span className="">KDV %{cart.tax}</span>
                                <span className="text-red-600"> {(Number(cart.total * cart.tax) / 100).toFixed(2)} ₺</span>
                            </div>
                            <div className="ara-toplam flex flex-row justify-between font-bold">
                                <span className="">Toplam Tutar</span>
                                <span className=""> {(Number(cart.total) + Number((cart.total * cart.tax) / 100)).toFixed(2)} ₺</span>
                            </div>
                            <div className="ara-toplam mt-5">
                                <Button className="w-full tracking-wider display-block"
                                    type="primary" size="large"
                                    onClick={() => setIsModalOpen(true)}
                                    htmlType="submit"
                                    disabled={cart.cartItems.length === 0}
                                >Siparişi Oluştur</Button>
                            </div>
                        </div>
                    </Card>
                </Form>
            </Modal>
        </>
    )
}

export default CreateInvoice;