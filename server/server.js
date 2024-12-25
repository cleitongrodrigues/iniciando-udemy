const express = require('express');
const app = express();
const porta = 3000;
const routes = require('./routes');
const path = require('path');
const mongoose = require('mongoose');

mongoose.connect()

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src','views'));
app.set('view engine', 'ejs');

app.use(routes);

app.listen(porta, () => {
    console.log(`Servidor iniciado na porta ${porta}`)
});