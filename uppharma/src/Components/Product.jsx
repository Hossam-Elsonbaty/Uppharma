import React from 'react';
import ultramale from '../Images/Ultra male.webp'
import stronger from '../Images/stronger with you.webp';
import sauvage from '../Images/sauvage.webp';
import aguero from '../Images/AGUERO_1024x1024.webp';
import { MdOutlineDescription } from "react-icons/md";
import { CiHeart } from "react-icons/ci";
export default function Product() {
  return (
    <div className='products-container'>
      <div className='product'>
        <div className='img-container'>
          <div className='favorite'>
            <CiHeart />
          </div>
          <img  src={stronger} className='product-img' alt="perfume" />
        </div>
        <div className='left-section'>
          <h6 className='product-name'>غوتشي ابسليوت عطر للنساء 90 مل</h6>
          <span className='product-price'>
            <span>2.5</span>
            <span>د.ك</span>
          </span>
          <span className='product-availability'>متبقي 2 فقط.</span>
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
      <div className='product'>
        <div className='img-container'>
          <div className='favorite'>
            <CiHeart />
          </div>
          <img  src={sauvage} className='product-img' alt="perfume" />
        </div>
        <div className='left-section'>
          <h6 className='product-name'>غوتشي ابسليوت عطر للنساء 90 مل</h6>
          <span className='product-price'>
            <span>2.5</span>
            <span>د.ك</span>
          </span>
          <span className='product-availability'>متبقي 2 فقط.</span>
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
      <div className='product'>
        <div className='img-container'>
          <div className='favorite'>
            <CiHeart />
          </div>
          <img  src={ultramale} className='product-img' alt="perfume" />
        </div>
        <div className='left-section'>
          <h6 className='product-name'>غوتشي ابسليوت عطر للنساء 90 مل</h6>
          <span className='product-price'>
            <span>2.5</span>
            <span>د.ك</span>
          </span>
          <span className='product-availability'>متبقي 2 فقط.</span>
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
      <div className='product'>
        <div className='img-container'>
          <div className='favorite'>
            <CiHeart />
          </div>
          <img  src={aguero} className='product-img' alt="perfume" />
        </div>
        <div className='left-section'>
          <h6 className='product-name'>غوتشي ابسليوت عطر للنساء 90 مل</h6>
          <span className='product-price'>
            <span>2.5</span>
            <span>د.ك</span>
          </span>
          <span className='product-availability'>متبقي 2 فقط.</span>
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
    </div>
  )
}
