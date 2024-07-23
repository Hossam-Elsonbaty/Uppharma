import React, {useContext} from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { Link } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import FormatCurrency from './FormatCurrency';
export default function FixedFooter() {
  const { getCartItemCount } = useContext(CartContext);
  const CartItemCount = getCartItemCount()
  console.log(CartItemCount);
  return (
    <div className='fixed-footer'>
      <div className='col'>
        <Link to="/">
          <CiHome/>        
        </Link>
        <span className='label'>الرئيسية</span>
      </div>
      <div className='col'>
        <CiPhone/>
        <span className='label' style={{marginTop :"5px"}}>إتصال</span>
      </div>
      <div className='col'>
        <Link to="/my-cart">
          <div className='cart-items-number'>
            <span>{CartItemCount}</span>
          </div>
          <CiShoppingCart/>        
        </Link>
        <span className='label'>العربة</span>
      </div>
      <div className='col'>
        <Link to="/my-cart">
          <CiHeart/>        
        </Link>
        <span className='label'>المفضلة</span>
      </div>
      <div className='col-whats'>
        <FaWhatsapp />
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
