const EmployeeModel = require('./employee.model');
const fs = require('fs');

exports.insert = (req, res) => {
    EmployeeModel.createEmployee(req.body).then((result) => {
        res.status(201).send(result);
    }, err => {
        res.status(406).send(err);
    });
};
exports.findEmployeeById = (req, res) => {
    EmployeeModel.findEmployeeById(req.params.employeeId)
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(err.status).send(err.message);
        });
};

exports.findAllEmployee = (req, res) => {
    EmployeeModel.findAllEmployee()
        .then((result) => {
            res.status(200).send(result);
        }, err => {
            res.status(406).send(err);
        });
}; 