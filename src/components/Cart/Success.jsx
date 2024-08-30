import React from 'react'
import "./Success.scss"
import { Link } from 'react-router-dom'

function Success() {
  return (
    <div className='container'>
         <div className="box">
                    <div className="box-1">
                        Thanks for shopping with us!
                    </div>
                    <div className="box-2">
                        Your order has been placed successfully.
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

export default Success