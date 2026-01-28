import React, { useState } from 'react'

const Contact = () => {
  const[name,setName]=useState("Nandini");
  const toggleName=()=>{
    // setName(name==="Nandini"?"Nandu":"Nandini")
  }
  return (
    <div>
      <h1>Name:{name}</h1>
      <button onClick={toggleName}>Toggle</button>
      <Service name={name}/>
    </div>
  )
}

export default Contact