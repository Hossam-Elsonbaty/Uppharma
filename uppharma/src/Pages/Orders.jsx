import React,{useState,useEffect} from 'react';
import Footer from '../Components/Footer';
import OrdersSearchBar from './../Components/OrdersSearchBar';
import OrdersList from './../Components/OrdersList';
import Orders2024 from '../Data/data2024Orders';
import Orders2023 from '../Data/data2023Orders';
import Orders2022 from '../Data/data2022Orders';
import OrdersYears from '../Data/dataOrdersYears';

export default function Orders( ) {
  const [selectedYear, setSelectedYear] = useState(OrdersYears[0]);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    setOrders(Orders2024)
  }, []);

  useEffect(() => {
    if (selectedYear=="2024"){
      setOrders(Orders2024)
    }else if(selectedYear=="2023"){
      setOrders(Orders2023)
    }else if(selectedYear=="2022"){
      setOrders(Orders2022)
    }
  }, [selectedYear]);

  const handleChangeSelectYear = (event) => {
    setSelectedYear(event.target.value);
  };

  return (
    <>
      <main className='main'>
        <div className='top section-top'>
          <div className="orders-title-container">
              <h2 className='top-title'> طلباتي في </h2>
              <select name="" id="" value={selectedYear} onChange={handleChangeSelectYear}>
                {OrdersYears.map((year) => (
                  <option key={year} value={year}>
                    {year}
                  </option>
                ))}
              </select>
          </div>     
          <OrdersSearchBar selectedYear={selectedYear}></OrdersSearchBar>
        </div>
        <OrdersList orders={orders}></OrdersList>
        {/* 
        <div className='pagination'>
          <Pagination 
            current={currentPage}
            total={favorites.length}
            pageSize={productsPerPage}
            onChange={onPageChange}
          />
        </div> */}
        <Footer></Footer>
      </main>
    </>
  )
}
