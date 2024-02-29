const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('concesionario2', 'root', '',{
    host:'localhost',
    dialect:'mysql'
})

module.exports = sequelize