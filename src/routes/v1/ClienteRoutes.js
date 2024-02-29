const clientesrouter = require("express").Router();

const clienteController = require('../../controllers/ClienteController')

clientesrouter.get('/', clienteController.getAllClientes)

clientesrouter.post('/', clienteController.createCliente)


module.exports = clientesrouter;
