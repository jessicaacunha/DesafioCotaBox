const UsuarioModel = require('../modelos/Usuario');

class ControleUsuario {
    async cadastrarUsuario(req, res) {
        const { email } = req.body;
    
        try {
            const usuarioExistente = await UsuarioModel.findOne({ email });
    
            if (usuarioExistente) {
                return res.status(400).json({ mensagem: 'Usuário já existe' });
            }
    
            const usuario = await UsuarioModel.create(req.body);
            usuario.senha = undefined;
    
            return res.status(201).json(usuario);
        } catch (error) {
            res.status(400).json({ mensagem: error.message });
        }
    }

}

module.exports = new ControleUsuario();

