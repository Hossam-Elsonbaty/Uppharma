import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiWhatsappLogoThin } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { FiPhone } from "react-icons/fi";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaRegUser } from "react-icons/fa";
export default function FixedFooter() {
  return (
    <div className='fixed-footer'>
      <div className='col'><CiPhone  /></div>
      <div className='col'><CiHeart  /></div>
      <div className='col'>
        <Link to="/my-cart">
          <div className='cart-items-number'>
            <span>2</span>
          </div>
          <CiShoppingCart  />        
        </Link>
      </div>
      <div className='col'><PiWhatsappLogoThin  /></div>
      <div className='col'><CiUser   /></div>
    </div>
  )
}
