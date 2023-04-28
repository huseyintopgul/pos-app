import { Button, Form, Input, Carousel, message } from "antd";
import { Link, useNavigate } from "react-router-dom";
import AuthCarousel from "../../Components/Auth/AuthCarosel";
import { useState } from "react";


const RegisterPage = () => {
    const [form] = Form.useForm();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const register = async (values) => {
        setLoading(true);
        try {
            const res = await fetch("http://localhost:4000/api/auth/register", {
                method: "POST",
                body: JSON.stringify(values),
                headers: { "Content-type": "application/json; charset=UTF-8" },
            });
            if (res.status === 200) {
                message.success("kayıt işlemi başarılı");
                form.resetFields();
                navigate("/login");
                setLoading(false);
            }
        }
        catch (error) {
            message.error(error);
        }
    };

    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative bg-slate-100">
                    <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
                    <h3 className="text-center text-2xl mb-10 mt-5">Kaydol</h3>
                    <Form layout="vertical" onFinish={register} form={form}>
                        <Form.Item
                            label="Kullanıcı Adı"
                            name={"userName"}
                            rules={[
                                {
                                    required: true,
                                    message: "Kullanıcı Adı Alanı Boş Bırakılamaz!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="E-mail"
                            name={"email"}
                            rules={[
                                {
                                    required: true,
                                    message: "E-mail Alanı Boş Bırakılamaz!",
                                },
                            ]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="Şifre"
                            name={"password"}
                            rules={[
                                {
                                    required: true,
                                    message: "Şifre Alanı Boş Bırakılamaz!",
                                },
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item
                            label="Şifre Tekrar"
                            name={"passwordAgain"}
                            dependencies={["password"]}
                            rules={[
                                {
                                    required: true,
                                    message: "Şifre Tekrar Alanı Boş Bırakılamaz!",
                                },
                                ({ getFieldValue }) => ({
                                    validator(_, value) {
                                        if (!value || getFieldValue('password') === value) {
                                            return Promise.resolve();
                                        }
                                        return Promise.reject(new Error('Girmiş olduğunuz şifreler uyuşmamaktadır!'));
                                    },
                                }),
                            ]}
                        >
                            <Input.Password />
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full"
                                size="large"
                                loading={loading}
                            >
                                Kaydol
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="flex justify-center absolute left-0 bottom-10 w-full">
                        Bir hesabınız var mı?&nbsp;
                        <Link to="/login" className="text-blue-600">
                            Şimdi giriş yap
                        </Link>
                    </div>
                </div>
                <div className="xl:w-4/6 lg:w-3/5 md:w-1/2 md:flex hidden bg-green-600 h-full">
                    <div className="w-full h-full flex items-center">
                        <div className="w-full">
                            <Carousel className="!h-full px-6" autoplay>
                                <AuthCarousel
                                    img="/images/responsive.svg"
                                    title="Responsive"
                                    desc="Tüm Cihaz Boyutlarıyla Uyumluluk"
                                />
                                <AuthCarousel
                                    img="/images/statistic.svg"
                                    title="İstatistikler"
                                    desc="Geniş Tutulan İstatistikler"
                                />
                                <AuthCarousel
                                    img="/images/customer.svg"
                                    title="Müşteri Memnuniyeti"
                                    desc="Deneyim Sonunda Üründen Memnun Müşteriler"
                                />
                                <AuthCarousel
                                    img="/images/admin.svg"
                                    title="Yönetici Paneli"
                                    desc="Tek Yerden Yönetim"
                                />
                            </Carousel>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default RegisterPage