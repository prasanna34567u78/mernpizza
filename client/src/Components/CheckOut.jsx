import React from 'react'
import { useDispatch,useSelector } from 'react-redux';
import StripeCheckout from 'react-stripe-checkout'
import { placeOrder } from '../Actions/orderAction';
// import StripCheckout from 'react-stripe-checkout'

export default function CheckOut({subtotal}) {
   const dispatch =useDispatch()
  function tokenHandler(token){
    console.log(token);
    dispatch(placeOrder(token,subtotal))
  }

  return (
    <div>
        <StripeCheckout
        amount={subtotal*100}
        shippingAddress
        stripeKey='pk_test_51NqBMkSCEnaIhggJl6qVGNRip73DGYcfUc6Ap0gmC0cLIWVdLvm4jpm9sudMTFZKJJHjWrM2wXKGC4QiLw7obaE000Wh2dMyAC'
        token={tokenHandler}
        currency='INR'
        >
        <button className='btn'>PAY NOW</button> 
        </StripeCheckout>
    </div>
  )
}
