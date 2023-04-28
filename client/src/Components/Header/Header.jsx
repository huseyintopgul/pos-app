import { Link, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { SearchOutlined, HomeOutlined, ShoppingCartOutlined, CopyOutlined, BarChartOutlined, LogoutOutlined, UserOutlined } from '@ant-design/icons'
import { Badge, Input, message } from 'antd'



const Header = () => {
    // badge alanında bulunan sepet ürün sayosono default,namik hale getirebilmek için
    // useSelector ile "state.cart" ımızı "cart" değişkenine atayıp, 
    // bunun içerisinde bulunan "cart.cartItem.length" ile dinamikleştiriyooruz..
    const cart =  useSelector((state)=> state.cart)
    const navigate = useNavigate();
    const logOut = () => {
        if(window.confirm("Çıkış yapmak istediğinize emin misiniz?")){
            localStorage.removeItem("systemUser");
            navigate("/login");
            message.success("Çıkış işlemi başarılı");
        }
    }

return (
    <div className="border-b mb-6">
        <header className="py-4 px-6 flex justify-between items-center gap-10">
            <div className="logo">
                <Link to="/">
                    <h2 className="text-2xl font-bold md:text-4xl">LOGO</h2>
                </Link>
            </div>
            <div className="header-search flex-1 flex justify-center">
                <Input size="large"
                    placeholder="Search..."
                    prefix={<SearchOutlined />}
                    className="rounded-full"
                />
            </div>
            {/* responsive menu-links alanı
                     - md ortaç ekran değeri olarak kullanılmdı.
                     - md : static ve width auto. 
                     - md> : bottom:0 w:100%
                */}
            <div className="menu-links flex justify-between items-center gap-7
                                md:static fixed z-50 bg-white md:bg-transparent bottom-0 md:w-auto w-full left-0 md:border-t-0 border-t md:px-0 px-5 py-1">
                <Link to="/" className='menu-link flex flex-col'>
                    <HomeOutlined className='md:text-2xl text-xl' />
                    <span className='text-[10px] md:text-md'>Ana Sayfa</span>
                </Link>
                <Badge count={cart.cartItems.length} offset={[0, 0]} className='md:flex hidden '>
                    <Link to="/cart" className='menu-link flex flex-col'>
                        <ShoppingCartOutlined className='md:text-2xl text-xl' />
                        <span className='text-[10px] md:text-md'>Sepet</span>
                    </Link>
                </Badge>
                <Link to="/invoices" className='menu-link flex flex-col'>
                    <CopyOutlined className='md:text-2xl text-xl' />
                    <span className='text-[10px] md:text-md'>Faturalar</span>
                </Link>
                <Link to="/customers" className='menu-link flex flex-col'>
                    <UserOutlined className='md:text-2xl text-xl' />
                    <span className='text-[10px] md:text-md'>Müşteriler</span>
                </Link>
                <Link to="/statistic" className='menu-link flex flex-col'>
                    <BarChartOutlined className='md:text-2xl text-xl' />
                    <span className='text-[10px] md:text-md'>İstatistik</span>
                </Link>
               <div onClick={logOut} >
               <Link className='menu-link flex flex-col'>
                    <LogoutOutlined className='md:text-2xl text-xl' />
                    <span className='text-[10px] md:text-md'>Çıkış</span>
                </Link>
               </div>
            </div>

            {/* md ekran altında responsive tasarım olarak görünecek */}
            <Badge count={cart.cartItems.length} offset={[0, 0]} className='flex md:hidden'>
                <Link to="/cart" className='resp-menu-link flex flex-col '>
                    <ShoppingCartOutlined className='text-2xl' />
                    <span className='text-[10px]'>Sepet</span>
                </Link>
            </Badge>
        </header>
    </div>
)
};

export default Header;