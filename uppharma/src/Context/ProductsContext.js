import React, { createContext, useState, useContext } from 'react';
import ProductData from '../Data/data';

// Create the context
const ProductsContext = createContext();

// Create a provider component
export function ProductsProvider({ children }) {
  const [productsToDisplay, setProductsToDisplay] = useState([]);
  const [productsMinPrice, setProductsMinPrice] = useState(0);
  const [productsMaxPrice, setProductsMaxPrice] = useState(0);
  const [productsBrands, setProductsBrands] = useState([]);

  const getSubSectionProducts = () => {
    const maxPrice = Math.max(...ProductData.map(product => product.price));
    const minPrice = Math.min(...ProductData.map(product => product.price));
    const brands = [...new Set(ProductData.map(product => product.brand))];
    setProductsMaxPrice(maxPrice);
    setProductsMinPrice(minPrice);
    setProductsBrands(brands);
    setProductsToDisplay(ProductData);
  };

  const getSearchProducts = (searchParam) => {
    // Filter products based on search term , replace this step with requesting backend with searchParam for filtered data directly
    const searchedProducts = ProductData.filter((product) =>
      product.name.toLowerCase().includes(searchParam.toLowerCase()) 
    );
    const maxPrice = Math.max(...ProductData.map(product => product.price));
    const minPrice = Math.min(...ProductData.map(product => product.price));
    const brands = [...new Set(ProductData.map(product => product.brand))];
    setProductsMaxPrice(maxPrice);
    setProductsMinPrice(minPrice);
    setProductsBrands(brands);
    setProductsToDisplay(searchedProducts);
  };

  return (
    <ProductsContext.Provider value={{ productsToDisplay,productsMinPrice,productsMaxPrice,productsBrands,getSubSectionProducts ,getSearchProducts }}>
      {children}
    </ProductsContext.Provider>
  );
}

// Custom hook for easy access to the context
export function useProducts() {
  return useContext(ProductsContext);
}