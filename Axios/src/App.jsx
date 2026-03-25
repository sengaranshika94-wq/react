import React, { useState } from 'react'
import axios from 'axios';
const App = () => {
    const [alldata, setalldata] = useState([])

  async function getdata(){
    console.log('af');
    const response= await axios.get('https://jsonplaceholder.typicode.com/users');
    setalldata(response.data)
    
  }
  return (
    <div>
      <button onClick={getdata}>Get Data</button>
      {alldata.map(function(ele,idx){
        console.log(ele);
        
        return <h1 key={idx}>Hello {ele.name}</h1>
      })}
    </div>
  )
}

export default App
