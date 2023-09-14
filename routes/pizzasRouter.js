const express = require('express');
const router = express.Router();

const Pizzas = require('../models/pizzaModel');
const { models } = require('mongoose');
router.get("/getallpizzas",async(req,res)=>{

    try {
        const pizzas = await Pizzas.find({})
      res.send(pizzas);
    } catch (error) {
      return res.status(400).json({message: error});
    }
    

});

module.exports = router;