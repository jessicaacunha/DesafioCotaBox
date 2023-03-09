const { Router } = require('express');
const ControleUsuario = require('./controladores/usuarios');

const rotas = Router();

rotas.post('/usuarios', ControleUsuario.cadastrarUsuario );

module.exports = {
     rotas 
};