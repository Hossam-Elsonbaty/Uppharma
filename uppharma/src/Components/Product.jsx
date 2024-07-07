// import React, {useState, useRef} from 'react';
// import { MdOutlineDescription } from "react-icons/md";
// import { CiHeart } from "react-icons/ci";
// export default function Product({ products }) {
//   const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
//   const toggleDescription = () => {
//     setIsDescriptionVisible(prev => !prev);
//   };
//   const descriptionRef = useRef(null);
//   return (
//     <div className='products-container'>
//       {products.map(product => (
//         <div className='product' key={product.id}>
//           <div className='col'>
//             <div className='img-container'>
//               <div className='favorite'>
//                 <CiHeart />
//               </div>
//               <img src={product.image} className='product-img' alt="perfume" />
//             </div>
//             <div className='left-section'>
//               <h6 className='product-name'>{product.name}</h6>
//               <span className='product-price'>
//                 <span>{product.price}</span>
//                 <span>د.ك</span>
//               </span>
//               <span className='product-availability'>{product.availability}</span>
//               <div className='quantity'>
//                 <button className='decrease'>-</button>
//                 <span className='number'>1</span>
//                 <button className='increase'>+</button>
//               </div>
//               <div className='desc-order'>
//                 <button className='order-btn'>أطلب</button>
//                 <button className='description' onClick={toggleDescription}>
//                   <MdOutlineDescription />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div 
//           className={`description-div ${isDescriptionVisible ? 'show' : ''}`}
//           ref={descriptionRef}
//           style={{
//             maxHeight: isDescriptionVisible ? `${descriptionRef.current.scrollHeight}px` : '0',
//             transition: 'max-height 0.3s ease',
//           }}>
//             <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum temporibus excepturi ut amet quos neque autem pariatur quidem eum, assumenda qui obcaecati, voluptatum aliquam quasi porro iure sapiente rem. Sequi?</p>
//           </div>
//         </div>
//       ))}
//     </div>
//   )
// }
import React, { useState, useRef } from 'react';
import { CiHeart } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
const Product = ({ product }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const descriptionRef = useRef(null);
  const toggleDescription = () => {
    setIsDescriptionVisible(prev => !prev);
  };
  return (
    <div className='product' key={product.id}>
      <div className='col'>
        <div className='img-container'>
          <div className='favorite'>
            <CiHeart />
          </div>
          <img src={product.image} className='product-img' alt="perfume" />
        </div>
        <div className='left-section'>
          <h6 className='product-name'>{product.name}</h6>
          <span className='product-price'>
            <span>{product.price}</span>
            <span>د.ك</span>
          </span>
          <span className='product-availability'>{product.availability}</span>
          <div className='quantity'>
            <button className='decrease'>-</button>
            <span className='number'>1</span>
            <button className='increase'>+</button>
          </div>
          <div className='desc-order'>
            <button className='order-btn'>أطلب</button>
            <button className='description' onClick={toggleDescription}>
              <MdOutlineDescription />
            </button>
          </div>
        </div>
      </div>
      <div
        className={`description-div ${isDescriptionVisible ? 'show' : ''}`}
        ref={descriptionRef}
        style={{
          maxHeight: isDescriptionVisible ? `${descriptionRef.current.scrollHeight}px` : '0',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum temporibus excepturi ut amet quos neque autem pariatur quidem eum, assumenda qui obcaecati, voluptatum aliquam quasi porro iure sapiente rem. Sequi?</p>
      </div>
    </div>
  );
};

export default Product;
