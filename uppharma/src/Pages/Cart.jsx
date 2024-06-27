// import React,{ useState } from 'react'
// import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
// import { Steps } from 'antd';
// import { CiBoxList } from "react-icons/ci";
// import { CiWallet } from "react-icons/ci";
// import { CiCircleCheck } from "react-icons/ci";
// import { Outlet } from 'react-router-dom';
// import { CiGrid41 } from "react-icons/ci";
// import { CiSquareChevLeft } from "react-icons/ci";
// export default function Cart() {
//   const [items, setItems] = useState(
//     [
//       {
//         status: 'finish',
//         icon: <CiGrid41 />,
//       },
//       {
//         // title: 'Done',
//         status: 'wait',
//         icon: <CiBoxList />,
//       },
//       {
//         status: 'wait',
//         icon: <CiWallet />,
//       },
//     ]);
//   return (
//     <main className='main my-cart-main' style={{overflowY:"hidden"}}>
//       <div className='top cart-top'>
//         <h2 className='top-title'>عربة التسوق</h2>
//         <div className="steps-container">
//           <Steps
//             items={items}
//             direction="horizontal"
//             responsive={false}
//           />
//         </div>
//       </div>
//       <div className="cart-content">
//         <Outlet/>
//         <div className='fixed-bottom'>
//           <div className='total-price'>
//             <span className='item-price'><span className='price'>1.5</span> د.ك</span>
//           </div>
//           <button className='process'>
//             <span>متابعة الشراء</span>
//             <CiSquareChevLeft />
//           </button>
//         </div>
//       </div>
//     </main>
//   )
// }

import React, { useState } from 'react';
import { Steps } from 'antd';
import { CiBoxList, CiWallet, CiCircleCheck, CiGrid41, CiSquareChevLeft } from "react-icons/ci";
import { Outlet, Link, useNavigate  } from 'react-router-dom';
  const Cart = ()=> {
  const [items, setItems] = useState([
    { status: 'finish', icon: <CiGrid41 /> },
    { status: 'wait', icon: <CiBoxList /> },
    { status: 'wait', icon: <CiWallet /> },
  ]);
  const [current, setCurrent] = useState(0);
  const navigate = useNavigate();
  const onChange = (value) => {
    console.log(value);
    setCurrent(value);
    setItems(prevItems => 
      prevItems.map((item, index) => 
        index === current ? { ...item, status: 'process' } : item
      )
    );
  };
  const handleSteps = () => {
    setItems(prevItems => 
      prevItems.map((item, index) => 
        index === 1 ? { ...item, status: 'process' } : item
      )
    );
    navigate("payment-methods");
  };
  return (
    <main className='main my-cart-main' style={{ overflowY: "hidden" }}>
      <div className='top cart-top'>
        <h2 className='top-title'>عربة التسوق</h2>
        <div className="steps-container">
          <Steps onChange={onChange} current={current} items={items} direction="horizontal" responsive={false} />
        </div>
      </div>
      <div className="cart-content">
        <Outlet />
        <div className='fixed-bottom'>
          <div className='total-price'>
            <span className='item-price'><span className='price'>1.5</span> د.ك</span>
          </div>
          <button className='process' onClick={handleSteps}>
            <Link to="order-info">
              <span>متابعة الشراء</span>
              <CiSquareChevLeft />
            </Link>
          </button>
        </div>
      </div>
    </main>
  );
}
export default Cart;