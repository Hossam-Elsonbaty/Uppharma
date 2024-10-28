import React from 'react'
import FiltersExitButton from './FiltersExitButton';
import FiltersRevealButton from './FiltersRevealButton';
import NormalFilter from './NormalFilter';
import PriceFilter from './PriceFilter';
export default function Filters() {

  return (
    <div className='filters-container'>
      <div className='filters-elevated-span'>
        <FiltersExitButton></FiltersExitButton> 
        <FiltersRevealButton></FiltersRevealButton>
      </div>
      <div className='filters-div'>
        <NormalFilter FilterTitle="العلامة التجارية"></NormalFilter>
        <PriceFilter FilterTitle="السعر"></PriceFilter>
        <NormalFilter FilterTitle="البائع"></NormalFilter>           
      </div>
    </div>
  )
}
