import { BrowserRouter, Routes, Route, Navigate, } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import InvoicesPage from './Pages/InvoicesPage';
import CustomersPage from './Pages/CustomersPage';
import StatisticPage from './Pages/StatisticPage';
import RegisterPage from './Pages/auth/RegisterPage';
import LoginPage from './Pages/auth/LoginPage';
import ProductPage from './Pages/ProductPage';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';


function App() {
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<RouteControl> <HomePage /> </RouteControl>} />
          <Route path='/cart' element={<RouteControl> <CartPage /> </RouteControl>} />
          <Route path='/invoices' element={<RouteControl> <InvoicesPage /> </RouteControl>} />
          <Route path='/customers' element={<RouteControl> <CustomersPage /> </RouteControl>} />
          <Route path='/statistic' element={<RouteControl> <StatisticPage /> </RouteControl>} />
          <Route path='/products' element={<RouteControl> <ProductPage /> </RouteControl>} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;


// yönlendirivi güvenlik kontrol alanı
// RouteControl ile kullanıcı kaydı olmayan kişilerin app' e girişini engellemek ve 
// login sayfasına yönlendirmek için kullanıyoruz.
export const RouteControl = ({ children }) => {
  if (localStorage.getItem("systemUser")) {
    return children;
  } else {
    return <Navigate to="/login" />;
  }
};