import { Form, Modal, Input, Select, Card, Button } from "antd";

const CreateInvoice = ({isModalOpen, setIsModalOpen}) => {
    // CartPage'den gönderilen isModalOpen, setIsModalOpen statelerini burada prop olarak karşılıyoruz ve Modal içerisine aktarıyoruz.
    // !!! karşıladığımız props ların function olarak çalışabilmesi için " { } " içerisinde bulunması gerekli !!!!
    const onFinish = (values) => {
        // onFinish fonksiyonu ile "Form" içersinde girilen value ları toplu olarak dışarı çekebiliyoruz
        console.log("girilen değerler:", values);
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
                    name={"phoneNumber"}
                    rules={[
                        {
                            required: true,
                            message: 'Lütfen Geçerli Bir Telefon Numarası Giriniz!',
                        },
                    ]}>
                        <Input placeholder="Telefon Numaranızı Giriniz" maxLength={11} minLength={11}/>
                    </Form.Item>
                    <Form.Item 
                    label="Ödeme Yöntemi"
                    name={"paymentMod"}
                    rules={[
                        {
                            required:true,
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
                                <span className="">1.000₺</span>
                            </div>
                            <div className="ara-toplam py-2 flex flex-row justify-between">
                                <span className="">Toplam KDV %18</span>
                                <span className="text-red-600">+540₺</span>
                            </div>
                            <div className="ara-toplam flex flex-row justify-between font-bold">
                                <span className="">Toplam Tutar</span>
                                <span className="">1.540₺</span>
                            </div>
                            <div className="ara-toplam mt-5">
                                <Button className="w-full tracking-wider display-block" 
                                type="primary" size="large"
                                onClick={() => setIsModalOpen(true)}
                                htmlType="submit"
                                >Siparişi Tamamla</Button>
                            </div>
                        </div>
                    </Card>
                </Form>
            </Modal>
        </>
    )
}

export default CreateInvoice;