const compraRoutes = require('express').Router()

const comprascontroller = require('../../controllers/CompraController')

compraRoutes.post('/', comprascontroller.createCompra)
compraRoutes.get('/', comprascontroller.getAllCompras)



module.exports = compraRoutes