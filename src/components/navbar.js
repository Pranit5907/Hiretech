import React from 'react'
import { Outlet, Link } from "react-router-dom";
import './nav.css';



const navbar = () => {
  return (
    <>
        <nav className='main-nav'>
        <div className='logo'>
        <h2>
            <span>H</span>ire
            <span>T</span>ech
        </h2>
        </div>
        <div className='menu-link'>
        <ul>
            <li>
                <Link to ='/discover'>Discover</Link>
            </li>
            <li>
                <Link to ='/seekers'>For job seekers</Link>
            </li>
            <li>
                <Link to ='/companiesw'>For companies</Link>
            </li>
            <li>
                <Link to ='/about'>About</Link>
            </li>
        </ul>

        </div>
        <div className='search-bar'>
           <div className='but1'>   <a href='/login'><button >Login</button></a></div>
           <div className='but2'> <a href='/signup'> <button>SignUp</button></a></div>
            
        </div>
        </nav>
        <Outlet/>
    </>

  
  )
}
export default navbar;

