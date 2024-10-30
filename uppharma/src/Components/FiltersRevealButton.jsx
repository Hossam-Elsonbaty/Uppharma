import React from 'react';
import { useProducts } from '../Context/ProductsContext';
export default function FiltersRevealButton() {
  const { getSubSectionProducts,clearProductsFilters } = useProducts();
  const handleClick=()=>{
    clearProductsFilters();
    getSubSectionProducts();// here you must check you in search results or subsection products to get the suitable products
  }
  return (
    <div className="reavele-filters" onClick={()=>{handleClick()}}>
      <h3>ازالة جميع الفلاتر</h3>
    </div>
  )
}