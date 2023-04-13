import { BrowserRouter, Routes, Route, } from 'react-router-dom'
import HomePage from './Pages/HomePage';
import CartPage from './Pages/CartPage';
import InvoicesPage from './Pages/InvoicesPage';
import CustomersPage from './Pages/CustomersPage';
import StatisticPage from './Pages/StatisticPage';
import RegisterPage from './Pages/auth/RegisterPage';
import LoginPage from './Pages/auth/LoginPage';
import ProductPage from './Pages/ProductPage';


function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/invoices' element={<InvoicesPage />} />
          <Route path='/customers' element={<CustomersPage />} />
          <Route path='/statistic' element={<StatisticPage />} />
          <Route path='/products' element={<ProductPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route path='/login' element={<LoginPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
