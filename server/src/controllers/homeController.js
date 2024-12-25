exports.paginaInicial = (req, res) => {
    console.log('Respondendo ao Cliente');
    res.render('index');
    console.log(`'paginaInicial'Olha o que tem na req.session.nome ${req.session.nome}`);
    next();
};

exports.trataPost = (req, res) => {
    res.send('Ei sou sua nova rota de POST')
}