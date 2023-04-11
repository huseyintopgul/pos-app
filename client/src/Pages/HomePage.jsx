import { useState, useEffect } from "react";
import CartTotals from "../Components/Cart/CartTotals";
import Categories from "../Components/Categories/Categories";
import Header from "../Components/Header/Header";
import Products from "../Components/Products/Products";


const HomePage = () => {
    const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/categories/get-all-categories");
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCategories();
  }, []);

    return (
        <>
            <Header />
            <div className="home flex md:flex-row flex-col justify-between px-5 gap-10 md:pb-0 pb-20">
                <div className="categories overflow-auto max-h-[calc(100vh_-_111px)] md:pb-5">
                    <Categories categories={categories} setCategories={setCategories}  />
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