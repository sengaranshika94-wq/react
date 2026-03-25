import React, { useState } from "react";

const App = () => {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [image, setimage] = useState("");
  const localdata=JSON.parse(localStorage.getItem('all-users')) || []
  // localStorage.setItem("all-users",JSON.stringify({
  //   user:"anu",
  //   class:11
  // }))
  // console.log(localdata);
  // localStorage.clear()
  const [allusers, setallusers] = useState(localdata);
  
  
  let formHandler = (e) => {
    e.preventDefault();

    const oldusers = [...allusers];
    oldusers.push({name,email,image});
    setallusers(oldusers);
    localStorage.setItem("all-users",JSON.stringify(oldusers));
    setname("");
    setemail("");
    setimage("");
  };

  return (
    <div className="list">
      <form onSubmit={formHandler}>
        <h2>Enter Contact info.</h2>

        <input
          type="text"
          placeholder="Enter your Name"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />

        <input
          type="text"
          placeholder="Enter your Email"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />

        <input
          type="url"
          placeholder="Enter your image URL"
          value={image}
          onChange={(e) => setimage(e.target.value)}
        />

        <button>Submit</button>
      </form>

      <section>
        {allusers.map((ele, index) => (
          <div className="info" key={index}>
            <img src={ele.image} alt="profile" width="100" />
          
            <div className="pt-2">
              <h2>{ele.name}</h2>
              <h3>{ele.email}</h3>
            </div>
      
          </div>
        ))}
      </section>
    </div>
  );
};

export default App;
