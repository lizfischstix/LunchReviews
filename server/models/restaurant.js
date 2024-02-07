const { Schema, model } = require("mongoose");

const restaurantSchema = new Schema({
    restaurantName:{
        type: String,
        required: true,
    },
    address:{
        type: String,
        required: true,
    },
    zip: {
        type: String,
        required: true,
    },
    location: {
        type: {
            type: String,
            enum: ['Point'], 
            default: 'Point'
        },
        coordinates: {
            type: [Number], // Longitude, Latitude
            required: true
        }
    }
})