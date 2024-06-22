import React,{ useState } from 'react'
import { LoadingOutlined, SmileOutlined, SolutionOutlined, UserOutlined } from '@ant-design/icons';
import { Steps } from 'antd';
import { CiBoxList } from "react-icons/ci";
import { CiWallet } from "react-icons/ci";
import { CiCircleCheck } from "react-icons/ci";
import { Outlet } from 'react-router-dom';

export default function Cart() {
  const [items, setItems] = useState(
    [
      {
        status: 'finish',
        icon: <CiBoxList />,
      },
      {
        status: 'wait',
        icon: <CiWallet />,
      },
      {
        // title: 'Done',
        status: 'wait',
        icon: <CiCircleCheck />,
      },
    ]);
  return (
    <main className='main'>
      <div className='top cart-top'>
        <h2 className='top-title'>عربة التسوق</h2>
        <div className="steps-container">
          <Steps
            items={items}
            direction="horizontal"
            responsive={false}
          />
        </div>
      </div>
      <div className="cart-content">
        <Outlet/>
      </div>
    </main>
  )
}
