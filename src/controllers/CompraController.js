const compraservice = require('../services/CompraService')

const createCompra = async (req, res) =>{
    const Compras = await compraservice.createCompra(req.body)

    res.json(Compras)
}

const getAllCompras = async (req, res) =>{
    const Compras = await compraservice.getAllCompras()
    res.json(Compras)
}


module.exports = {
    createCompra,
    getAllCompras
}