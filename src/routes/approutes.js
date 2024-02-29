const router = require('express').Router()

const clienteRoute = require('./v1/ClienteRoutes')
const vehiculoRoute = require('./v1/VehiculoRoutes')
const fabricanteroutes = require('./v1/FabricanteRoutes')
const compraroutes = require('./v1/CompraRoutes')

router.use("/v1/concesionario/clientes", clienteRoute)
router.use("/v1/concesionario/vehiculos", vehiculoRoute)
router.use("/v1/concesionario/fabricantes", fabricanteroutes)
router.use("/v1/concesionario/compras", compraroutes)



module.exports = router



