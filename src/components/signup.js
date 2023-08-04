import React from 'react'
import './signup.css'

const signup = () => {
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
    <h2>Create account to HireTech</h2>
   </div>



    <div className='signin'>
    <div className='formin' >
    <form>
      <div class="form-group">
        <label for="fname">First name</label>
       <input type="text" class="form-control" id="fname"  placeholder="Enter first name"/>
       
      </div>
      <div class="form-group">
        <label for="name">Last name</label>
       <input type="text" class="form-control" id="lname"  placeholder="Enter last name"/>
     
      </div>
      <div class="form-group">
        <label for="mobile no">Enter Mobile No</label>
       <input type="number" class="form-control" id="mobileno"  placeholder="Enter number"/>
     
      </div>
      
      
      <div class="form-group">
        <label for="exampleInputEmail1">Email Id</label>
       <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter username/email"/>
       <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
      </div>
      <div class="form-group">
          <label for="exampleInputPassword1">Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-group">
          <label for="exampleInputPassword1"> Confirm Password</label>
          <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
        </div>
        <div class="form-group form-check">
             <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
             <label class="form-check-label" for="exampleCheck1">Check me out</label>
         </div>
         <button type="submit" class="btn btn-primary">Create account</button>
    </form>
    </div>

    </div>
 
    </>


  )
}

export default signup;