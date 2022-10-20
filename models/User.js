const mongoose = require("mongoose")
//define schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        maxLength: 100
    },
    
    email:{
        type: String,
        maxLength: 50,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required:true,
        maxLength: 50
        
    }
    


})
//creating model from schema
module.exports = mongoose.model("user",userSchema)