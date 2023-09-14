const mongoose = require('mongoose');
var url = `mongodb+srv://Prasanna1:PrasannaKumar@cluster0.2ovp5ol.mongodb.net/mern-pizza`;
// mongodb://localhost:27017/pizza-delivery
mongoose.connect(url,{useUnifiedTopology:true,useNewUrlParser:true});
var db = mongoose.connection

db.on('connected',()=>{
    console.log(`db is connted successfully`);
})
db.on('error',()=>{
    console.log(`connection fail`);
    // console.log(`connection fail`);
})

module.exports = mongoose;