const express = require('express');
const routes = express.Router();
const homeController = require('./src/controllers/homeController');
const contatoController = require('./src/controllers/contatoController');

function meuMidleware(req, res, next) {
    req.session = { nome: 'Cleiton', sobrenome: 'Rodrigues' };
    console.log()
    console.log('Passei no midleware')
    next();
}

// Rotas do Home
routes.get('/', meuMidleware, homeController.paginaInicial);
console.log();
console.log(`'Ultimo midleware'Olha o que tem na req.session.nome ${req.session.nome}`);
res.send('Chegou aqui!');
console.log('Ainda estou aqui!');

routes.post('/', homeController.trataPost);

//Rotas do Contato
routes.get('/contato', contatoController.paginaInicial);
module.exports = routes;