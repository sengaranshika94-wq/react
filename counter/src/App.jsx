import React, { useState } from 'react'


const App = () => {
  const [counter, setcounter] = useState(0)
  return (
    <div className='count'>
      <h1>{counter}</h1>
      <button onClick={
        ()=>{
          setcounter(counter+1)
        }}>
          increase
      </button>
      <button onClick={
        ()=>{
          setcounter(counter-1)
        }}>
          decrease
      </button>
      <button onClick={
        ()=>{
          setcounter(counter+5)
        }}>
          jump by 5
      </button>
    </div>
  )
}

export default App
