const express = require('express');
const app = express();
const porta = 3000;

app.get('/', (req, res) => {
    res.send('Hello world!');
});

app.get('/contato', (req, res) => {
    res.send('Pagina de contato')
})

app.listen(porta, () => {
    console.log(`Servidor iniciado na porta ${porta}`)
});