import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
import FixedFooter from './Components/FixedFooter';
import Section from './Pages/Section';
import ScrollToTop from './Components/ScrollToTop.jsx';
function App() {
  return (
  <>
    <Router>
      <ScrollToTop />
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
        <Route path='section' exact element={<Section />}></Route>
      </Routes>
      <FixedFooter></FixedFooter>
    </Router>
  </>
  );
}

export default App;
