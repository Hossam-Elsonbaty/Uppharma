import React,{useState} from 'react';
import { FaArrowDown } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Product from '../Components/Product';
import Footer from '../Components/Footer';
import { Pagination } from 'antd';
import product1 from '../Images/Done1.jpg';
import product2 from '../Images/Done2.jpg';
import product3 from '../Images/Done3.jpg';
import product4 from '../Images/Done4.jpg';
import product5 from '../Images/Done5.jpg';
import product6 from '../Images/Done6.jpg';
import product7 from '../Images/Done7.jpg';
import product8 from '../Images/Done8.jpg';
import ProductList from '../Components/ProductList';
export default function Section() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const products = [
    // Add your product data here
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "2.5", image: product1, availability: "متبقي 2 فقط." },
    { id: 2, name: "باكو رابان بلاك اكس اس عطر للرجال 100 مل", price: "5", image: product2, availability: "متبقي 2 فقط." },
    { id: 3, name: "امبوريو ارماني سترونجر وذ يو عطر الرجال 100 مل", price: "3", image: product3, availability: "متبقي 2 فقط." },
    { id: 4, name: "لاكوست بلانك L12 – 12 عطر الرجال 100 مل", price: "17.5", image: product4, availability: "متبقي 2 فقط." },
    { id: 5, name: "جيفنشي جنتل مان عطر للرجال 100 مل", price: "6", image: product5, availability: "متبقي 2 فقط." },
    { id: 1, name: "شوبارد عطر عود ملكي للجنسين 80 مل", price: "2.5", image: product6, availability: "متبقي 2 فقط." },
    { id: 1, name: "جان بول جولتيير لابيلا عطر للنساء 100 مل", price: "8", image: product7, availability: "متبقي 2 فقط." },
    { id: 1, name: "جان بول سكاندال جولتيير عطر للنساء 80 مل", price: "4", image: product8, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "15", image: product1, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "2.5", image: product1, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "1.5", image: product1, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "18", image: product1, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "2", image: product1, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "6.5", image: product1, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "9", image: product1, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "12", image: product1, availability: "متبقي 2 فقط." },
    // Repeat similar objects to mock your data
  ];
  const onPageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo(0, 0);
  };
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProducts = products.slice(indexOfFirstProduct, indexOfLastProduct);
  return (
    <>
      <main className='main'>
        <div className='top section-top'>
          <h2 className='top-title'>قسم العطور</h2>
          <div className='filter'>
            <span>فلتر</span> 
            <VscSettings />
          </div>
        </div>
        <ProductList products={currentProducts}></ProductList>
        <div className='pagination'>
          <Pagination 
            current={currentPage}
            total={products.length}
            pageSize={productsPerPage}
            onChange={onPageChange}
          />
        </div>
        <Footer></Footer>
      </main>
    </>
  )
}
