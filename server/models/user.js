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
    email: {
        type: String,
        required: true,
        unique: true,
        match: [/^[a-zA-Z0-9._%+-]+@inriver\.com$/, 'Must use company email address'],
      },
    password:{
        type: String,
        required: true,
    },
    userName:{
        type: String,
        required: true,
    },
    reviews: [reviewSchema]
});

  const User = model("user", userSchema);

module.exports = User;