const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
    restaurantName:{
        type: String,
    }
})