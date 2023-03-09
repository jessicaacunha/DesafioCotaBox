const { Router } = require('express');
const ControleUsuario = require('./controladores/usuarios');
const VerificarToken = require('./intermediarios/UsuarioLogin');


const rotas = Router();

rotas.post('/usuarios', ControleUsuario.cadastrarUsuario );
rotas.post('/login', ControleUsuario.AutenticarUsuarios );


module.exports = {
     rotas 
};