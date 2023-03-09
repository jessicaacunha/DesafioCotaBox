const { Router } = require('express');
const ControleUsuario = require('./controladores/usuarios');
const VerificarToken = require('./intermediarios/UsuarioLogin');
const ControleCliente = require('./controladores/clientes');


const rotas = Router();

rotas.post('/usuarios', ControleUsuario.cadastrarUsuario );
rotas.post('/login', ControleUsuario.AutenticarUsuarios );

rotas.use(VerificarToken);

rotas.post('/clientes', ControleCliente.cadastrarCliente);
rotas.get('/listarclientes', ControleCliente.listarClientes);
rotas.get('/listarclientes/:id', ControleCliente.listarCliente);
rotas.put('/editarclientes/:id', ControleCliente.editarCliente);
rotas.delete('/deletarclientes/:id', ControleCliente.deletarCliente);

module.exports = {
     rotas 
};