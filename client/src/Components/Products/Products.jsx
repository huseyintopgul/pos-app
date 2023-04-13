import { useState, useEffect } from "react";
import { message } from "antd";
import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import AddProduct from "./AddProduct";
import { useNavigate } from "react-router-dom";


const Products = ({ categories, setCategories }) => {
    const [products, setProducts] = useState([]);
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const navigate = useNavigate();

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

    return (
        <div className="product-wrapper grid gap-4 grid-cols-card">
            {/* - css ile bu girid modelini bu alana uygulayabiliriz.
                    style={{gridTemplateColumns: "repeat(auto-fill, minmax(150px, 1fr)"}}
                - aynı durumu Tailwind ile sağlamak için "tailwind.config.js - extend:{}" içerisine configrasyon yazmalıyız.
                    extend: { gridTamplateColomns: {
                                "card":"repeat(auto-fill, minmax(150px, 1fr))"
                    }},
                - gridTamplateColomns içerisine "card" olarak gerekli değerleri tanımladıktan sonra bunu component alanında kullanabiliriz.
            */}

            {products.map((item) => (
                <div key={item._id} className="product-item border cursor-pointer hover:shadow-xl transition-all select-none,">
                    <div className="product-img">
                        <img src={item.img} alt={item.title}
                            className="product-img h-28 object-cover w-full border-b" />
                        {/* product-img için width-full özelliğini tanımlasak bile kapsayıcı wrapper için grid yapısını kullanacağımızdan dolayı,
                              burada tanımlı w-full kendisi için belirtilen alanı dolduracaktır. */}
                    </div>
                    <div className="product-info flex flex-col text-center">
                        <span className="prodoct-name font-bold">{item.title}</span>
                        <span className="product-price font-bold">{item.price}₺</span>
                    </div>
                </div>
            ))}
            <div onClick={() => setIsAddModalOpen(true)}
                className="add-prd min-h-[120px]  opacity-90 !bg-purple-800 hover:opacity-100 flex items-center justify-center cursor-pointer">
                <PlusOutlined className="md:text-2xl text-white" />
            </div>
            <div
                className="add-prd min-h-[120px] opacity-90 !bg-orange-800 hover:opacity-100 flex items-center justify-center cursor-pointer"
                onClick={() => navigate("/products")}
            >
                <EditOutlined className="md:text-2xl text-white" />
            </div>
            < AddProduct
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
                categories={categories}
                products={products}
                setProducts={setProducts}
            />
        
        </div>
    )
}

export default Products
