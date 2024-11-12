import React from 'react';
import Order from './Order';

const OrdersList = ({ orders }) => {
  return (

    <div className="orders-container">
            {/* {orders.map(order => (
    <Order key={order.id} order={order} />
  ))} */}
      <div className="order-master-container">
        <div className="order-master-left-span">
          <div className="order-master-left-up-span">
            <h4>23s8Q8 :رقم الطلب </h4>
            <div className="order-master-datetime-span">23-9-2024 10:50 AM</div>
          </div>
          <span className="order-master-state-span"> الحالة: تم الارسال</span>
        </div>
        <div className="order-master-images-span">
          <img src="https://th.bing.com/th/id/R.69cc0890d05dd8bb20ca8e60cdea7d91?rik=NfEeYdKwZZqz9Q&pid=ImgRaw&r=0" alt="" />
          <img src="https://th.bing.com/th/id/OIP.KbM1leV7E_UW_omKbxIBagHaHa?rs=1&pid=ImgDetMain" alt="" />
          <img src="https://th.bing.com/th/id/OIP.gOSWD16OMZ6vAMmKT8ltUwHaHa?rs=1&pid=ImgDetMain" alt="" />
        </div>
      </div>
      <div className="order-master-container">
        <div className="order-master-left-span">
          <div className="order-master-left-up-span">
            <h4>23s8Q8 :رقم الطلب </h4>
            <div className="order-master-datetime-span">23-9-2024 10:50 AM</div>
          </div>
          <span className="order-master-state-span"> الحالة: تم الارسال</span>
        </div>
        <div className="order-master-images-span">
          <img src="https://th.bing.com/th/id/R.69cc0890d05dd8bb20ca8e60cdea7d91?rik=NfEeYdKwZZqz9Q&pid=ImgRaw&r=0" alt="" />
          <img src="https://th.bing.com/th/id/OIP.KbM1leV7E_UW_omKbxIBagHaHa?rs=1&pid=ImgDetMain" alt="" />
          <img src="https://th.bing.com/th/id/OIP.gOSWD16OMZ6vAMmKT8ltUwHaHa?rs=1&pid=ImgDetMain" alt="" />
        </div>
      </div>
      <div className="order-master-container">
        <div className="order-master-left-span">
          <div className="order-master-left-up-span">
            <h4>23s8Q8 :رقم الطلب </h4>
            <div className="order-master-datetime-span">23-9-2024 10:50 AM</div>
          </div>
          <span className="order-master-state-span"> الحالة: تم الارسال</span>
        </div>
        <div className="order-master-images-span">
          <img src="https://th.bing.com/th/id/R.69cc0890d05dd8bb20ca8e60cdea7d91?rik=NfEeYdKwZZqz9Q&pid=ImgRaw&r=0" alt="" />
          <img src="https://th.bing.com/th/id/OIP.KbM1leV7E_UW_omKbxIBagHaHa?rs=1&pid=ImgDetMain" alt="" />
          <img src="https://th.bing.com/th/id/OIP.gOSWD16OMZ6vAMmKT8ltUwHaHa?rs=1&pid=ImgDetMain" alt="" />
        </div>
      </div>
      <div className="order-master-container">
        <div className="order-master-left-span">
          <div className="order-master-left-up-span">
            <h4>23s8Q8 :رقم الطلب </h4>
            <div className="order-master-datetime-span">23-9-2024 10:50 AM</div>
          </div>
          <span className="order-master-state-span"> الحالة: تم الارسال</span>
        </div>
        <div className="order-master-images-span">
          <img src="https://th.bing.com/th/id/R.69cc0890d05dd8bb20ca8e60cdea7d91?rik=NfEeYdKwZZqz9Q&pid=ImgRaw&r=0" alt="" />
          <img src="https://th.bing.com/th/id/OIP.KbM1leV7E_UW_omKbxIBagHaHa?rs=1&pid=ImgDetMain" alt="" />
          <img src="https://th.bing.com/th/id/OIP.gOSWD16OMZ6vAMmKT8ltUwHaHa?rs=1&pid=ImgDetMain" alt="" />
        </div>
      </div>
      <div className="order-master-container">
        <div className="order-master-left-span">
          <div className="order-master-left-up-span">
            <h4>23s8Q8 :رقم الطلب </h4>
            <div className="order-master-datetime-span">23-9-2024 10:50 AM</div>
          </div>
          <span className="order-master-state-span"> الحالة: تم الارسال</span>
        </div>
        <div className="order-master-images-span">
          <img src="https://th.bing.com/th/id/R.69cc0890d05dd8bb20ca8e60cdea7d91?rik=NfEeYdKwZZqz9Q&pid=ImgRaw&r=0" alt="" />
          <img src="https://th.bing.com/th/id/OIP.KbM1leV7E_UW_omKbxIBagHaHa?rs=1&pid=ImgDetMain" alt="" />
          <img src="https://th.bing.com/th/id/OIP.gOSWD16OMZ6vAMmKT8ltUwHaHa?rs=1&pid=ImgDetMain" alt="" />
        </div>
      </div>
    </div>
  );
};

export default OrdersList;