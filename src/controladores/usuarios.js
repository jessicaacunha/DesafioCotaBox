const UsuarioModel = require('../modelos/Usuario');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require("dotenv").config();

function gerarToken(params = {}) {
    
    return jwt.sign(params, process.env.SECRET, {
        expiresIn: "8h",
    });
}

class ControleUsuario {
    async cadastrarUsuario(req, res) {
        const { nome, email, senha } = req.body;
    
        try {
            if (!nome || !email || !senha) {
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
            }

            const usuarioExistente = await UsuarioModel.findOne({ email });
    
            if (usuarioExistente) {
                return res.status(400).json({ mensagem: 'Usuário já existe' });
            }
    
            const usuario = await UsuarioModel.create(req.body);
            usuario.senha = undefined;
    
            return res.status(201).json({
                usuario,
                token: gerarToken({ id: usuario.id }),
            });
        } catch (error) {
            res.status(400).json(error.message);
        }
    }

    async AutenticarUsuarios(req, res) {
        const { email, senha } = req.body;

        try {
            const usuario = await UsuarioModel.findOne({ email }).select('+senha');

            if (!email || !senha) {
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
            }

            if (!usuario) {
                return res.status(400).json({mensagem: 'Usuário não encontrado'});
            }

            if (!(await bcrypt.compare(senha, usuario.senha))) {
                return res.status(400).json({mensagem: 'Senha incorreta'});
            }

            usuario.senha = undefined;

            return res.status(201).json({
                usuario,
                token: gerarToken({ id: usuario.id }),
            });
        } catch (error) {
            res.status(400).json({mensagem: error.message});
        }
    }
}

module.exports = new ControleUsuario();

