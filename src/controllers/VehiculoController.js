const vehiculoservice = require('../services/VehiculoService')


const createVehiculo = async (req, res) =>{
    const Vehiculos = await vehiculoservice.createVehiculo(req.body)
    res.json(Vehiculos)
}

const getAllVehiculos = async (req, res) =>{
    const Vehiculos = await vehiculoservice.getAllVehiculos()
    res.json(Vehiculos)
}

const getOneVehiculo = async (req, res) =>{
    const nombre_veh = req.params.nombre
    const Vehiculos = await vehiculoservice.getOneVehiculo( nombre_veh )
    res.json(Vehiculos)
}

const updateVehiculo = async (req, res) =>{
    const id_veh = req.params.id
    const Vehiculos = await vehiculoservice.updateVehiculo( req.body, id_veh )

    res.json(Vehiculos)
}

const deleteVehiculo = async (req, res) =>{
    const id_veh = req.params.id
    const Vehiculos = await vehiculoservice.deleteVehiculo( id_veh )
    res.json(Vehiculos)
}


module.exports = {
    createVehiculo,
    getAllVehiculos,
    getOneVehiculo,
    updateVehiculo,
    deleteVehiculo
}