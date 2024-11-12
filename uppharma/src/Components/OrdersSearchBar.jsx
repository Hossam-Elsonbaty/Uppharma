import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function OrdersSearchBar() {

  const handleInputChange = (event) => {

  };

  return (
    <div className="orders-search-bar">
      <input
        type="text"
        placeholder="ابحث في طلبات 2024"
        value=""
        onChange={handleInputChange}
      />
      <button><FaSearch /></button>
    </div>
  );
}