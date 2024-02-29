const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')


class User extends Model {}
User.init(
    {
        id_user:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_user:{
            type: DataTypes.STRING,
            allowNull: false
        },
        apellidos_user:{
            type: DataTypes.STRING,
            allowNull: false
        },
        email_user:{
            type: DataTypes.STRING,
            allowNull: false
        },
        password_user:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'users',
        timestamps: false
    }
)

module.exports = User