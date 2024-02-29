const vehiculoroutes = require('express').Router()

const vehiculocontroller = require('../../controllers/VehiculoController')

vehiculoroutes.post('/', vehiculocontroller.createVehiculo)
vehiculoroutes.get('/', vehiculocontroller.getAllVehiculos)
vehiculoroutes.get('/:nombre', vehiculocontroller.getOneVehiculo)
vehiculoroutes.put('/:id', vehiculocontroller.updateVehiculo)
vehiculoroutes.delete('/:id', vehiculocontroller.deleteVehiculo)

module.exports = vehiculoroutes