const express = require("express")
const router = express.Router()

const configDB = require('../config')

let productosApi
let carritosApi

switch (configDB.DB) {
    case 'mongo':
        productosApi = require('../daos/productos/productosDaoMongo.js')
        carritosApi = require('../daos/carritos/carritosDaoMongo.js')
        break;
    case 'firebase':
        productosApi = require('../daos/productos/productosDaoFirebase.js')
        carritosApi = require('../daos/carritos/carritosDaoFirebase.js')
        break;
    case 'fs': 
        productosApi = require('../daos/productos/productosDaoFS.js')
        carritosApi = require('../daos/carritos/carritosDaoFS.js')
}

router.post('/', async (req, res) => {
    res.send(await carritosApi.create())
});

router.delete('/:id', async (req, res) => {
    await carritosApi.deleteById(req.params.id)
    res.send(await carritosApi.getAll())
});

router.get('/:id/productos', async (req, res) => {
    cart = await carritosApi.getById(req.params.id)
    if(cart.productos){
        res.send(cart.productos)
    } else {
        res.send(cart)
    }
});

router.post('/:id/productos/:id_prod', async (req, res) => {
    const cartId = req.params.id
    const prod = await productosApi.getById(req.params.id_prod)
    if(prod){
        await carritosApi.saveProd(prod, cartId)
        res.send(await carritosApi.getById(cartId))
    } else {
        res.send({error:`producto id:${req.params.id_prod} no encontrado`})
    } 
})

router.delete('/:id/productos/:id_prod', async (req, res) => {
    const cartId = req.params.id
    const prodId = req.params.id_prod
    const prod = await productosApi.getById(prodId)
   console.log( await carritosApi.deleteProd(prod, cartId))
    res.send(await carritosApi.getById(cartId))
});

module.exports = router