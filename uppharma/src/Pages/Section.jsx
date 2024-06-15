import React,{useState} from 'react';
import { FaArrowDown } from "react-icons/fa";
import Product from '../Components/Product';
import Footer from '../Components/Footer';
import { Pagination } from 'antd';
export default function Section() {
  const [first, setFirst] = useState(0);
  const [rows, setRows] = useState(10);
  const onPageChange = (event) => {
    setFirst(event.first);
    setRows(event.rows);
  };
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
        <div className='pagination'>
          <Pagination defaultCurrent={1} total={50} />
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}
