import React,{useState, useContext} from 'react';
import { VscSettings } from "react-icons/vsc";
import Footer from '../Components/Footer';
import { Pagination } from 'antd';
import ProductList from '../Components/ProductList';
import ProductData from '../Data/data';
import productData from '../Data/data';
import IsDesktop from '../Context/IsDesktop';
import { useLocation } from 'react-router-dom';
export default function SearchResults( ) {
  const [currentPage, setCurrentPage] = useState(1);
  const {isDesktop} = useContext(IsDesktop)
  const productsPerPage = isDesktop ? 16 : 6;
  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;

  // Get the search parameter from the URL
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchParam = searchParams.get("search-params") || "";

  // Filter products based on search term , replace this step with requesting backend with searchParam for filtered data directly
  const searchedProducts = productData.filter((product) =>
    product.name.toLowerCase().includes(searchParam.toLowerCase()) 
  );
  // pagination
  const currentProducts = searchedProducts.slice(indexOfFirstProduct, indexOfLastProduct);
  return (
    <>
      <main className='main'>
        <div className='top section-top'>
          <h2 className='top-title'>نتائج البحث</h2>
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
