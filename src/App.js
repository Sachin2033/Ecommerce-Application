import { Route, Routes } from 'react-router-dom';
import './App.css';
import Cart from './customer/component/Cart/Cart';
import Checkout from './customer/component/Checkout/Checkout';
import Footer from './customer/component/Footer/Footer';
import Navigation from './customer/component/Navigation/Navigation';
import Order from './customer/component/Order/Order';
import OrderDetails from './customer/component/Order/OrderDetails';
import Product from './customer/component/Product/Product';
import ProductDetails from './customer/component/ProductDetails/ProductDetails';
import CustomerRoutes from './Routers/CustomerRoutes';

function App() {
  return (
    <div className="App">

      <Routes>
        <Route path='/*' element={<CustomerRoutes />}></Route>
      </Routes>


    </div>
  );
}

export default App;
