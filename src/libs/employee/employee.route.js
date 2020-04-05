const EmployeeController = require('./employee.controller'); 
const EmployeeModel = require('./employee.model'); 


exports.employeeRoutes = function (app) {
    app.post('/employee', [ 
        EmployeeController.insert
    ]);
    app.get('/employee/:employeesId', [ 
        EmployeeController.findEmployeeById
    ]);
   
    app.get('/employee', [ 
        EmployeeController.findAllEmployee
    ]);
};