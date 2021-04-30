const router = require('express').Router();
const Employee = require('../models/employeeModel');

router.get("/employees", async (req, res) => {
    try{
        const employees = await Employee.find();
        res.send(employees);
    }catch(err){
        console.error(err);
        res.status(500).send();
    }
});

router.get("/employee/:id", async (req, res) => {
    try{
        const employee = await Employee.findOne({_id: req.params.id});
        res.send(employee);
    }catch(err){
        console.error(err);
        res.status(500).send();
    }
});

router.delete('/employee/:id', (req, res) => {

    Employee.findByIdAndDelete(req.params.id, (err, data) => {
        if(!err) {
            res.status(200).json({code: 200, message: 'Employee deleted', deleteEmployee: data})
        } else {
            console.log(err);
        }
    });
});

router.put("/employee/update/:id", async (req, res) => {
    try{
        const employee = {
            name: req.body.name,
            email: req.body.email,
            salary: req.body.salary,
        }
        await Employee.findByIdAndUpdate(req.params.id, {$set:employee});
    }catch(err){
        console.error(err);
        res.status(500).send();
    }
});

router.post("/employee/add", async (req, res) => {
    try{
        const employee = new Employee({
            name: req.body.name,
            email: req.body.email,
            salary: req.body.salary
        });
       await employee.save();
    }catch(err){
        res.status(500).send();
    }
});

module.exports = router;