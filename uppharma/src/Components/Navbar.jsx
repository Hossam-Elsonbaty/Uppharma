import React,{useState, useEffect, useRef } from 'react';
import logo from '../Images/logo.jpg';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaHeart, FaUser, FaSearch } from 'react-icons/fa';
export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  const navBarsRef = useRef(null);
  const menuRef = useRef(null);
  const handleClickOutside = (event) => {
    if (
      menuRef.current &&
      !menuRef.current.contains(event.target) &&
      navBarsRef.current &&
      !navBarsRef.current.contains(event.target) &&
      isMenuOpen
    ) {
      setIsMenuOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);
  const menuItems = [
    {
      name: 'قسم العروض',
    },
    {
      name: ' قسم عروض الباكيجات',
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
    {
      name: 'قسم العناية بالامهات  ',
      children: [
        {
          name: 'صيدلية الطفل  ',
        },
        {
          name: ' قسم الجلدية للأطفال  ',
        },
      ],
    },
    {
      name: 'قسم العناية بالبشرة  ',
      children: [
        {
          name: 'صيدلية الطفل  ',
        },
        {
          name: ' قسم الجلدية للأطفال  ',
        },
      ],
    },
    {
      name: 'قسم العناية بالشعر  ',
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
    <header className='nav-header'>
      <nav className="first-navbar">
        <div className="navbar-container">
          {/* <div className="nav-icons">
            <FaUser className="icon" />
            <FaHeart className="icon" />
            <FaShoppingCart className="icon" />
          </div> */}
          <div className="search-bar">
            <input type="text" placeholder="الإسم- المادة الفعالة- الإستخدام..." />
            <button><FaSearch /></button>
          </div>
        </div>
      </nav>
      <nav className="second-navbar">
        <div className="navbar-container">
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="err"/>
            </Link>
          </div>
          <div className="nav-bars" ref={navBarsRef} onClick={toggleMenu}>
            <span className='bar'></span>
            <span className='bar'></span>
            <span className='bar'></span>
          </div>
        </div>
        <div ref={menuRef} >
          <Menu items={menuItems} isOpen={isMenuOpen} />
        </div>
      </nav>
    </header>
  )
}
