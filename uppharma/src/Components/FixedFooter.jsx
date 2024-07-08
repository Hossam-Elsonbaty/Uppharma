import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
export default function FixedFooter() {
  return (
    <div className='fixed-footer'>
      <div className='col'>
        <CiPhone/>
        <span className='label'>إتصال</span>
      </div>
      <div className='col'>
        <CiHeart/>
        <span className='label'>المفضلة</span>
      </div>
      <div className='col'>
        <Link to="/my-cart">
          <div className='cart-items-number'>
            <span>2</span>
          </div>
          <CiShoppingCart/>        
        </Link>
        <span className='label'>العربة</span>
      </div>
      <div className='col'>
        <PiWhatsappLogoThin/>
        <span className='label'>الواتس اّب</span>
      </div>
      <div className='col'>
        <Link to="/my-profile">
          <CiUser/>        
        </Link>
        <span className='label'>الحساب</span>
      </div>
      {/* <div className='col'><CiUser/></div> */}
    </div>
  )
}
