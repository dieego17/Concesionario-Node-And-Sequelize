const Cliente = require('./models/ClienteModel')
const Compra = require('./models/CompraModel')
const Fabricante = require('./models/FabricanteModel')
const Vehiculo = require('./models/VehiculoModel')
const User = require('./models/UserModel')



Fabricante.hasMany(Vehiculo)
Vehiculo.belongsTo(Fabricante)

Vehiculo.belongsToMany(Cliente, {through: Compra})
Cliente.belongsToMany(Vehiculo, {through: Compra})

//1:M
//un vehiculo puede tener muchas compras
//se crea la clave en compras
Vehiculo.hasMany(Compra)

//1:1
//pero una compra solo pertenece a un vehiculo
Compra.belongsTo(Vehiculo)


//1:M
//un cliente puede tener muchas compras
//se crea la clave en compras
Cliente.hasMany(Compra)

//1:1
//pero una compra solo pertenece a un cliente
Compra.belongsTo(Cliente)
