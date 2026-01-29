// import {Route, Routes} from 'react-router-dom'
// import Navbar from './component/Navbar'
// import Home from './pages/Home'
// import Contact from './pages/Contact'
// import About from './pages/About'
// import Counter from './component/Counter'
// import Service1 from './Pages/Service1'
// import UseState from './Hooks/UseState'
// import Login from "./Auth/Login";
// import Hook from './Hooks/Hook'     
// import UseEffect from './Hooks/UseEffect'
// const App = () =>{
  
//    return(    
//     <>
//      <Navbar/>
//      <Routes>
//        <Route path='/' element={<Home name="Nandini"/>}/>
//        <Route path='/about' element={<About name="Nandini" age={20} dept="CS&DS"/>}/>
//        <Route path='/contact' element={<Contact/>}/>
//        <Route path='/services' element={<Service1/>}/>
//        <Route path='/counter' element={<Counter/>}/>
//        <Route path='/useState' element={<UseState/>}/>
//        <Route path='/login' element={<Login/>}/>
//        <Route path='/hook' element={<Hook/>}/>
//        <Route path='/useEffect' element={<UseEffect/>}/>
//       </Routes>
//     </>
//    )
// }
// export default App

// import { Route, Routes } from 'react-router-dom'
// import Navbar from './component/Navbar'
// import Home from './pages/Home'
// import Contact from './Pages/Contact'
// import About from './pages/About'
// import Counter from './component/Counter'
// import Service1 from './Pages/Service1'
// import UseState from './Hooks/UseState'
// import Login from "./component/Component.js/Login"
// //import { BrowserRouter } from "react-router-dom";
// import Hook from './Hooks/Hook'
// import UseEffect from './Hooks/UseEffect';
// import UseEffectApi from './Hooks/UseEffectApi'
// import Signup from './Auth/Signup'
// import UseRef from './Hooks/UseRef'

// const App = () => {
//   return (
//     <>
//       <Navbar />
//       <Routes>
//         <Route path='/' element={<Home name="Nandini" />} />
//         <Route path='/about' element={<About name="Nandini" age={20} dept="CS&DS" />} />
//         <Route path='/contact' element={<Contact />} />
//         <Route path='/service1' element={<Service1 />} />
//         <Route path='/counter' element={<Counter />} />
//         <Route path='/useState' element={<UseState />} />
//         <Route path='/login' element={<Login />} />
//         <Route path='/signup' element={<Signup />} />
//         <Route path='/hook' element={<Hook />} >  
//           <Route path='/useState' element={<UseState />} />
//           <Route path='/useEffect' element={<UseEffect />} />
//           <Route path='/useEffectApi' element={<UseEffectApi />} />
//           <Route path='/useRef' element={<UseRef />} />
//         </Route>
//     </>
//   )
// }

// export default App
import { Route, Routes } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './Pages/Home'
import Contact from './Pages/Contact'
import About from './Pages/About'
import Counter from './component/Counter'
import Service1 from './Pages/Service1'
import UseState from './Hooks/UseState'
import Login from "./Auth/Login";
import Signup from "./Auth/Signup";
//import { BrowserRouter } from "react-router-dom";
import Hook from './Hooks/Hook'
import UseEffect from './Hooks/UseEffect';
import UseEffectApi from './Hooks/UseEffectApi';
import UseRef from './Hooks/UseRef';
import UseReducer from './Hooks/UseReducer'
import UseMemo from './Hooks/UseMemo';
import UseCallback from './Hooks/UseCallback'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home name="Nandini" />} />
        <Route path='/about' element={<About name="Nandini" age={20} dept="CS&DS" />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/service1' element={<Service1 />} />
        <Route path='/counter' element={<Counter />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />

  
        <Route path='/hook' element={<Hook />} />
        <Route path='/useState' element={<UseState />} />
        <Route path='/useEffect' element={<UseEffect />} />
        <Route path='/useEffectApi' element={<UseEffectApi />} />
        <Route path='/useRef' element={<UseRef />} />
        <Route path='useReducer' element={<UseReducer/>}/>
        <Route path='useMemo' element={<UseMemo/>}/>
        <Route path='useCallback' element={<UseCallback/>}/>
      </Routes>
    </>
  )
}

export default App