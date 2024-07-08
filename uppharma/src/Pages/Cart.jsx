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

import React, { useState, useRef } from 'react';
import { Link, useNavigate  } from 'react-router-dom';
import { Button, message, Steps, theme } from 'antd';
import CartItems from '../Components/CartItems';
import OrderInfo from '../Components/OrderInfo';
import PaymentMethods from '../Components/PaymentMethods';
import { AiOutlineUnorderedList,AiOutlineFileDone, AiOutlineCreditCard} from "react-icons/ai";
const steps = [
  {
    title: 'العربة',
    icon: <AiOutlineUnorderedList />,
    content: <CartItems/>,
  },
  {
    title: 'العنوان',
    icon: <AiOutlineFileDone />,
    content: <OrderInfo/>,
  },
  {
    title: 'طرق الدفع',
    icon: <AiOutlineCreditCard />,
    content: <PaymentMethods/>,
  },
];
const Cart = ()=> {
  const navigate = useNavigate();
  const { token } = theme.useToken();
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };
  const prev = () => {
    setCurrent(current - 1);
  };
  const items = steps.map((item) => ({
    key: item.title,
    title: item.title,
    icon:item.icon
  }));
  return (
    <main className='main my-cart-main' style={{ overflowY: "hidden" }}>
      <div className='top cart-top'>
        <h2 className='top-title'>عربة التسوق</h2>
        <div className="steps-container">
          <Steps current={current} items={items} direction="horizontal" responsive={false}/>
          {/* <Steps onChange={onChange} current={current} items={items} direction="horizontal" responsive={false} /> */}
        </div>
      </div>
      <div className="cart-content">
          <div className='content'>{steps[current].content}</div>
        {/* <Outlet /> */}
        <div className='fixed-bottom'>
          <div className='col'>
            {current < steps.length - 1 && (
              <div className='continue'>
                <Button type="primary" onClick={() => next()}>
                  متابعة الشراء
                </Button>
                <div className='total-price'>
                  <span className='item-price'><span className='price'>1.5</span> د.ك</span>
                </div>
              </div>
            )}
            {current === steps.length - 1 && (
              <div className='continue'>
                <Button type="primary" onClick={() => message.success('Processing complete!')}>
                  Done
                </Button>
                <div className='total-price'>
                  <span className='item-price'><span className='price'>1.5</span> د.ك</span>
                </div>
              </div>
            )}
            {current > 0 && (
              <Button
                style={{
                  margin: '0 12px 0 0',
                }}
                onClick={() => prev()}
              >
                العوده
              </Button>
            )}
          </div>
          {/* <div className='total-price'>
            <span className='item-price'><span className='price'>1.5</span> د.ك</span>
          </div>
          <button className='process' >
            <Link to="order-info">
              <span>متابعة الشراء</span>
              <CiSquareChevLeft />
            </Link>
          </button> */}
        </div>
      </div>
    </main>
  );
}
export default Cart;