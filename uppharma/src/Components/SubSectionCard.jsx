import React from 'react'
import { IoIosFitness } from "react-icons/io";
import { CiCoffeeCup } from "react-icons/ci";
import puzzle from "../Images/puzzle-svgrepo-com (2).svg"
const Card = ({ text, color, icon }) => {
  return (
    <div className="card" style={{backgroundColor:color}}>
      <img src={puzzle} className='card-icon' alt="" />
      {icon}
      <span className="card-text">{text}</span>
    </div>
  );
};

export default Card;
