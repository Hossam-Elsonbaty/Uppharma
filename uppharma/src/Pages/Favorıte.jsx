import React,{useState, useContext} from 'react';
import { FaHeart } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Footer from '../Components/Footer';
import { Pagination } from 'antd';
import ProductList from '../Components/ProductList';
import ProductData from '../Data/data';
import productData from '../Data/data';
import IsDesktop from '../Context/IsDesktop';
export default function Favorıte( ) {
  const [currentPage, setCurrentPage] = useState(1);
  const {isDesktop} = useContext(IsDesktop)
  const productsPerPage = isDesktop ? 16 : 6;
  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = ProductData.slice(indexOfFirstProduct, indexOfLastProduct);
  return (
    <>
      <main className='main'>
        <div className='top section-top'>
          <div className="favorite-title-container">
            <h2 className='top-title'> المفضلة </h2>
            <FaHeart className="filled-heart favoite-title-heart" />
          </div>
          <div className='filter'>
            <span>فلتر</span> 
            <VscSettings />
          </div>
        </div>
        <ProductList  products={currentProducts}></ProductList>
        <div className='pagination'>
          <Pagination 
            current={currentPage}
            total={productData.length}
            pageSize={productsPerPage}
            onChange={onPageChange}
          />
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}
