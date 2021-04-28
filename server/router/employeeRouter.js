const router = require('express').Router();
const Employee = require('../models/employeeModel');

router.get("/employees", async (req, res) => {
    try{
        const employees = Employee.find();
        res.send(employees);
    }catch(err){
        res.status(500).send();
    }
})

module.exports = router;