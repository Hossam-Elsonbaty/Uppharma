import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { PiWhatsappLogoLight } from "react-icons/pi";
import { Link } from 'react-router-dom';
import { FiShoppingCart } from "react-icons/fi";
import { MdPhone } from "react-icons/md";
import { BsWhatsapp } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { HiOutlineUserCircle } from "react-icons/hi";
export default function FixedFooter() {
  return (
    <div className='fixed-footer'>
      <div className='col'><MdPhone  /></div>
      <div className='col'><FaRegHeart  /></div>
      <div className='col'>
        <Link to="/my-cart">
          <div className='cart-items-number'>
            <span>2</span>
          </div>
          <FiShoppingCart  />        
        </Link>
      </div>
      <div className='col'><BsWhatsapp  /></div>
      <div className='col'><HiOutlineUserCircle   /></div>
    </div>
  )
}
