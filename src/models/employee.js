module.exports = (sequelize, DataTypes) => {
    const Employee = sequelize.define('employee', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        firstname:{
            type: DataTypes.STRING,
            allowNull: false
        },
        lastname: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        department: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        salary: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        address: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        gender: {
            type: DataTypes.TEXT,
            allowNull: false
        },
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false
        },
        updatedAt: DataTypes.DATE,
    });
    return Employee;
};