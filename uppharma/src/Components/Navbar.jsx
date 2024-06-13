import React,{useState} from 'react';
import logo from '../Images/logo192.png';
import Menu from './Menu';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const menuItems = [
    {
      name: 'قسم العروض',
    },
    {
      name: ' قسم العطور',
    },
    {
      name: 'قسم المكملات الغذائية',
      children: [
        {
          name: 'مكملات الفيتامينات ',
          children: [
            { name: 'المكملات الرياضية ' },
            { name: 'مكملات الشعر' },
          ],
        },
        {
          name: 'مكملات الاعشاب  ',
        },
      ],
    },
    {
      name: 'قسم الرعاية الصيدلانية  ',
      children: [
        {
          name: 'قسم البنادول  ',
        },
        {
          name: ' قسم البرد والأنفلونزا  ',
        },
      ],
    },
    {
      name: 'قسم العناية بالأطفال  ',
      children: [
        {
          name: 'صيدلية الطفل  ',
        },
        {
          name: ' قسم الجلدية للأطفال  ',
        },
      ],
    },
  ];
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
          <div className="nav-bars" onClick={toggleMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
        <Menu items={menuItems} isOpen={isMenuOpen}/>
      </nav>
    </header>
  )
}
