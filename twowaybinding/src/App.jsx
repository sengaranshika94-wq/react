import { useState } from "react"
import React from 'react'

const App = () => {
  let submitHandler=(e)=>{
    e.preventDefault();
  }
 const [name, setname] = useState('')
  return (
    <div>
      <form onSubmit={(e)=>{
        submitHandler(e)
        setname('')
      }}>
        <input type="text" required placeholder='enter your name' value={name} onChange={(e)=>{
          setname(e.target.value)
        }} />
        <button>submit</button>
      </form>
    </div>
  )
}

export default App

