import React ,{ useState } from 'react';
import { FaArrowDown, FaArrowUp } from 'react-icons/fa'; 

export default function NormalFilter({FilterTitle}) {
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
        <div className={`the-filters ${showFilters ? 'show' : ''}`}>
          <div className="filter-to-choose filter-choosed">Samsung</div>
          <div className="filter-to-choose">Apple</div>
          <div className="filter-to-choose">Oppo</div>
        </div>
      )}
    </div>
  )
}