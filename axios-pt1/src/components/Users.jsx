import React from 'react'

const Users = (props) => {
    const clr1=Math.floor(Math.random()*256)
    const clr2=Math.floor(Math.random()*256)
    const clr3=Math.floor(Math.random()*256)
  return (
    <div style={{backgroundColor:`rgb(${clr1},${clr2},${clr3})`}} className='usercard'>
      <h2>{props.ele.name}</h2>
      <h3>{props.ele.email}</h3>
      <p>{props.ele.website}</p>
    </div>
  )
}

export default Users
