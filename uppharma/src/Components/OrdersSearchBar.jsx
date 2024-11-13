import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa';

export default function OrdersSearchBar({selectedYear}) {

  const handleInputChange = (event) => {

  };

  return (
    <div className="orders-search-bar">
      <input
        type="text"
        placeholder={`ابحث في طلبات ${selectedYear}`}
        value=""
        onChange={handleInputChange}
      />
      <button><FaSearch /></button>
    </div>
  );
}