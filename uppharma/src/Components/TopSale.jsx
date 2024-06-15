import React from 'react';
import { Carousel } from 'antd';
import Augmentin from '../Images/Augmentin.webp'
import Augram from '../Images/Augram.webp'
import Panadol from '../Images/Panadol.webp'
export default function TopSale() {
  const contentStyle = {
    height: '160px',
    color: '#fff',
    lineHeight: '160px',
    textAlign: 'center',
    background: '#e32626',
  };
  
  return (
    <section className='top-sale-container'>
      <h2>المنتجات الأكثر مبيعاً</h2>
      <Carousel  autoplay >
        <div>
          <div className='products-container'>
            <div className='col'>
              <img src={Panadol} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
            <div className='col'>
              <img src={Augmentin} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className='products-container'>
            <div className='col'>
              <img src={Augram} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
            <div className='col'>
              <img src={Panadol} className='product-img' alt="" />
              <div className='product-desc'>
                <p className='product-name'>بانادول شراب للاطفال</p>
                <span className='product-price'>
                  <span>2.5</span>
                  <span>د.ك</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Carousel>
    </section>
  )
}
