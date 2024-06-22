import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import FixedFooter from './Components/FixedFooter';
import Section from './Pages/Section';
import SubSection from './Pages/SubSection';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Cart from './Pages/Cart.jsx';
import CartItems from './Components/CartItems.jsx';
import OrderInfo from './Components/OrderInfo.jsx';
import PaymentMethods from './Components/PaymentMethods.jsx';
function App() {
  return (
  <>
    <Router>
      <ScrollToTop />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='my-cart' exact element={<Cart />}>
          <Route index element={<CartItems />} />
          <Route path='cart-items' exact element={<CartItems />}/>
          <Route path='order-info' exact element={<OrderInfo />}/>
          <Route path='payment-methods' exact element={<PaymentMethods />}/>
        </Route>
        <Route path='section/:sectionId' exact element={<SubSection />} />
        <Route path='section' exact element={<Section />}>
        </Route>
      </Routes>
      <FixedFooter></FixedFooter>
    </Router>
  </>
  );
}

export default App;
