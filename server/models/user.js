const { Schema, model } = require("mongoose");
const bcrypt = require("bcrypt");

const reviewSchema = new Schema({    
name:{
    type: String,
    required: true,
},
visitDate:{
    type: String,
    required: true,
},
review:{
    type: String,
},
rating:{
    type: Number,
    required: true,
}
});

const userSchema = new Schema({
    email:{
        type: String,
        required: true,
    },
    password:{
        type: String,
        required: true,
    },
    name:{
        type: String,
        required: true,
    },
    reviews: [reviewSchema]
});