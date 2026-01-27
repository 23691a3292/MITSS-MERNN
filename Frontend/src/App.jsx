import {Route, Routes} from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './pages/Home'
import Contact from './pages/Contact'
import About from './pages/About'
import Counter from './component/Counter'
import Service1 from './Pages/Service1'
import UseState from './Hooks/UseState'
import Login from "./Auth/Login";
const App = () =>{
  
   return(    
   <>
   <Navbar/>
    <Routes>
      <Route path='/' element={<Home name="Navya"/>}/>
      <Route path='/about' element={<About name="Navyaa" age={20} dept="CS&DS"/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/services' element={<Service1/>}/>
      <Route path='/counter' element={<Counter/>}/>
      <Route path='/useState' element={<UseState/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/hook' element={<Hooks/>}/>
    </Routes>
    </>
   )
}
export default App