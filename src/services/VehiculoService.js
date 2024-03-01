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
    const Vehiculos = await Vehiculo.findOne({ where:{ nombre_veh: nombre }})
    return Vehiculos
}

const updateVehiculo = async (newVehiculo, id) =>{
    const Vehiculos = Vehiculo.update(newVehiculo, { where: { id_veh: id } })
    return Vehiculos
}

const deleteVehiculo = async (id) =>{
    const Vehiculos = Vehiculo.destroy({ where: { id_veh: id } })
    return Vehiculos
}


module.exports = {
    createVehiculo,
    getAllVehiculos,
    getOneVehiculo,
    updateVehiculo,
    deleteVehiculo
}