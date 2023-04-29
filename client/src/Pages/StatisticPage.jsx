import Header from '../Components/Header/Header'
import { useState, useEffect } from 'react';
import StatisticCard from '../Components/Statistics/StatisticCard'
import { Area, Pie } from '@ant-design/plots';
import { Spin, message } from 'antd';


const StatisticPage = () => {
    const [products, setProducts] = useState();
    const [data, setData] = useState([]);
    const user = JSON.parse(localStorage.getItem("systemUser"));

    useEffect(() => {
        asyncFetch();
    }, []);
    useEffect(() => {

        const getProducts = async () => {
            try {
                const res = await fetch("http://localhost:4000/api/products/get-all-products");
                const data = await res.json();
                setProducts(data);
            }
            catch (error) {
                message.error("İşlem başarısız.")
            }
        }
        getProducts();
    }, [])

    const asyncFetch = () => {
        fetch('http://localhost:4000/api/invoices/get-all-invoices')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    const config = {
        data,
        xField: 'customerName',
        yField: 'subTotal',
        xAxis: {
            range: [0, 1],
        },
    };



    // congig-2 area

    const config2 = {
        appendPadding: 10,
        data,
        angleField: 'subTotal',
        colorField: 'customerName',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 10,
            },
        },
        interactions: [
            {
                type: 'element-selected',
            },
            {
                type: 'element-active',
            },
        ],
        statistic: {
            title: false,
            content: {
                style: {
                    whiteSpace: 'pre-wrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                },
                content: 'Genel\nToplam',
            },
        },
    };

    const totalAmount = () => {
        const amount = data.reduce((total, item) => item.totalAmount + total, 0);
        return `${amount.toFixed(2)} ₺`;
    };

    return (
        <>
            <Header />
            <h2 className="inv-hed text-4xl text-bold text-center mb-4">İstatistiklerim</h2>
            {products ? (
                <div className='px-6 overflow-auto'>
                    <div className='ml-3'>
                        <h3 className='text-lg'>Hoş geldin <span className='text-green-600 text-xl font-bold'> {user.user} </span> </h3>
                    </div>
                    {/* statistic cart details area */}

                    <div className="statistic-cards my-6 px-3 grid gap-3 xl:grid-cols-statistic-card md:grid-cols-2">
                        {/* grid-cols-statistic-card' tailwind.config.js dosyasından değişken olarak çekiyoruz. */}
                        <StatisticCard tittle={"Toplam Müşteri"} amount={data?.length} img={"https://cdn2.iconfinder.com/data/icons/user-23/512/User_Customers.png"} alt={"card-details"} />
                        <StatisticCard tittle={"Toplam Kazanç"} amount={totalAmount()} img={"https://cdn-icons-png.flaticon.com/512/925/925014.png"} alt={"card-details"} />
                        <StatisticCard tittle={"Toplam Satış"} amount={data?.length} img={"https://cdn-icons-png.flaticon.com/512/2275/2275927.png"} alt={"card-details"} />
                        <StatisticCard tittle={"Toplam Ürün"} amount={products?.length} img={"https://cdn-icons-png.flaticon.com/512/2875/2875878.png"} alt={"card-details"} />
                        {/* StatisticPage için oluşturduğumuz StatisticCard Componentine "tittle-amount-img-alt" propsları gönderip diğer sayfada yazılacak kodu
                    sayısını azaltıyoruz */}
                    </div>
                    <div className='grid md:grid-cols-2 grid-cols-1 pb-20 gap-5 items-center mt-15 px-5'>
                        <div className='lg:w1/2 lg:h-80'>
                            <Area {...config} />
                        </div>
                        <div className='lg:w1/2 lg:h-80'>
                            <Pie {...config2} />
                        </div>
                    </div>
                </div>
            ) : <Spin size="large" className="absolute flex w-screen justify-center h-screen top-1/2" />}
        </>
    )
}

export default StatisticPage
