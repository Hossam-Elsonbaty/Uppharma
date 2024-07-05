import React from 'react';
import Navbar from '../Components/Navbar';
import FixedFooter from '../Components/FixedFooter';
import Footer from '../Components/Footer';
import { HiOutlinePencil } from "react-icons/hi2";
import { MdOutlineKeyboardArrowLeft } from "react-icons/md";
import { GoSignOut } from "react-icons/go";
const MyProfile = () => {
  return (
    <>
      <main className='my-profile'>
        <div className="container">
          <div className="my-account">
            <div className='col'>
              <h3>حسام السنباطي</h3>
              <span>01115869312</span>
            </div>
            <HiOutlinePencil />
          </div>
          <div className="element">
            <h3>الحساب</h3>
            <div className="col">
              <h4>طلباتي</h4>
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="col">
              <h4>عناويني</h4>
              <MdOutlineKeyboardArrowLeft />
            </div>
          </div>
          <div className="element">
            <h3>الإعدادات</h3>
            <div className="col">
              <h4>لغة</h4>
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="col">
              <h4>الدولة</h4>
              <MdOutlineKeyboardArrowLeft />
            </div>
          </div>
          <div className="element">
            <h3>الدعم الفني</h3>
            <div className="col">
              <h4>الشروط والاحكام</h4>
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="col">
              <h4>سياسة الخصوصية</h4>
              <MdOutlineKeyboardArrowLeft />
            </div>
            <div className="col">
              <h4>تواصل معانا</h4>
              <MdOutlineKeyboardArrowLeft />
            </div>
          </div>
          <div className="element">
            <div className="col" style={{borderBottom:'25px solid #f5f5f5'}}>
              <h4>تسجيل خروج</h4>
              <GoSignOut />
            </div>
          </div>
        </div>
        <Footer/>
      </main>
    </>
  )
}

export default MyProfile