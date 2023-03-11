const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;
const ObjetoId = Schema.ObjectId;

const UsuarioSchema = new Schema({
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

UsuarioSchema.pre("save", async function (next) {
    const hash = await bcrypt.hash(this.senha, 10);
    this.senha = hash;

    next();
});

const UsuarioModel = mongoose.model("Usuario", UsuarioSchema);

module.exports = UsuarioModel;