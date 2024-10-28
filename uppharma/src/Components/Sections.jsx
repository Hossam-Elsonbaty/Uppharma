import React from 'react';
import sectionData from '../Data/dataSections';
import SectionCard from './SectionCard';
export default function Sections() {
  return (
    <section className='sections-container'>
      {sectionData.map(section => (
        <SectionCard key={section.id} section={section} />
      ))}    </section>
  )
}
