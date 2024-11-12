import React,{useState} from 'react';
import Footer from '../Components/Footer';
import OrdersSearchBar from './../Components/OrdersSearchBar';
import OrdersList from './../Components/OrdersList';

export default function Orders( ) {

  return (
    <>
      <main className='main'>
        <div className='top section-top'>
          <div className="orders-title-container">
              <h2 className='top-title'> طلباتي في </h2>
              <select name="" id="">
                <option selected value="2024">2024</option>
                <option value="2023">2023</option>
                <option value="2022">2022</option>
                <option value="2021">2021</option>
                <option value="2020">2020</option>
              </select>
          </div>          
          <OrdersSearchBar></OrdersSearchBar>
        </div>
        <OrdersList></OrdersList>
        {/* 
        <div className='pagination'>
          <Pagination 
            current={currentPage}
            total={favorites.length}
            pageSize={productsPerPage}
            onChange={onPageChange}
          />
        </div> */}
        <Footer></Footer>
      </main>
    </>
  )
}
