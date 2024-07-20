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
import React, { useState, useRef, useEffect } from 'react';
import { CiHeart } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { CiShoppingCart } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import { LuTrash2 } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
const Product = ({ product }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const descriptionRef = useRef(null);
  const popupRef = useRef(null);
  const [isActive, setIsActive] = useState(false)
  const [isOpen, setIsOpen] = useState(false)
  const toggleDescription = () => {
    setIsDescriptionVisible(prev => !prev);
  };
  const handleClickOutside = (event) => {
    if (
      descriptionRef.current &&
      !descriptionRef.current.contains(event.target) &&
      isOpen
    ) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);
  const handlePopup = (id)=> {
    setIsOpen(prev => !prev);
    console.log(id);
  }
  const handleCart = (id) => {
    console.log(id);
    setIsActive(prev => !prev);
    setTimeout(() => {
      setIsActive(false) 
    }, 1500);
    if (localStorage.getItem("cart")){
      let cart = JSON.parse(localStorage.getItem("cart"));
      let index = cart.findIndex(item => item.productId === id)
      if (index !== -1){
        console.log("yes");
        cart[index].quantity += 1;
      } else {
        console.log("no");
        cart.push({productId: id, quantity:1});
      }
      localStorage.setItem("cart",JSON.stringify(cart));
    } else{
      let cart = [];
      cart.push({productId: id, quantity:1});
      localStorage.setItem("cart",JSON.stringify(cart));
    }
  }
  return (
    <div className='product' key={product.id}>
      <div className={` disc-popup-cont ${isOpen ? 'active' : ''} `}>
        <div ref={descriptionRef} className='disc-popup'>
          <button className='close' onClick={()=>setIsOpen(false)}><IoMdClose /></button>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates reprehenderit neque ut asperiores? Quos suscipit quis aspernatur sed. Harum blanditiis dolorem, dolore pariatur eaque eos veniam delectus quia libero voluptatem!</span>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates reprehenderit neque ut asperiores? Quos suscipit quis aspernatur sed. Harum blanditiis dolorem, dolore pariatur eaque eos veniam delectus quia libero voluptatem!</span>
          <span>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptates reprehenderit neque ut asperiores? Quos suscipit quis aspernatur sed. Harum blanditiis dolorem, dolore pariatur eaque eos veniam delectus quia libero voluptatem!</span>
        </div>
      </div>
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
            <span>{product.price} <span className='currency'>د.ك</span></span>
            <span className='product-availability'>{product.availability}</span>
          </span>
          {/* <div className='quantity'>
            <button className='decrease'>-</button>
            <span className='number'>1</span>
            <button className='increase'>+</button>
          </div> */}
          <div className='desc-order'>
            <button className={`order-btn ${isActive ? 'active' : ''}`} onClick={()=>handleCart(product.id)}>
              {isActive == false ?
              <CiShoppingCart />
              :
              <div className='active-div'>
                <button className='plus'><CiCirclePlus /></button>
                <h1 className='qnt'>1</h1>
                <button className='trash'><LuTrash2 /></button>
              </div>
              }
            </button>
            <button className='description' ref={popupRef} onClick={()=>handlePopup(product.id)}  >
              <MdOutlineDescription />
            </button>
          </div>
        </div>
      </div>
      {/* <div
        className={`description-div ${isDescriptionVisible ? 'show' : ''}`}
        ref={descriptionRef}
        style={{
          maxHeight: isDescriptionVisible ? `${descriptionRef.current.scrollHeight}px` : '0',
          transition: 'max-height 0.3s ease',
        }}
      >
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum temporibus excepturi ut amet quos neque autem pariatur quidem eum, assumenda qui obcaecati, voluptatum aliquam quasi porro iure sapiente rem. Sequi?</p>
      </div> */}
    </div>
  );
};

export default Product;

// if(localStorage.getItem("cart")){
//   let cart = JSON.parse(localStorage.getItem("cart"));
//   let index = cart.findIndex((item) => item.id === id);
//   if(index !== -1){
//     cart[index].quantity += 1;
//     } else{
//       cart.push({id, quantity: 1});
//     }
//   localStorage.setItem("cart", JSON.stringify(cart));
// } else{
//   let cart = [];
//   cart.push({id, quantity: 1});
//   localStorage.setItem("cart", JSON.stringify(cart));
// }
