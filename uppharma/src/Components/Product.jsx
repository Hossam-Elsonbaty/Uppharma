import React from 'react';
import { MdOutlineDescription } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
export default function Product({ products }) {
  return (
    <div className='products-container'>
      {products.map(product => (
        <div className='product' key={product.id}>
          <div className='img-container'>
            <div className='favorite'>
              <CiHeart />
            </div>
            <img src={product.image} className='product-img' alt="perfume" />
          </div>
          <div className='left-section'>
            <h6 className='product-name'>{product.name}</h6>
            <span className='product-price'>
              <span>{product.price}</span>
              <span>د.ك</span>
            </span>
            <span className='product-availability'>{product.availability}</span>
            <div className='quantity'>
              <button className='decrease'>-</button>
              <span className='number'>1</span>
              <button className='increase'>+</button>
            </div>
            <div className='desc-order'>
              <button className='order-btn'>أطلب</button>
              <button className='description'>
                <MdOutlineDescription />
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}