const sequelize = require('../db')
const { Model, DataTypes } = require('sequelize')


class Vehiculo extends Model {}
Vehiculo.init(
    {
        id_veh:{
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        nombre_veh:{
            type: DataTypes.STRING,
            allowNull: false
        },
        unidades_veh:{
            type: DataTypes.INTEGER,
            allowNull: false
        },
        precio_veh:{
            type: DataTypes.INTEGER,
            allowNull: false
        }
    },
    {
        sequelize,
        modelName: 'vehiculos',
        timestamps: false
    }
)

module.exports = Vehiculo