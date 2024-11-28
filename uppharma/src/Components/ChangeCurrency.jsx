import React,{useState} from 'react';
import flag1 from '../Images/egypt-flag.jpg';
import flag2 from '../Images/kuwait-flag.jpg';
import flag3 from '../Images/saudi-flag.jpg';
import flag4 from '../Images/america.png';
import flag5 from '../Images/Flag-European-Union.webp';

export default function ChangeCurrency() {
  const [currency, setCurrency] = useState("");

  return (
    <div className="currency-select-container">
      <h2 className='top-title'> العملة </h2>
      <select name="" id="" value={currency} >
        <option value="EP"><img src={flag1} alt="" /></option>
        <option value="DK"><img src={flag2} alt="" /></option>
        <option value="RS"><img src={flag3} alt="" /></option>
        <option value="EU"><img src={flag4} alt="" /></option>
        <option value="US"><img src={flag5} alt="" /></option>
      </select>
    </div>
  )
}