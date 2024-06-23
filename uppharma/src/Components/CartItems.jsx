// import React from 'react';
// import { Link } from 'react-router-dom';
// import { CiTrash } from "react-icons/ci";
// import panadol from "../Images/Panadol.webp"
// import Augmentin from "../Images/Augmentin.webp"
// import Augram from "../Images/Augram.webp"
// import Stronger from "../Images/stronger with you.webp"
// import sauvage from "../Images/sauvage.webp"
// import Aguero from "../Images/AGUERO_1024x1024.webp"
// const CartItems = () => {
//   return <div className='cart-items'>
//     <div className='item'>
//       <img src={panadol} alt='product' />
//       <div className="details">
//         <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
//         <div className='quantity-price'>
//           <span className='item-price'><span>1.5</span> د.ك</span>
//           <div className='item-quantity'>
//             <button>-</button>
//             <span className='quantity-number'>1</span>
//             <button>+</button>
//           </div>
//         </div>
//       </div>
//       <button className='trash'><CiTrash /></button>
//     </div>
//     <div className='item'>
//       <img src={Augmentin} alt='product' />
//       <div className="details">
//         <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
//         <div className='quantity-price'>
//           <span className='item-price'><span>1.5</span> د.ك</span>
//           <div className='item-quantity'>
//             <button>-</button>
//             <span className='quantity-number'>1</span>
//             <button>+</button>
//           </div>
//         </div>
//       </div>
//       <button className='trash'><CiTrash /></button>
//     </div>
//     <div className='item'>
//       <img src={Augram} alt='product' />
//       <div className="details">
//         <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
//         <div className='quantity-price'>
//           <span className='item-price'><span>1.5</span> د.ك</span>
//           <div className='item-quantity'>
//             <button>-</button>
//             <span className='quantity-number'>1</span>
//             <button>+</button>
//           </div>
//         </div>
//       </div>
//       <button className='trash'><CiTrash /></button>
//     </div>
//     <div className='item'>
//       <img src={Stronger} alt='product' />
//       <div className="details">
//         <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
//         <div className='quantity-price'>
//           <span className='item-price'><span>1.5</span> د.ك</span>
//           <div className='item-quantity'>
//             <button>-</button>
//             <span className='quantity-number'>1</span>
//             <button>+</button>
//           </div>
//         </div>
//       </div>
//       <button className='trash'><CiTrash /></button>
//     </div>
//     <div className='item'>
//       <img src={sauvage} alt='product' />
//       <div className="details">
//         <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
//         <div className='quantity-price'>
//           <span className='item-price'><span>1.5</span> د.ك</span>
//           <div className='item-quantity'>
//             <button>-</button>
//             <span className='quantity-number'>1</span>
//             <button>+</button>
//           </div>
//         </div>
//       </div>
//       <button className='trash'><CiTrash /></button>
//     </div>
//     <div className='item'>
//       <img src={Aguero} alt='product' />
//       <div className="details">
//         <span className='item-name'>دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة</span>
//         <div className='quantity-price'>
//           <span className='item-price'><span>1.5</span> د.ك</span>
//           <div className='item-quantity'>
//             <button>-</button>
//             <span className='quantity-number'>1</span>
//             <button>+</button>
//           </div>
//         </div>
//       </div>
//       <button className='trash'><CiTrash /></button>
//     </div>
//     {/* <Link to='payment-methods'>payment methods</Link> */}
//   </div>;
// };

// export default CartItems;
import React from 'react';
import { CiTrash } from "react-icons/ci";
import panadol from "../Images/Panadol.webp";
import Augmentin from "../Images/Augmentin.webp";
import Augram from "../Images/Augram.webp";
import Stronger from "../Images/stronger with you.webp";
import sauvage from "../Images/sauvage.webp";
import Aguero from "../Images/AGUERO_1024x1024.webp";
const CartItems = () => {
  const products = [
    { img: panadol, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
    { img: Augmentin, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
    { img: Augram, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
    { img: Stronger, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
    { img: sauvage, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
    { img: Aguero, name: "دوكراي اناكابس اكتيف بلس للشعر والاظافر 30 كبسولة", price: "1.5 د.ك" },
  ];
  return (
    <div className='cart-items'>
      {products.map((product, index) => (
        <div className='item' key={index}>
          <img src={product.img} alt='product' />
          <div className="details">
            <span className='item-name'>{product.name}</span>
            <div className='quantity-price'>
              <span className='item-price'><span>{product.price}</span></span>
              <div className='item-quantity'>
                <button>-</button>
                <span className='quantity-number'>1</span>
                <button>+</button>
              </div>
            </div>
          </div>
          <button className='trash'><CiTrash /></button>
        </div>
      ))}
    </div>
  );
};

export default CartItems;
