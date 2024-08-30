import React from 'react'
import "./Success.scss"


function Failed() {
  return (
    <div className='container'>
    <div className="box">
               <div className="box-1">
               Payment failed!
               </div>
              
               <div className="box-3">
                   For any product related query, drop an email to
               </div>
               <div className="box-4">gadgetronics@support.com</div>

               <a href="/" >
                   Continue Shopping
               </a>
           </div>
</div>
  )
}

export default Failed