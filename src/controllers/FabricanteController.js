const fabricanteservice = require('../services/FabricanteService')


const createFabricante = async (req, res) =>{
    const Fabricante = await fabricanteservice.createFabricante(req.body)
    res.json(Fabricante)
}

const getOneFabricante = async (req, res) =>{
    const id_fab = req.params.id
    const Fabricantes = await fabricanteservice.getOneFabricante(id_fab)

    res.json(Fabricantes)
}

module.exports = {
    createFabricante,
    getOneFabricante
}