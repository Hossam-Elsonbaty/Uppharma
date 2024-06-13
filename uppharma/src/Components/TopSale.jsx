import React from 'react';
import { Carousel } from 'antd';
import Augmentin from '../Images/Augmentin.jpeg'
import Augram from '../Images/Augram.jpeg'
import Panadol from '../Images/Panadol.jpeg'
export default function TopSale() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#364d79',
  };
  
  return (
    <section className='top-sale-container'>
      <h2>المنتجات الأكثر مبيعاً</h2>
      <Carousel  autoplay >
        <div>
          <img src={Augmentin} className='product-img' alt="" />
          <p>بانادول شراب للاطفال و الر...</p>
        </div>
        <div>
          <img src={Augram} className='product-img'alt="" />
        </div>
        <div>
          <img src={Panadol}className='product-img' alt="" />
        </div>
      </Carousel>
    </section>
  )
}
