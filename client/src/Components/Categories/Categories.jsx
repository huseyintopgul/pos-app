import { PlusOutlined, EditOutlined } from "@ant-design/icons";
import { useEffect, useState } from "react";
import "./Style.css";
import AddCategory from "./AddCategory";
import EditCategories from "./EditCategories";

const Categories = ({ categories, setCategories, products, setFiltered }) => {
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [categoryTitle, setCategoryTitle] = useState("Tümü");

    useEffect(() => {
        if (categoryTitle === "Tümü") {
            setFiltered(products);
        } else {
            setFiltered(products.filter((item) => item.category === categoryTitle));
        }
    }, [products, setFiltered, categoryTitle]); 

    return (
        <ul className="flex md:flex-col gap-3 text-center z-100 ">
            {categories.map((item) => (
                <li className={`category-item ${item.title === categoryTitle && "!bg-pink-700"}`}
                key={item._id} 
                onClick={() => setCategoryTitle(item.title)}>
                    <span>{item.title}</span>
                </li>
            ))}
            <li
                className="category-item !bg-purple-800 hover:opacity-90"
                onClick={() => setIsAddModalOpen(true)}
            >
                <PlusOutlined className="md:text-2xl" />
            </li>
            <AddCategory
                isAddModalOpen={isAddModalOpen}
                setIsAddModalOpen={setIsAddModalOpen}
                setCategories={setCategories}
                categories={categories}
            />
            <li
                className="category-item opacity-90 !bg-orange-800 hover:opacity-100"
                onClick={() => setIsModalOpen(true)}
            >
                <EditOutlined className="md:text-2xl" />
            </li>
            <EditCategories
                isModalOpen={isModalOpen}
                setIsModalOpen={setIsModalOpen}
                categories={categories}
                setCategories={setCategories}
            />
        </ul>
    )
}

export default Categories