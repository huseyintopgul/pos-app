import { Button, Form, Input, Carousel, Checkbox } from "antd";
import { Link } from "react-router-dom";
import AuthCarousel from "../../Components/Auth/AuthCarosel";


const LoginPage = () => {

    return (
        <div className="h-screen">
            <div className="flex justify-between h-full">
                <div className="xl:px-20 px-10 w-full flex flex-col h-full justify-center relative bg-slate-100">
                    <h1 className="text-center text-5xl font-bold mb-2">LOGO</h1>
                    <h3 className="text-center text-2xl mb-10 mt-5">Giriş Yap</h3>
                    <Form layout="vertical">
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
                        <Form.Item name={"remember"} valuePropName="checked">
                            <div className="flex justify-between">
                                <Checkbox> Beni Hatırla.</Checkbox>
                                <Link to="/"> Şifremi Unuttum!</Link>
                            </div>
                        </Form.Item>
                        <Form.Item>
                            <Button
                                type="primary"
                                htmlType="submit"
                                className="w-full"
                                size="large"
                            >
                                Giriş Yap
                            </Button>
                        </Form.Item>
                    </Form>
                    <div className="flex justify-center absolute left-0 bottom-10 w-full">
                        Henüz bir hesabınız yok mu?&nbsp;
                        <Link to="/register" className="text-blue-600">
                            Şimdi kaydol.
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


export default LoginPage