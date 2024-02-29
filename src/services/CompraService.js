const Cliente = require('../database/models/ClienteModel')
const Compra = require('../database/models/CompraModel')
const Fabricante = require('../database/models/FabricanteModel')
const Vehiculo = require('../database/models/VehiculoModel')

const createCompra = async (newCompra) =>{
    const Compras = await Compra.create(newCompra)

    return Compras
}

const getAllCompras = async () =>{
    const Compras = await Compra.findAll({
        include:[{
            model: Cliente,
            attributes: ['nombre_cli']
        },
        {
            model: Vehiculo,
            attributes: ['nombre_veh'],
            include:[{
                model: Fabricante,
                attributes:['nombre_fab']
            }]
        },
    
    ],
    attributes:['precio_compra', 'fecha_compra']
    })

    return Compras
}

module.exports = {
    createCompra,
    getAllCompras
}