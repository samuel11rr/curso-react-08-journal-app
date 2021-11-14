import React from 'react'

export const JournalEntry = () => {
  return (
    <div className="journal__entry">
      <div 
        className="journal__entry-picture"
        style={{
          backgroundSize: 'cover',
          backgroundImage: 'url(https://i.inews.co.uk/content/uploads/2019/10/shutterstock_1479789158.jpg)'
        }}
      ></div>

      <div className="journal__entry-body">
        <p className="journal__entry-title"> Title </p>
        <p className="journal__entry-content">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
      </div>

      <div className="journal__entry-date-box">
        <span>Monday</span>
        <h4>14</h4>
      </div>
    </div>
  )
}
