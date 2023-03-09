const { Router } = require('express');
const ControleUsuario = require('./controladores/usuarios');
const VerificarToken = require('./intermediarios/UsuarioLogin');
const ControleCliente = require('./controladores/clientes');


const rotas = Router();

rotas.post('/usuarios', ControleUsuario.cadastrarUsuario );
rotas.post('/login', ControleUsuario.AutenticarUsuarios );

rotas.use(VerificarToken);

rotas.post('/clientes', ControleCliente.cadastrarCliente);
module.exports = {
     rotas 
};