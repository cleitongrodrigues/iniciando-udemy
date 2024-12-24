const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMidleware(req, res, next){
    console.log()
    console.log('Passei no midleware')
    next();
}

// Rotas do Home
routes.get('/', meuMidleware, homeController.paginaInicial);
routes.post('/', homeController.trataPost);

//Rotas do Contato
routes.get('/contato', contatoController.paginaInicial);
module.exports = routes;