import Header from '../Components/Header/Header'
import { useState, useEffect } from 'react';
import StatisticCard from '../Components/Statistics/StatisticCard'
import { Area, Pie } from '@ant-design/plots';



const StatisticPage = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        asyncFetch();
    }, []);


    const asyncFetch = () => {
        fetch('https://gw.alipayobjects.com/os/bmw-prod/360c3eae-0c73-46f0-a982-4746a6095010.json')
            .then((response) => response.json())
            .then((json) => setData(json))
            .catch((error) => {
                console.log('fetch data failed', error);
            });
    };

    const config = {
        data,
        xField: 'timePeriod',
        yField: 'value',
        xAxis: {
            range: [0, 1],
        },
    };


    const data2 = [
        {
            type: '1',
            value: 27,
        },
        {
            type: '2',
            value: 25,
        },
        {
            type: '3',
            value: 18,
        },
        {
            type: '4',
            value: 15,
        },
        {
            type: '5',
            value: 10,
        },
        {
            type: '6',
            value: 5,
        },
    ];
    // congig-2 area

    const config2 = {
        appendPadding: 10,
        data: data2,
        angleField: 'value',
        colorField: 'type',
        radius: 1,
        innerRadius: 0.6,
        label: {
            type: 'inner',
            offset: '-50%',
            content: '{value}',
            style: {
                textAlign: 'center',
                fontSize: 14,
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
                content: 'AntV\nG2Plot',
            },
        },
    };



    return (
        <>
            <Header />
            <div className='px-6 overflow-auto'>
                <h2 className="inv-hed text-4xl text-bold text-center mb-4">İstatistiklerim</h2>
                <div className='ml-3'>
                    <h3 className='text-lg'>Hoş geldin <span className='text-green-600 text-xl font-bold'>admin</span> </h3>
                </div>
                {/* statistic cart details area */}

                <div className="statistic-cards my-6 px-3 grid gap-3 xl:grid-cols-statistic-card md:grid-cols-2">
                    {/* grid-cols-statistic-card' tailwind.config.js dosyasından değişken olarak çekiyoruz. */}
                    <StatisticCard tittle={"Toplam Müşteri"} amount={"17"} img={"https://cdn2.iconfinder.com/data/icons/user-23/512/User_Customers.png"} alt={"card-details"} />
                    <StatisticCard tittle={"Toplam Kazanç"} amount={"6.756₺"} img={"https://cdn-icons-png.flaticon.com/512/925/925014.png"} alt={"card-details"} />
                    <StatisticCard tittle={"Toplam Satış"} amount={"13"} img={"https://cdn-icons-png.flaticon.com/512/2275/2275927.png"} alt={"card-details"} />
                    <StatisticCard tittle={"Toplam Ürün"} amount={"25"} img={"https://cdn-icons-png.flaticon.com/512/2875/2875878.png"} alt={"card-details"} />
                    {/* StatisticPage için oluşturduğumuz StatisticCard Componentine "tittle-amount-img-alt" propsları gönderip diğer sayfada yazılacak kodu
                    sayısını azaltıyoruz */}
                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 pb-20 gap-5 items-center mt-15 px-5'>
                    <div>
                        <Area {...config} />
                    </div>
                    <div className=''>
                        <Pie {...config2} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default StatisticPage
