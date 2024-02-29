const Vehiculo = require('../database/models/VehiculoModel')


const createVehiculo = async (newVehiculo) =>{
    const Vehiculos = await Vehiculo.create(newVehiculo)

    return Vehiculos
}

const getAllVehiculos = async () =>{
    const Vehiculos = await Vehiculo.findAll()
    return Vehiculos
}

const getOneVehiculo = async (nombre) =>{
    const Vehiculos = await Vehiculo.findOne(nombre)
    return Vehiculos
}

const updateVehiculo = async (newVehiculo, id) =>{
    const Vehiculos = Vehiculo.update(newVehiculo, id)
    return Vehiculos
}

const deleteVehiculo = async (id) =>{
    const Vehiculos = Vehiculo.destroy(id)
    return Vehiculos
}


module.exports = {
    createVehiculo,
    getAllVehiculos,
    getOneVehiculo,
    updateVehiculo,
    deleteVehiculo
}