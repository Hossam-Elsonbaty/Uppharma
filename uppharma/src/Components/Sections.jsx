import React from 'react';
import img1 from '../Images/1689175810-294.avif';
import img2 from '../Images/minimalist-scene-cosmetic-bottle-serene-water-surface-with-beautiful-natural-layout-mockup_655090-299029.avif';
import img3 from '../Images/Hair-Types.webp';
export default function Sections() {
  return (
    <section className='sections-container'>
      <div className='section'>
        <img src={img1} alt="" />
        <div className='section-name'>
          <h2>
            العناية الطبية
          </h2>
        </div>
      </div>
      <div className='section'>
        <img src={img2} alt="" />
        <div className='section-name'>
          <h2>
            العطور
          </h2>
        </div>
      </div>
      <div className='section'>
        <img src={img3} alt="" />
        <div className='section-name'>
          <h2>
            العناية بالشعر
          </h2>
        </div>
      </div>
    </section>
  )
}
