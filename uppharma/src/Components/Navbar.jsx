import React from 'react';
import logo from '../Images/logo192.png';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
export default function Navbar() {
  return (
    <header className='Nav-header'>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="nav-icons">
            <FaUser className="icon" />
            <FaHeart className="icon" />
            <FaShoppingCart className="icon" />
          </div>
          <div className="search-bar">
            <input type="text" placeholder="بحث..." />
            <button><FaSearch /></button>
          </div>
        </div>
      </nav>
      <nav className="navbar">
        <div className="second-navbar-container">
          <div className="logo">
            <img src={logo} alt="err"/>
          </div>
          <div className="nav-bars">
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
      </nav>
    </header>
  )
}
