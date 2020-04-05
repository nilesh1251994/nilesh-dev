const Sequelize = require('sequelize');
const multer = require('multer'); 

const sequelize = require('../../configs/connection');
const Employee = require('../../models/employee')(sequelize, Sequelize);

Employee.sync(); 
exports.createEmployee = (employeeData) => {
    return new Promise((resolve, reject) => {
        Employee.create(employeeData).then(employee => {
            resolve(employee);
        },err=>{
            reject({error:err});
        });
    });
};
exports.findEmployeeById = (id) => {
    return new Promise((resolve, reject) => {
        Employee.findByPk(id).then(employee => {
            if(employee == null){
                reject({status:404,message:"employee not found"});
            }
            resolve(employee);
        },err=>{
            reject({error:err});
        })
    });
};

exports.findAllEmployee = () => {
    return new Promise((resolve, reject) => {
        Employee.findAll({
            attributes: ['id','firstname','lastname','department','salary','address','gender']
        }).then(employee => {
            resolve(employee);
        },err=>{
            reject({error:err});
        })
    });
}; 