import React, {useContext} from 'react';
import { CiShoppingCart } from "react-icons/ci";
import { CiPhone } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
import { CiHome } from "react-icons/ci";
import { FaWhatsapp } from "react-icons/fa";
import { NavLink, useLocation } from 'react-router-dom';
import CartContext from '../Context/CartContext';
import FormatCurrency from './FormatCurrency';
export default function FixedFooter() {
  const { getCartItemCount } = useContext(CartContext);
  const CartItemCount = getCartItemCount();
  const location = useLocation();
  console.log(CartItemCount);
  return (
    <div className='fixed-footer'>
      <NavLink to="/" activeClassName="active" className='col' exact>
        <CiHome/>
        <span className='label '>الرئيسية</span>
      </NavLink>
      <NavLink to="/my-profile" activeClassName="active" className='col'>
        <CiUser/>        
        <span className='label'>الحساب</span>
      </NavLink>
      {/* <NavLink to="tel:0201118066382" activeClassName="active" className='col'>
        <CiPhone/>        
        <span className='label'>إتصال</span>
      </NavLink> */}
      <NavLink to="/my-cart" activeClassName="active" className='col'>
        <CiShoppingCart/>
        <div className='cart-items-number'>
          <span>{CartItemCount}</span>
        </div>        
        <span className='label'>العربة</span>
      </NavLink>
      <NavLink to="/my-favorite" activeClassName="active" className='col'>
        <CiHeart/>        
        <span className='label'>المفضلة</span>
      </NavLink>
    </div>
  )
}
