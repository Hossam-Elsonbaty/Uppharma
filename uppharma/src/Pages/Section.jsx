import React from 'react';
import { FaArrowDown } from "react-icons/fa";
import Product from '../Components/Product';
export default function Section() {
  return (
    <>
      <main className='section-main'>
        <div className='top'>
          <h2 className='section-title'>قسم العطور</h2>
          <div className='filter'>
            <span>فلتر</span> 
            <FaArrowDown />
          </div>
        </div>
        <Product></Product>
      </main>
      
    </>
  )
}
