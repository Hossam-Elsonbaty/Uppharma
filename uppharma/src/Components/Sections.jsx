import React from 'react';
import img1 from '../Images/1689175810-294.webp';
import img2 from '../Images/minimalist-scene-cosmetic-bottle-serene-water-surface-with-beautiful-natural-layout-mockup_655090-299029.webp';
import img3 from '../Images/Hair-Types.webp';
import img4 from '../Images/cold-weather-winter-temperatures.webp';
import img5 from '../Images/eye-makeup-678x446.webp';
import img6 from '../Images/Contact-Lenses-1.webp';
import img7 from '../Images/first-aid-1.webp';
import img8 from '../Images/skincare-hero.webp';
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
      <div className='section'>
        <img src={img4} alt="" />
        <div className='section-name'>
          <h2>
              البرد و الانفلوانزا
          </h2>
        </div>
      </div>
      <div className='section'>
        <img src={img5} alt="" />
        <div className='section-name'>
          <h2>
              المكياج
          </h2>
        </div>
      </div>
      <div className='section'>
        <img src={img6} alt="" />
        <div className='section-name'>
          <h2>
              قسم العدسات
          </h2>
        </div>
      </div>
      <div className='section'>
        <img src={img7} alt="" />
        <div className='section-name'>
          <h2>
              الاسعافات الاولية
          </h2>
        </div>
      </div>
    </section>
  )
}
