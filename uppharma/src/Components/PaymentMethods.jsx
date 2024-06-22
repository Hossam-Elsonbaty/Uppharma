import React from 'react';
import { CiCreditCard1 } from "react-icons/ci";

const PaymentMethods = () => {
  return <>
    <div className="total-price">
      <div className="element">
        <div className='col'>
          <h3>قيمة المنتجات </h3>
          <span>د.ك<span>1.5</span></span>
        </div>
        <div className='col'>
          <h3>الخصم</h3>
          <span>د.ك<span>5</span></span>
        </div>
        <div className='col'>
          <h3>تكاليف الشحن</h3>
          <span>د.ك<span>5</span></span>
        </div>
        <div className='col'>
          <h3>المجموع النهائي</h3>
          <span>د.ك<span>5</span></span>
        </div>
      </div>
      <div className="element">
        <div className='col'>
          <input type="text" name="" id="" placeholder='كود الخصم' />
        </div>
        <div className='col'>
          <button>
            تحصيل
          </button>
        </div>
        <div className='col'>
          <span>
            إجمالي الخصم:
          </span>
          <span>
            د.ك<span>5</span>
          </span>
        </div>
      </div>
      <div className="element">
        <div className='col'>
          <h3 className='price'>8</h3>
          <span>د.ك</span>
        </div>
        <div className='col'>
          <button>
            <span>الدفع</span>
            <CiCreditCard1 />
          </button>
        </div>
      </div>
    </div>
  </>;
};
export default PaymentMethods;