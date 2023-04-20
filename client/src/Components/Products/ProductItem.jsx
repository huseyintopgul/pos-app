import { addProduct } from "../../Redux/CartSlice";
// addProduct ı kullanabilmemiz için react-redux ın dispatch özelliğine ihtiyacımız var 
// onu sayfamıza import etmeliyiz
import { useDispatch, useSelector } from "react-redux";

const ProductItem = ({ item }) => {
    const cart = useSelector((state) => state.cart);
    const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(addProduct(item))
    };

    console.log(cart.cartItems);

    return (
        <div
            onClick={handleClick}
            className="product-item border cursor-pointer hover:shadow-xl transition-all select-none,">
            <div className="product-img">
                <img src={item.img} alt={item.title}
                    className="product-img h-28 object-cover w-full border-b" />
                {/* product-img için width-full özelliğini tanımlasak bile kapsayıcı wrapper için grid yapısını kullanacağımızdan dolayı,
        //         burada tanımlı w-full kendisi için belirtilen alanı dolduracaktır. */}
            </div>
            <div className="product-info flex flex-col text-center">
                <span className="prodoct-name font-bold">{item.title}</span>
                <span className="product-price font-bold">{item.price}₺</span>
            </div>
        </div>
    );
};

export default ProductItem;

