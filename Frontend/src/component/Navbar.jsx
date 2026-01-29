// import React from 'react'
// import './Navbar.css'
// import { Link } from 'react-router-dom'
// const Navbar = () => {
//   return (
//     <div>
//         <nav >
//             <ul className="Navbar">
//                 <li><Link to="/">Home</Link></li>
//                 <li><Link to="/about">About</Link></li>
//                 <li><Link to="/contact">Contact</Link></li>
//                 <li><Link to="/service">Service1</Link></li>
//             </ul>
//         </nav>
//     </div>
//   )
// }

// export default Navbar
import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className="navbar">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/service1">Services</Link></li>
                <li><Link to="/contact">Contact</Link></li>    
                <li><Link to="/useState">UseState</Link></li>
                <li><Link to="/hook">Hook</Link></li>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link className='link' to="/hook">Hook</Link></li>
                <li><Link className='link' to="/UseReducer">UseReducer</Link></li>
                <li><Link className='link' to="/UseMemo">UseMemo</Link></li>
            </ul>
        </nav>
    </div>
  )
}

export default Navbar