import React from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
export default function FixedFooter() {
  return (
    <div className='fixed-footer'>
      <div className='col'><CiPhone /></div>
      <div className='col'><FaWhatsapp /></div>
      <div className='col'><CiShoppingCart /></div>
    </div>
  )
}
