
const StatisticCard = ({ tittle, amount, img, alt }) => {
   

    return (
        <>
            <div className="cart-details bg-slate-700 flex flex-row py-9 px-3 rounded-lg cursor-pointer">
                <div className="cart-icon ml-5 mr-5">
                    <img src={img} alt={alt}
                        className='w-16 h-16 rounded-full bg-white object-cover' />
                </div>
                <div className="cart-detail flex flex-col text-white ml-4">
                    <span className='mb-2 text-xl text-slate-300'> {tittle} </span>
                    <span className='text-2xl'> {amount} </span>
                </div>
            </div>

            {/* StatisticPage sayfasından aldığımız "tittle-amount-img-alt" propsları  ile burada oluşturduğumuz bir adet Card içerisinen
                    farklı farklı cardlar oluşturabiliyoruz */}
        </>
    )
}

export default StatisticCard;