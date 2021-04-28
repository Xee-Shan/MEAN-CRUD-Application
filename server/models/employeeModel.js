const mongoose = require("mongoose");

const employeeSchema = new mongoose.Schema({
    name : {type : String, required : true},
    email : {type : String, required : true},
    salary : {type : Number, required : true}
});

const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;