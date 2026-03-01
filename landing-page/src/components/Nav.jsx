import React from 'react'

const nav = () => {
  return (
    <div className="nav">
      <div className="nav-left">
       <h2>Horizon Court</h2>
      </div>
      <div className="nav-mid">
        <span>About us</span>
        <span>Services</span>
        <span>Coaches</span>
        <span>Events</span>
        <span>Contacts</span>
      </div> 
      <div className="nav-right">
        <div className="icon">
            <button>Book now</button>
            <i class="ri-arrow-right-up-line"></i>
        </div>
        </div>      
    </div>
  )
}

export default nav
