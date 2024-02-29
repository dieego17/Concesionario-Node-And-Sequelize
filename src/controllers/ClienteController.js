const clienteService = require('../services/ClienteService')

const getAllClientes = async (req, res) =>{
    const Clientes = await clienteService.getAllClientes()
    res.json(Clientes)
}

const createCliente = async (req, res) =>{
    const Clientes = await clienteService.createCliente(req.body)
    res.json(Clientes)
}

module.exports = {
    getAllClientes,
    createCliente
}