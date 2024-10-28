import { FaArrowDown, FaArrowUp } from 'react-icons/fa'; 
import React, { useState } from 'react'

export default function PriceFilter({FilterTitle}) {
  const [minPrice, setMinPrice] = useState(100);
  const [maxPrice, setMaxPrice] = useState(900);

  const handleMinChange = (event) => {
    const value = Math.min(Number(event.target.value), maxPrice - 1);
    setMinPrice(value);
  };

  const handleMaxChange = (event) => {
    const value = Math.max(Number(event.target.value), minPrice + 1);
    setMaxPrice(value);
  };

  const [showFilters, setShowFilters] = useState(true);

  const toggleFilters = () => {
    setShowFilters(prevState => !prevState);
  };
  return (
  <div className="one-filter-span">
    <div className='filter-title-container'>
      <div className="filter-title">
        {FilterTitle} 
      </div>
      <div className="filter-open-close-container" onClick={toggleFilters}>
        {showFilters ? <FaArrowUp /> : <FaArrowDown /> }
      </div>
    </div>
    {showFilters && (
    <div className={`price-filter ${showFilters ? 'show' : ''}`}>
      <div className="price-range"> {minPrice} EGP - {maxPrice} EGP </div>
      <div className="price-bar">
        <input type="range" min="0" max="10000" value={minPrice} onChange={handleMinChange} className="slider"/>
        <input type="range" min="0" max="10000" value={maxPrice} onChange={handleMaxChange} className="slider"/>
      </div>
    </div>
    )}
  </div>
)
}