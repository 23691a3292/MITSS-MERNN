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
import Home from './Pages/Home'
import About from './Pages/About'
import Service1 from './Pages/Service1'
import Contact from './Pages/Contact'
import Counter from './component/Counter'
const App = () =>{
  return (
    <>  
    <Navbar/>
     <Routes>
       <Route path='/home' element={<home/>}/>
      </Routes>
   </>
  )   
}
export default App
