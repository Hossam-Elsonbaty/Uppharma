// import React from 'react';
// import {BrowserRouter as Router , Routes, Route, useLocation } from 'react-router-dom';
// import Home from './Pages/Home';
// import Navbar from './Components/Navbar';
// import FixedFooter from './Components/FixedFooter';
// import Section from './Pages/Section';
// import SubSection from './Pages/SubSection';
// import ScrollToTop from './Components/ScrollToTop.jsx';
// import Cart from './Pages/Cart.jsx';
// import CartItems from './Components/CartItems.jsx';
// import OrderInfo from './Components/OrderInfo.jsx';
// import PaymentMethods from './Components/PaymentMethods.jsx';
// import MyProfile from './Pages/MyProfile.jsx';
// import SignUp from './Pages/SignUp';
// function App() {
//   const location = useLocation();
//   return (
//   <>
//     <a hidden href="https://storyset.com/user">User illustrations by Storyset</a>
//     <Router>
//       <ScrollToTop />
//       <Navbar></Navbar>
//       <Routes>
//         <Route path='/' exact element={<Home />}></Route>
//         <Route path='/my-profile' exact element={<MyProfile />}></Route>
//         <Route path='/sign-up' exact element={<SignUp />}/>
//         <Route path='my-cart' exact element={<Cart />}>
//           <Route index element={<CartItems />} />
//           <Route path='cart-items' exact element={<CartItems />}/>
//           <Route path='order-info' exact element={<OrderInfo />}/>
//           <Route path='payment-methods' exact element={<PaymentMethods />}/>
//         </Route>
//         <Route path='section/:sectionId' exact element={<SubSection />} />
//         <Route path='section' exact element={<Section />}>
//         </Route>
//       </Routes>
//       <FixedFooter></FixedFooter>
//     </Router>
//   </>
//   );
// }
// export default App;
import React from 'react';
import {BrowserRouter as Router , Routes, Route, useLocation } from 'react-router-dom';
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
import MyProfile from './Pages/MyProfile.jsx';
import SignUp from './Pages/SignUp';
import Login from './Pages/Login.jsx';
import { CartProvider } from './Context/CartContext.jsx';
const App = () => {
  const location = useLocation();
  return (
    <>
      <a hidden href="https://storyset.com/user">User illustrations by Storyset</a>
      {location.pathname !== '/sign-up' && location.pathname !== '/login' && <Navbar />}
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/my-profile' exact element={<MyProfile />} />
        <Route path='/sign-up' exact element={<SignUp />} />
        <Route path='/login' exact element={<Login />} />
        <Route path='my-cart' exact element={<Cart  />}>
          <Route index element={<CartItems />} />
          <Route path='cart-items' exact element={<CartItems />} />
          <Route path='order-info' exact element={<OrderInfo />} />
          <Route path='payment-methods' exact element={<PaymentMethods />} />
        </Route>
        <Route path='section/:sectionId' exact element={<SubSection />} />
        <Route path='section' exact element={<Section />} />
      </Routes>
      {location.pathname !== '/sign-up' && location.pathname !== '/login' && <FixedFooter />}
    </>
  );
};
const MainApp = () => (
  <Router>
    <ScrollToTop />
    <CartProvider>
      <App />
    </CartProvider>
  </Router>
);
export default MainApp;
