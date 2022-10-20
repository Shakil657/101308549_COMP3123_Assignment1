const express = require("express");
const mongoose = require("mongoose");

const userModel = require("../models/User");

const routes = express.Router();

routes.post("/signup", async (req, res) => {
    
    try {
        const newUser = new userModel(req.body);
        const user = await newUser.save();  

        res.status(201).send(user);
    } catch (error) {
        res.status(400).send(error);
    }
    
})


routes.post("/login", async (req, res) => {
    
    try {
        const user = await userModel.findOne(req.body)
        if(user.username == req.body.username && user.password == req.body.password){
            return res.status(200).send({
                "status": true,
                "username": user.username,
                "message": "user logged in successfully"

            })
        }
        
    } catch (error) {
        res.status(400).send(error);
    }   
    
})

module.exports = routes;