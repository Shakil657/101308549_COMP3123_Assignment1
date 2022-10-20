const express = require("express");
const mongoose = require("mongoose");
const Employee = require("../models/Employee");

const EmployeeModel = require("../models/Employee");

const routes = express.Router();
module.exports = routes;

//find by ID
routes.get("/employees/:eid", async (req, res) => {
    
    try {
        const employee = await EmployeeModel.findById(req.params.eid, req.body);
          
        res.status(200).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
})
//get all employees
routes.get("/employees", async (req, res) => {
    
    try {
        const employee = await EmployeeModel.find()
        res.status(200).send(employee)
    } catch (error) {
        res.status(400).send(error)
    }
})

//add new employee
routes.post("/employees", async  (req, res) => {
    
    try {
        const newEmployee = new EmployeeModel(req.body)
        const employee = await newEmployee.save();
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }   
    
})

//update by ID
routes.put("/employees/:eid", async (req, res) => {
    
    try {
        const employee = await EmployeeModel.findByIdAndUpdate(req.params.eid, req.body);
        res.status(201).send(employee);
    } catch (error) {
        res.status(400).send(error);
    }
})


//delete by ID
routes.delete("/employees/", async (req, res) => {
    
    try {
        const deletedEmployee = await EmployeeModel.findByIdAndDelete(req.query.eid);
        if(!deletedEmployee) {
            res.status(400).send({message: "No employee to delete"});
        }
        res.status(204).send(deletedEmployee);
    } catch (error) {
        res.status(400).send(error);
    }
})
