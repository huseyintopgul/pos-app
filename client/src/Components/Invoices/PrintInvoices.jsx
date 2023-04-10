import { Button, Modal, } from "antd";


const PrintInvoices = ({ isModalOpen, setIsModalOpen }) => {

    return (
        <>
            <Modal
                width={800}
                title="Fatura Yazdır"
                open={isModalOpen}
                onCancel={() => setIsModalOpen(false)}
                footer={false}>
                <section className="w-full inv-sec py-20 bg-black">
                    <div className="mx-auto bg-white px-6">
                        <article className="overflow-hidden">
                            <div className="logo my-5">
                                <h2 className="text-3xl text-bold text-slate-700">LOGO</h2>
                            </div>
                            {/* invoice details area */}
                            <div className="invoice-details">
                                <div className="grid sm:grid-cols-4 grid-cols-3 gap-12">
                                    <div className="text-md text-slate-500">
                                        <p className="font-bold text-slate-700">Fatura Detayı:</p>
                                        <p>Unwrapped</p>
                                        <p> Fake Street 123</p>
                                        <p> San Javier </p>
                                        <p> CA 1234</p>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <p className="font-bold text-slate-700">Fatura:</p>
                                        The Boring Company
                                        <p> Tesla Street 007</p>
                                        <p> Frisco </p>
                                        <p> CA 0000</p>
                                    </div>
                                    <div className="text-md text-slate-500">
                                        <div>
                                            <p className="font-bold text-slate-700">Fatura numarası:</p>
                                            <p>00041</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">
                                                Veriliş Tarihi:
                                            </p>
                                            <p>2022-11-21</p>
                                        </div>
                                    </div>
                                    <div className="text-md text-slate-500 sm:block hidden">
                                        <div>
                                            <p className="font-bold text-slate-700">Şartlar:</p>
                                            <p>10 gün</p>
                                        </div>
                                        <div>
                                            <p className="font-bold text-slate-700 mt-2">Vade:</p>
                                            <p>2023-11-21</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* tabble area */}
                            <div className="invc-table-area mt-10">
                                <table className="min-w-full divide-y divide-slate-500 overflow-hidden">
                                    <thead>
                                        <tr>
                                            <th
                                                scope="col" className="th-col py-3 text-left text-sm font-normal text-slate-700 sm:pl-6 md:pl-0 sm:table-cell hidden">
                                                Görsel
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 text-left text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden">
                                                Başlık
                                            </th>
                                            <th
                                                colSpan={4}
                                                scope="col"
                                                className="py-3 text-left text-sm font-normal text-slate-700 md:pl-0 sm:hidden">
                                                Başlık
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                            >
                                                Fiyat
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 text-center text-sm font-normal text-slate-700 md:pl-0 sm:table-cell hidden"
                                            >
                                                Adet
                                            </th>
                                            <th
                                                scope="col"
                                                className="py-3 text-end text-sm font-normal text-slate-700 md:pl-4"
                                            >
                                                Toplam
                                            </th>

                                        </tr>

                                    </thead>
                                    <tbody>
                                        <tr className="buy-product border-b border-slate-400">
                                            <td className="py-4 sm:table-cell hidden">
                                                <img
                                                    src="https://images.pexels.com/photos/1437598/pexels-photo-1437598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                                                    alt="product-img"
                                                    className="w-18 h-16 object-cover"
                                                />
                                            </td>
                                            <td className="py-4">
                                                <span className="product-title font-medium">Ejder Meyvesi</span>
                                            </td>
                                            <td className="product-price py-4 text-center sm:table-cell hidden">
                                                <span>289₺</span>
                                            </td>
                                            <td className="product-piece py-4 sm:text-center text-right sm:table-cell hidden">
                                                <span>1</span>
                                            </td>
                                            <td colSpan={4} className="product-total py-4 text-end ">
                                                <span>289₺</span>
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr>
                                            <th
                                                className="text-right pt-4 sm:table-cell hidden"
                                                colSpan="4"
                                                scope="row"
                                            >
                                                <span className="font-normal text-slate-700">
                                                    Ara Toplam
                                                </span>
                                            </th>
                                            <th
                                                className="text-left pt-4 sm:hidden"
                                                scope="row"
                                                colSpan="4"
                                            >
                                                <p className="font-normal text-slate-700">Ara Toplam</p>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">5.319₺</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th
                                                className="text-right pt-4 sm:table-cell hidden"
                                                colSpan="4"
                                                scope="row"
                                            >
                                                <span className="font-normal text-slate-700">KDV</span>
                                            </th>
                                            <th
                                                className="text-left pt-4 sm:hidden"
                                                scope="row"
                                                colSpan="4"
                                            >
                                                <p className="font-normal text-slate-700">KDV</p>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-red-600">+454,88₺</span>
                                            </th>
                                        </tr>
                                        <tr>
                                            <th
                                                className="text-right pt-4 sm:table-cell hidden"
                                                colSpan="4"
                                                scope="row"
                                            >
                                                <span className="font-normal text-slate-700">Genel Toplam</span>
                                            </th>
                                            <th
                                                className="text-left pt-4 sm:hidden"
                                                scope="row"
                                                colSpan="4"
                                            >
                                                <p className="font-normal text-slate-700">Genel Toplam</p>
                                            </th>
                                            <th className="text-right pt-4" scope="row">
                                                <span className="font-normal text-slate-700">5.787,88₺</span>
                                            </th>
                                        </tr>
                                    </tfoot>
                                </table>
                                <div className="py-9">
                                    <div className="border-t pt-9 border-slate-300">
                                        <p className="text-sm font-light text-slate-700">
                                            Ödeme koşulları 14 gündür. Paketlenmemiş Borçların Geç
                                            Ödenmesi Yasası 0000'e göre, serbest çalışanların bu süreden
                                            sonra borçların ödenmemesi durumunda 00.00 gecikme ücreti
                                            talep etme hakkına sahip olduklarını ve bu noktada bu ücrete
                                            ek olarak yeni bir fatura sunulacağını lütfen unutmayın.
                                            Revize faturanın 14 gün içinde ödenmemesi durumunda, vadesi
                                            geçmiş hesaba ek faiz ve %8 yasal oran artı %0,5 Bank of
                                            England tabanı olmak üzere toplam %8,5 uygulanacaktır.
                                            Taraflar Kanun hükümleri dışında sözleşme yapamazlar.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <div className="print-button flex justify-end mt-4">
                    <Button type="primary"> Yazdır </Button>
                </div>
            </Modal>
        </>
    )
}


export default PrintInvoices;