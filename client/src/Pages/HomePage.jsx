import CartTotals from "../Components/Cart/CartTotals";
import Categories from "../Components/Categories/Categories";
import Header from "../Components/Header/Header";
import Products from "../Components/Products/Products";


const HomePage = () => {
    return (
        <>
            <Header />
            <div className="home flex md:flex-row flex-col justify-between px-5 gap-10 md:pb-0 pb-20">
                <div className="categories overflow-auto max-h-[calc(100vh_-_111px)] md:pb-5">
                    <Categories />
                </div>
                <div className="product flex-[7] overflow-auto max-h-[calc(100vh_-_111px)]">
                    <Products />
                </div>
                <div className="cart-wrapper min-w-[300px] md:-mt-[24px] md:-mr-[21px] border ">
                    <CartTotals />
                </div>
            </div>
        </>
    )
}

export default HomePage