import React from 'react';
import Swiper from '../Components/Offers';
import TopSale from '../Components/TopSale';
import Sections from '../Components/Sections';
import Footer from '../Components/Footer';
import Filters from './../Components/Filters';
export default function Home() {
  return (
    <main className='main'>
      <Swiper></Swiper>
      <TopSale></TopSale>
      <Sections></Sections>
      <Filters></Filters>
      <Footer></Footer>
    </main>
  )
}
