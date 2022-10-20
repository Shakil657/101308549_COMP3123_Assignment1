const mongoose = require("mongoose")
//define schema
const employeeSchema = new mongoose.Schema({
    first_name: {
        type: String,
        required: true,
        maxLength: 100
    },
    last_name: {
        type: String,
        required: true,
        maxLength: 50
    }
    ,
    email:{
        type: String,
        maxLength: 50,
        unique: true
    },
    gender:{
        type: String,
        required:false,
        enum:["Male","Female","Other"]
        
    },
    salary:{
        type: Number,
        required:true,
        min: 0
    }


})
//creating model from schema
module.exports = mongoose.model("employee",employeeSchema)