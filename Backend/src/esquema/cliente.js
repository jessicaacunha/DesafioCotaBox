const joi = require("joi");

const esquemaCadastroCliente = joi.object({
  nome: joi.string().min(3).required().messages({
    "string.base": "O nome é um campo de texto",
    "string.min": "No minimo 3 caracteres",
    "any.required": "O nome é obrigatório!",
    "string.empty": "O nome é obrigatório!",
  }),
  sobrenome: joi.string().min(3).required().messages({
    "string.base": "O sobrenome é um campo de texto",
    "string.min": "No minimo 3 caracteres",
    "any.required": "sobrenome é obrigatório!",
    "string.empty": "sobrenome é obrigatório!",
  }),
  participacao: joi.number().min(0).max(100).required().messages({
    "number.base": "A participação é um campo numérico",
    "any.required": "A participação é obrigatória",
    "number.min": "A participação deve ser maior ou igual a 0",
    "number.max": "A participação deve ser menor ou igual a 100",
    "number.positive": "A participação deve ser um número positivo",
  }),
});

const esquemaEditarCliente = joi.object({
    nome: joi.string().min(3).messages({
      "string.base": "O nome é um campo de texto",
      "string.min": "No minimo 3 caracteres",
      "string.empty": "O nome é obrigatório!",
    }),
    sobrenome: joi.string().min(3).messages({
      "string.base": "O sobrenome é um campo de texto",
      "string.min": "No minimo 3 caracteres",
      "string.empty": "O sobrenome é obrigatório!",
    }),
    participacao: joi.number().min(0).max(100).messages({
      'number.base': 'A participacao é um campo numérico',
      "number.min": "A participação deve ser maior ou igual a 0",
      "number.max": "A participação deve ser menor ou igual a 100",
      "number.positive": "A participação deve ser um número positivo",
    }),
  });

module.exports = {
    esquemaCadastroCliente,
    esquemaEditarCliente
};