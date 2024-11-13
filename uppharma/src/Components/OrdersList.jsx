import React,{useState} from 'react';
import Order from './Order';
import OrderDetails from './OrderDetails';


const OrdersList = ({ orders }) => {
  const [showOrderDetails, setShowOrderDetails] = useState(false);
  const [orderDetailsToBeDisplayed, setOrderDetailsToBeDisplayed] = useState({});


  return (
  <>
    {showOrderDetails
        ?
        <OrderDetails order={orderDetailsToBeDisplayed} setShowOrderDetails={setShowOrderDetails}/>
        :
        <div className="orders-container">
          {orders.map(order => (
            <div onClick={()=>{setShowOrderDetails(true);setOrderDetailsToBeDisplayed(order)}}><Order order={order}></Order></div>
          ))}
        </div>
    }
  </>
  );
};

export default OrdersList;