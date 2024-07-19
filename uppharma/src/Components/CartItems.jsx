import React from 'react';
import { CiTrash } from "react-icons/ci";
import product1 from '../Images/Done1.jpg';
import product2 from '../Images/Done2.jpg';
import product3 from '../Images/Done3.jpg';
import product4 from '../Images/Done4.jpg';
import product5 from '../Images/Done5.jpg';
import product6 from '../Images/Done6.jpg';
import product7 from '../Images/Done7.jpg';
import product8 from '../Images/Done8.jpg';
const CartItems = () => {
  const products = [
    { img: product1, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
    { img: product2, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
    { img: product3, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
    { img: product4, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
    { img: product5, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
    { img: product6, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
  ];
  return (
    <div className='cart-items'>
      {products.map((product, index) => (
        <div className='item' key={index}>
          <img src={product.img} alt='product' />
          <div className="details">
            <span className='item-name'>{product.name}</span>
            <div className='quantity-price'>
              <span className='item-price'><span>{product.price}</span></span>
              <div className='item-quantity'>
                <button>-</button>
                <span className='quantity-number'>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
          <button className='trash'><CiTrash /></button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
