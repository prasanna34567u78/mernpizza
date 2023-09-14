const express = require('express');
const app= express();
const db = require('./db.js')
const pizza = require('./models/pizzaModel')
const pizzasRoute = require('./routes/pizzasRouter')
const userRoute = require('./routes/userRouter')
const orderRoute = require('./routes/orderRouter')
app.use(express.json())

app.use('/api/pizzas/',pizzasRoute)
app.use('/api/users/',userRoute)
app.use('/api/orders/',orderRoute)

app.get('/',(req, res)=>{
    res.send("Server Working");
});

app.get('/getpizza',(req,res)=>{
   pizza.find({}).then(function(user){
    res.json(user)
   }).catch(function(err){
    console.log(err);
   })
    
})

const port = 8000;
app.listen(port,()=>`server is runing on port ${port}`);