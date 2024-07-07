import React,{useState} from 'react';
import { FaArrowDown } from "react-icons/fa";
import { VscSettings } from "react-icons/vsc";
import Product from '../Components/Product';
import Footer from '../Components/Footer';
import { Pagination } from 'antd';
import stronger from '../Images/stronger with you.webp';
import sauvage from '../Images/sauvage.webp';
import aguero from '../Images/AGUERO_1024x1024.webp';
import ProductList from '../Components/ProductList';
export default function Section() {
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 10;
  const products = [
    // Add your product data here
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "2.5", image: aguero, availability: "متبقي 2 فقط." },
    { id: 1, name: "باكو رابان بلاك اكس اس عطر للرجال 100 مل", price: "5", image: stronger, availability: "متبقي 2 فقط." },
    { id: 1, name: "امبوريو ارماني سترونجر وذ يو عطر الرجال 100 مل", price: "3", image: sauvage, availability: "متبقي 2 فقط." },
    { id: 1, name: "لاكوست بلانك L12 – 12 عطر الرجال 100 مل", price: "17.5", image: aguero, availability: "متبقي 2 فقط." },
    { id: 1, name: "جيفنشي جنتل مان عطر للرجال 100 مل", price: "6", image: aguero, availability: "متبقي 2 فقط." },
    { id: 1, name: "شوبارد عطر عود ملكي للجنسين 80 مل", price: "2.5", image: stronger, availability: "متبقي 2 فقط." },
    { id: 1, name: "جان بول جولتيير لابيلا عطر للنساء 100 مل", price: "8", image: aguero, availability: "متبقي 2 فقط." },
    { id: 1, name: "جان بول سكاندال جولتيير عطر للنساء 80 مل", price: "4", image: stronger, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "15", image: aguero, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "2.5", image: stronger, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "1.5", image: sauvage, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "18", image: aguero, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "2", image: aguero, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "6.5", image: stronger, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "9", image: sauvage, availability: "متبقي 2 فقط." },
    { id: 1, name: "غوتشي ابسليوت عطر للنساء 90 مل", price: "12", image: aguero, availability: "متبقي 2 فقط." },
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
