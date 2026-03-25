import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Users from "./components/Users"
const App = () => {
  const [alldata, setalldata] = useState([])
  async function getdata(){
    const response= await axios.get("https://jsonplaceholder.typicode.com/users")
    setalldata(response.data)
    
  }
  useEffect(()=>{
    getdata()
  },[])
  return (
    <div>
      {/* <button onClick={getdata}>Get Data</button> */}
      <div className="all-users">
        {alldata.map(function(ele,idx){
          return <div key={idx}>
            <Users ele={ele}/>
            </div>
        })}
      </div>
    </div>
  )
}

export default App
