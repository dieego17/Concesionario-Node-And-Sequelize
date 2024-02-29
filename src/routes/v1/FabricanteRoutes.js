const fabricanteroutes = require('express').Router()

const fabricantecontroller = require('../../controllers/FabricanteController')

fabricanteroutes.post('/', fabricantecontroller.createFabricante)
fabricanteroutes.get('/:id', fabricantecontroller.getOneFabricante)

module.exports = fabricanteroutes