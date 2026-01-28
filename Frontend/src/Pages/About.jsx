import React from 'react'

const About = ({name})=> {
  return (
    <div>
      <p>Nme:{name}</p>
      {/* <p>Age:{age}</p> */}
      {/* <p>dept:{dept}</p>   */}
      <contact name={name}/>
    </div>
  )
}

export default About