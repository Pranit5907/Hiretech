import React from 'react'

// import { BrowserRouter,Route,Routes } from 'react-router-dom';
import Navbar  from './components/navbar.js';
import Main from './components/main.js'
import Footer from './components/footer.js'

const App =()=>{
  return(
  <>
  
   <Navbar/>
    <Main/>
    <Footer/>

  </>
  )
}
export default App;
