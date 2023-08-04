import React from 'react'
import './login.css'

const login = () => {
  return (
 <>
   <div className='main-nav'>
   <div className='logo'>
        <h2>
            <span>H</span>ire
            <span>T</span>ech
        </h2>
    </div>
   </div>
   <div className='heading'>
    <h2>Sign in to HireTech</h2>
   </div>
   <div className='lower'>
   <small id="sign" class=''>Don't have an account? <span style ={{color:'#0000FF'}}><a href='/signup'>Sign up</a></span> </small>
   </div>


    <div className='mainl'>
    <div className='form' >
    <form>
    <div class="form-g">
       <a  className ='btnn'href='#'><b><i class="fa-brands fa-google" style={{color: "#880808"}}></i></b> sign in with google</a>
      
      </div>
      <div className='form-group'>

      </div>
      <div class="form-group">
      
       <small id="emailHelp" class="">OR</small>
      </div>



      <div class="form-group">
        <label for="exampleInputEmail1">Username/Email</label>
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username/email"/>
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-group form-check">
             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
             <label class="form-check-label" for="exampleCheck1">Check me out</label>
         </div>
         <button type="submit" class="btn btn-primary">Sign in</button>
    </form>
    </div>
  
    </div>
    
 </>
  )
}

export default login;