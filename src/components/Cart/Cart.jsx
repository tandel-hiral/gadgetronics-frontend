import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CartItem from "./CartItem/CartItem";
import { SpinnerCircular } from 'spinners-react';
import  {useState } from "react";

import "./Cart.scss";
import { useContext, useEffect } from "react";
import { Context } from "../../utils/context";
import { userData } from "../../utils/userData";
import { useNavigate } from "react-router-dom";
import {loadStripe} from "@stripe/stripe-js"
import { makePaymentRequest } from "../../utils/api";

const Cart = ({ setShowCart }) => {

  const navigate = useNavigate()
  const {cartItems,cartSubTotal} = useContext(Context);
  const [loading, setLoading] = useState(false);

  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

  const handlePayment =async()=>{
   
      
      const {jwt} = userData();
    
      if(!jwt){
        setShowCart(false);
        navigate('/login');
      }
      else{
    try {
      setLoading(true);
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders" , {
        products : cartItems
      }) ;
  
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      });
  
    } catch (error) {
      console.log(error)
    } 
  } 
    };

  // function HandleCheckout(){
  //   setShowCart(false);
  //   const {jwt} = userData();
    
  //     if(!jwt){
  //       navigate('/login');
  //     }     
  // }

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">close</span>
          </span>
        </div>

        {!cartItems.length && <div className="empty-cart">
            <BsCartX/>
            <span>No products in the cart.</span>
            <button className="return-cta" onClick={()=>{
              navigate("/") ; 
              setShowCart(false)
              }}>RETURN TO SHOP</button>
        </div>
}
       {!!cartItems.length && <>
            <CartItem/>
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal:</span>
                <span className="text total">&#8377;{cartSubTotal}</span>
                </div> 
                <div className="button">
                  {/* <button className="checkout-cta" onClick={HandleCheckout}>Checkout</button> */}
                  <button className="checkout-cta" onClick={handlePayment}>Checkout
                  {loading && <SpinnerCircular size={30} thickness={71} speed={65} color="rgba(255, 255, 255, 1)" secondaryColor="rgba(142, 45, 226, 1)" />}
                  </button>
                  </div> 
            </div>
        </>}

      </div>
    </div>
  );
};

export default Cart;
