import { useState } from "react";
import ProductItem from "./ProductItem";
import { PlusOutlined, EditOutlined } from "@ant-design/icons"
import AddProduct from "./AddProduct";
import { useNavigate } from "react-router-dom";


const Products = ({ categories, products, setProducts, filtered, search }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const navigate = useNavigate();

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

            {
                filtered
                    // .filter((products) => products.title.toLowerCase().includes(search.toLowerCase()))
                    .map((item) => (
                        <ProductItem item={item} key={item._id} />
                    ))
            }
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
