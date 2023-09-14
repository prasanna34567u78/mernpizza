const express = require('express');
const router = express.Router();
const stripe = require("stripe")("sk_test_51NqBMkSCEnaIhggJLt1XcfHhEodfPBaEL71OqHXXhdqiQ1t2Q3FTeaJfJphC1K94K0V1DxlwHLhmBHUahIRapImP00b4rctDeb")
const { v4 : uuidv4} = require('uuid') 
const Order = require('../models/orderModel')

router.post("/placeorder",async(req, res)=>{
    const {token,subtotal,currentUser,cartItems} = req.body;
     try {
        const customer = await stripe.customers.create({
            email:token.email,
            source:token.id
        })
    
        const payment = await stripe.chargers.create({
            amount:subtotal*100,
            currency:'inr',
            customer:customer.id,
            receipt_email:token.email
        },{
            idempotencyKey:uuidv4()
        })
        if(payment){

            const neworder = new Order({
                name:currentUser.name,
                eamil:currentUser.email,
                userid:currentUser.userid,
                orderItems:cartItems,
                shippingAddress:{
                    street:token.card.address_line1,
                    city:token.card.address_city,
                    country:token.card.address_country,
                    pincode:token.card.address_zip,
                },
                orderAmount:subtotal,
                transactionId:payment.source.id
            })
            neworder.save()

            res.send('order placed successfully')
        }
        else{
            res.send('Payment failed')
        }
     } catch (error) {
        return res.status(404).json({message:'Something went wrong'+ error})
     }
})

module.exports = router;