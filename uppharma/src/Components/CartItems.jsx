import React from 'react';
import { Link } from 'react-router-dom';
import { CiTrash } from "react-icons/ci";
const CartItems = () => {
  return <div className='cart-items'>
    <div className='item'>
      <img src='https://via.placeholder.com/100' alt='product' />
      <div className="details">
        <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
        <span className='item-price'><span>1.5</span> د.ك</span>
        <div className='quantity'>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <button className='trash'><CiTrash /></button>
    </div>
    <div className='item'>
      <img src='https://via.placeholder.com/100' alt='product' />
      <div className="details">
        <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
        <span className='item-price'><span>1.5</span> د.ك</span>
        <div className='quantity'>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <button className='trash'><CiTrash /></button>
    </div>
    <div className='item'>
      <img src='https://via.placeholder.com/100' alt='product' />
      <div className="details">
        <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
        <span className='item-price'><span>1.5</span> د.ك</span>
        <div className='quantity'>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <button className='trash'><CiTrash /></button>
    </div>
    <div className='item'>
      <img src='https://via.placeholder.com/100' alt='product' />
      <div className="details">
        <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
        <span className='item-price'><span>1.5</span> د.ك</span>
        <div className='quantity'>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <button className='trash'><CiTrash /></button>
    </div>
    <div className='item'>
      <img src='https://via.placeholder.com/100' alt='product' />
      <div className="details">
        <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
        <span className='item-price'><span>1.5</span> د.ك</span>
        <div className='quantity'>
          <button>-</button>
          <span>1</span>
          <button>+</button>
        </div>
      </div>
      <button className='trash'><CiTrash /></button>
    </div>
    {/* <Link to='payment-methods'>payment methods</Link> */}
  </div>;
};

export default CartItems;
