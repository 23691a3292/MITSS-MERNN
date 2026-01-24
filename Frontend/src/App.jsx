// function App(){
//   return(
//     <h1>Hello</h1>
//   )
// }
// export default App
// import {component} from React;
// class App extends component{
//   render(){
//   return(
//     <h1>Hello</h1>
//   )
// } 
// }
// export default App
// import React from 'react'

// const App = () => {
//   return (
//     <div>App</div>
//   )
// }
import Navbar from './component/Navbar'
const App = () => {
  const element=<h2>Welcome to React</h2>
  return (
    <>  
   <h1>hello</h1>
   {element}
  <Navbar/>
   </>
  ) 
}

export default App
