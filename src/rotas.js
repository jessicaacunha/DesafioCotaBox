const { Router } = require('express');

const rotas = Router();

rotas.get('/', (req, res) => {
    res.send('Hello World!');
})

module.exports = {
     rotas 
};