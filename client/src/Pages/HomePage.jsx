import { useState, useEffect } from "react";
import CartTotals from "../Components/Cart/CartTotals";
import Categories from "../Components/Categories/Categories";
import Header from "../Components/Header/Header";
import Products from "../Components/Products/Products";
import { message } from "antd";



const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  // categories useState'ini HomePage de tanımlamamızın nedeni; categories state lerini product componentine rahar propslayabilmek
  const [filtered, setFiltered] = useState([]);
  // kategori işlemleri alanı başlangıcı !!
  const [search, setSearch] = useState(" ");
  // products' a p rop olarak geçirmek istediğiiz için header içerisinde yazmıyoruz

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/categories/get-all-categories");
        const data = await response.json();
        // data && operatörünü kullanarak setCategories içerisinde datayı MAP edip mevcut "ITEM" ve o itemın "VALUE" değerlerini return ederek
        // AddProduct içerisinde kullanacağımız "SELECT" için veri oluşturuyoruz. Harici durumda setCategories(data) olarak state güncellemesi yapabiliriz

        data && setCategories(data.map((item) => {
          return { ...item, value: item.title }
        }));
      } catch (error) {
        message.error(error)
      }
    };

    getCategories();
  }, []);
  // kategori işlemleri alanı bitişi !!
  // Product işlemleri başlangıç alanı
  useEffect(() => {
    const getProduct = async () => {
      try {
        const response = await fetch("http://localhost:4000/api/products/get-all-products");
        const data = await response.json();
        setProducts(data)
      }
      catch (error) {
        message.error(error)
      }
    }
    getProduct();
  }, []);
  // product işlemleri alanı bitişi !!

  return (
    <>
      <Header setSearch={setSearch} />
      <div className="home flex md:flex-row flex-col justify-between px-5 gap-10 md:pb-0 pb-20">
        <div className="categories overflow-auto max-h-[calc(100vh_-_111px)] md:pb-5">
          <Categories
            categories={categories}
            setCategories={setCategories}
            products={products}
            setFiltered={setFiltered} />
        </div>
        <div className="product flex-[7] pb-4 min-h-[500px] overflow-y-auto max-h-[calc(100vh_-_111px)]">
          <Products
            categories={categories}
            products={products}
            setProducts={setProducts}
            filtered={filtered}
            search={search} />
          {/* ürünlerin "produtcs" içerisinde sıralanması için filtered' ı buraya props geçiyoruz
             */}
        </div>
        <div className="cart-wrapper min-w-[300px] md:-mt-[24px] md:-mr-[21px] border ">
          <CartTotals />
        </div>
      </div>
    </>
  )
}

export default HomePage