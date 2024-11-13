import React,{useState} from 'react';

const Order = ({ order }) => {

  

  return (
    <>
      <div className="order-master-container" >
        <div className="order-master-left-span">
          <div className="order-master-left-up-span">
            <h4>{order.orderNo} :رقم الطلب </h4>
            <div className="order-master-datetime-span">{order.orderPlaced}</div>
          </div>
          <span className="order-master-state-span"> الحالة:  {order.state}</span>
        </div>
        <div className="order-master-images-span">
          {order.products.slice(0, 3).map((product, index) => (
            <img key={index} src={product.image} alt={`Product ${index + 1}`} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Order;