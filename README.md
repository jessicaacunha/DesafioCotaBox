# DesafioCotaBox



const mongoose = require("mongoose");
const ObjetoId = mongoose.Schema.ObjectId;

const Usuario = mongoose.model("Usuario", {
    id: ObjetoId,
    nome: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
    },
    senha: {
        type: String,
        required: true,
        select: false,
    },
});

module.exports = {
    Usuario,
};

const Usuario = require('../modelos/Usuario');

class ControleUsuario {
    async cadastrarUsuario(req, res) {
        try {
            const criar = await Usuario.create(req.body);

            return res.status(201).json(criar);
        } catch (error) {
            res.status(400).json({mensagem: error.message});
        }
    }
}

module.exports = new ControleUsuario();

por que está aparecendo o erro : "Usuario.create is not a function" ?