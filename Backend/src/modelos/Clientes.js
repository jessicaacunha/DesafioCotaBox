const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const ObjetoId = Schema.ObjectId;

const ClienteSchema = new Schema({
    id: ObjetoId,
    nome: {
        type: String,
        required: true,
    },
    sobrenome: {
        type: String,
        required: true,
    },
    participacao: {
        type: Number,
        required: true,
    },
});

const ClienteModel = mongoose.model("Cliente", ClienteSchema);

module.exports = ClienteModel;