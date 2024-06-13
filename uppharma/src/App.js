import React from 'react';
import {BrowserRouter as Router , Routes, Route} from 'react-router-dom';
import Home from './Pages/Home';
import Navbar from './Components/Navbar';
function App() {
  return (
  <>
    <Router>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' exact element={<Home />}></Route>
      </Routes>
    </Router>
  </>
  );
}

export default App;
