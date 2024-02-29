const Fabricante = require('../database/models/FabricanteModel')
const Vehiculo = require('../database/models/VehiculoModel')

const createFabricante = async (newFab) =>{
    const Fabricantes = await Fabricante.create(newFab)

    return Fabricantes
}

const getOneFabricante = async (id) =>{
    const Fabricantes = await Fabricante.findByPk(id, {
        include:[{
            model: Vehiculo,
            attributes:['nombre_veh', 'precio_veh', 'unidades_veh']
        }],
        attributes: ['nombre_fab']
    })

    return Fabricantes
}

module.exports = {
    createFabricante,
    getOneFabricante
}