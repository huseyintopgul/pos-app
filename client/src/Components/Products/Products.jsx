import { useState } from "react";
import { PlusOutlined } from "@ant-design/icons"
import AddProduct from "./AddProduct";


const Products = ({ products, setProducts }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false)



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
                <div className="product-item border cursor-pointer hover:shadow-xl transition-all select-none,">
                    <div className="product-img">
                        <img src={item.img} alt={item.title}
                            className="product-img h-28 object-cover w-full border-b" />
                        {/* product-img için width-full özelliğini tanımlasak bile kapsayıcı wrapper için grid yapısını kullanacağımızdan dolayı,
                          burada tanımlı w-full kendisi için belirtilen alanı dolduracaktır. */}
                    </div>
                    <div className="product-info flex flex-col text-center">
                        <span className="prodoct-name font-bold">{item.title}</span>
                        <span className="product-price font-bold">{item.price}</span>
                    </div>
                </div>
            ))}
            <div onClick={() => setIsAddModalOpen(true)}
                className="add-prd opacity-90 !bg-purple-800 hover:opacity-100 flex items-center justify-center cursor-pointer">
                <PlusOutlined className="md:text-2xl text-white" />
            </div>
            < AddProduct
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
            />
        </div>
    )
}

export default Products
