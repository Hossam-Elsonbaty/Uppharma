import React, { useState, useRef, useEffect, useContext } from 'react';
import { CiHeart, CiShoppingCart, CiCirclePlus } from "react-icons/ci";
import { MdOutlineDescription } from "react-icons/md";
import { LuTrash2 } from "react-icons/lu";
import { IoMdClose } from "react-icons/io";
import { CiCircleMinus } from "react-icons/ci";
import CartContext from '../Context/CartContext';
import FormatCurrency from './FormatCurrency';
const Product = ({ product }) => {
  const [isDescriptionVisible, setIsDescriptionVisible] = useState(false);
  const popupRef = useRef(null);
  const [isActive, setIsActive] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const { cart, addToCart, increaseQuantity, decreaseQuantity, removeFromCart } = useContext(CartContext);
  const descriptionRef = useRef(null);
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
  useEffect(() => {
    // setIsActive(true);
    // setTimeout(() => {
    //   setIsActive(false);
    // }, 5000);
    const isProductInCart = cart.some(item => item.id === product.id);
    setIsActive(isProductInCart);
  }, [cart, product.id]);
  const handlePopup = (id) => {
    setIsOpen(prev => !prev);
    console.log(id);
  };
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  const handleIncreaseQuantity = () => {
    increaseQuantity(product.id);
  };
  const handleDecreaseQuantity = () => {
    decreaseQuantity(product.id);
  };
  const handleRemoveFromCart = () => {
    removeFromCart(product.id);
  };
  const cartItem = cart.find(item => item.id === product.id);
  return (
    <div className='product' key={product.id}>
      <div className={`disc-popup-cont ${isOpen ? 'active' : ''}`}>
        <div ref={descriptionRef} className='disc-popup'>
          <button className='close' onClick={() => setIsOpen(false)}><IoMdClose /></button>
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
          <img src={product.image} className='product-img' alt="product" />
        </div>
        <div className='left-section'>
          <h6 className='product-name'>{product.name}</h6>
          <span className='product-price'>
            <span>{FormatCurrency(product.price)}</span>
            {/* <span>{product.price} <span className='currency'>د.ك</span></span> */}
            <span className='product-availability'>{product.availability}</span>
          </span>
          <div className='desc-order'>
            <button className={`order-btn ${isActive ? 'active' : ''}`} >
              {!isActive ?
                <CiShoppingCart onClick={() => handleAddToCart(product)}/>
                :
                <div className='active-div'>
                  <button className='plus' onClick={handleIncreaseQuantity}><CiCirclePlus /></button>
                  <h1 className='qnt'>{cartItem?.quantity}</h1>
                  <button className='trash' >
                    {cartItem?.quantity > 1
                      ?<CiCircleMinus onClick={handleDecreaseQuantity}/> 
                      :<LuTrash2 onClick={handleRemoveFromCart}/> }
                  </button>
                </div>
              }
            </button>
            <button className='description' ref={popupRef} onClick={() => handlePopup(product.id)}  >
              <MdOutlineDescription />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
