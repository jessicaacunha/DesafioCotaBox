const jwt = require('jsonwebtoken');
require("dotenv").config();

const VerificarToken = (req, res, next) => {
    const { authorization } = req.headers;

    try { 
        if (!authorization) {
            return res.status(401).json({ mensagens: "Não autorizado" });
        }

        const token = authorization && authorization.split(' ')[1];

        if (token == null) {
            return res.status(401).json({mensagem : "Erro de Token"});
        }

        jwt.verify(token, process.env.SECRET, (erro, usuario) => {
            if (erro) {
                return res.status(401).json({mensagem : "Token inválido"});
            }
            req.usuarioId = usuario.Id;
            next();
        });
    } catch (error) {
        return res.status(500).json({ mensagem: "Erro interno do servidor" });
    }
};

module.exports = VerificarToken;