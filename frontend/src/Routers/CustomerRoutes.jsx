import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Cart from '../customer/component/Cart/Cart'
import Checkout from '../customer/component/Checkout/Checkout'
import Footer from '../customer/component/Footer/Footer'
import Navigation from '../customer/component/Navigation/Navigation'
import Order from '../customer/component/Order/Order'
import OrderDetails from '../customer/component/Order/OrderDetails'
import Product from '../customer/component/Product/Product'
import ProductDetails from '../customer/component/ProductDetails/ProductDetails'
import HomePage from '../customer/pages/HomePage/HomePage'
import PaymentSuccess from '../customer/component/Payment/PaymentSuccess'

const CustomerRoutes = () => {
  return (
    <div>
        <div>
        <Navigation />
        </div>
        <Routes>
        <Route path='/login' element={<HomePage/>}></Route>
        <Route path='/register' element={<HomePage/>}></Route>
            <Route path='/' element={<HomePage/>}></Route>
            <Route path='/cart' element={<Cart/>}></Route>
            <Route path='/:lavelOne/:lavelTwo/:lavelThree' element={<Product/>}></Route>
            <Route path='/product/:productId' element={<ProductDetails/>}></Route>
            <Route path='/checkout' element={<Checkout/>}></Route>
            <Route path='/account/order' element={<Order/>}></Route>
            <Route path='/account/order/:orderId' element={<OrderDetails/>}></Route>
            <Route path='/payment/:orderId' element={<PaymentSuccess/>}></Route>


            {/* <Checkout /> */}
            {/* <Order /> */}
            {/* <OrderDetails /> */}
        </Routes>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default CustomerRoutes