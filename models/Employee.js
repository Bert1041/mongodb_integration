const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  employeeNo: {
    type: Number
  }

});

const Employee = mongoose.model('Employee', employeeSchema);

module.exports = Employee;
