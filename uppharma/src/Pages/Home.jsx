import React from 'react';
import Swiper from '../Components/Offers';
import TopSale from '../Components/TopSale';
import Sections from '../Components/Sections';
import Footer from '../Components/Footer';
export default function Home() {
  return (
    <main className='home-main'>
      <Swiper></Swiper>
      <TopSale></TopSale>
      <Sections></Sections>
      <Footer></Footer>
    </main>
  )
}
