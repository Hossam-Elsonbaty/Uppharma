import React from 'react';

export default function ImgTitleCard({status}) {
  return (
          <div className="card">
            <div className="health-state-img-container">
              <img src={status.image} alt="" />
            </div>
            <h5> {status.name}</h5>
          </div>
  )
}