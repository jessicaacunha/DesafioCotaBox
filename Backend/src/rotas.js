const { Router } = require('express');
const ControleUsuario = require('./controladores/usuarios');
const Autenticacao = require('./intermediarios/Autenticacao');
const ControleCliente = require('./controladores/clientes');
const { validarUsuario, validarLogin } = require('./intermediarios/UsuarioCadastro');
const { esquemaUsuarioCadastro, esquemaLogin } = require('./esquema/usuario');
const { validarCliente } = require('./intermediarios/Cliente');
const { esquemaCadastroCliente, esquemaEditarCliente } = require('./esquema/cliente');


const rotas = Router();

rotas.post('/usuarios', validarUsuario(esquemaUsuarioCadastro), ControleUsuario.cadastrarUsuario );
rotas.post('/login', validarLogin(esquemaLogin), ControleUsuario.AutenticarUsuarios );

rotas.use(Autenticacao);

rotas.post('/cadastrousuario', validarCliente (esquemaCadastroCliente), ControleCliente.cadastrarCliente);
rotas.get('/listarclientes', ControleCliente.listarClientes);
rotas.get('/listarclientes/:id', ControleCliente.listarCliente);
rotas.put('/editarclientes/:id', validarCliente(esquemaEditarCliente), ControleCliente.editarCliente);
rotas.delete('/deletarclientes/:id', ControleCliente.deletarCliente);

module.exports = {
     rotas 
};