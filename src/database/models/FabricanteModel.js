const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')


class Fabricante extends Model {}
Fabricante.init(
    {
        id_fab:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_fab:{
            type: DataTypes.STRING,
            allowNull: false
        },
        direccion_fab:{
            type: DataTypes.STRING,
            allowNull: false
        },
        telefono_fab:{
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'fabricantes',
        timestamps: false
    }
)

module.exports = Fabricante