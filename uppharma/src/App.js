import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import FixedFooter from './Components/FixedFooter';
import Section from './Pages/Section';
import SubSection from './Pages/SubSection';
import ScrollToTop from './Components/ScrollToTop.jsx';
import Cart from './Pages/Cart.jsx';
function App() {
  return (
  <>
    <Router>
      <ScrollToTop />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='my-cart' exact element={<Cart />}></Route>
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
