import React from 'react'
import './main.css'

 const main = () => {
  return (
    <>
        <div className='main'>
        </div>
        <div className='heading'>
        <h1>Connecting Talent, Cultivating Success</h1>
        </div>
        <div className='des'>
        <p><span>Are you a top 5% </span>Software Engineer, Product Manager or Data Scientist?
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Let leading Indian technology <span>companies compete to hire you</span>.</p>
        </div>
        <div className='button'>
            <button>APPLY TO JOIN</button>
    
        </div>
        <div className='button-des'>  <p>100% free it takes only few minutes</p></div>
        {/* middle parttition */}
        <div className='row1'>
        <div className='col'> 
            <h3>Step 1: Complete Profile</h3>
           

        </div>
        <div className='col'>
          <h3>Step 2: Recieve Job Offer</h3>
          
        </div>
        <div className='col'>
          <h3> Step 3: Get Dream Job </h3>
        </div>
        

        </div>
        <div className='row2'>
        <div className='col2'><p>Once you are approved, we showcase you to leading Indian technology startups</p></div>
        <div className='col2'><p>Companies start sending interview requests. Talk to only the ones you like.</p></div>
        <div className='col2'><p>Compare your offers and accept the best one. Hired!</p></div>
           
          </div>

          <div className='last-section'>
            <div className='title'><h3>30,00,000+ professionals from 16,500 companies are cutting short their path to success</h3></div>
            <div className='img'><img src='images/copmany-logo.jpg'/></div>
          </div>
        
    </>

  )
}
export default main;
