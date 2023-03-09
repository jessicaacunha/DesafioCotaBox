const joi = require("joi");

const esquemaUsuarioCadastro = joi.object({
  nome: joi.string().min(3).required().messages({
    "string.base": "O nome é um campo de texto",
    "string.min": "No minimo 3 caracteres",
    "any.required": "O nome é obrigatório!",
    "string.empty": "O nome é obrigatório!",
  }),
  email: joi.string().email().required().messages({
    "string.base": "O email é um campo de texto",
    "string.email": "Formato de e-mail inválido",
    "any.required": "O email é obrigatório!",
    "string.empty": "O email é obrigatório!",
  }),
  senha: joi.string().min(6).required().messages({
    "string.base": "A senha  é um campo de texto",
    "string.min": "A senha deve ter no mínimo 6 caracteres",
    "any.required": "A senha é obrigatória!",
    "string.empty": "A senha  é obrigatória!",
  }),
});

const esquemaLogin = joi.object({
    email: joi.string().email().required().messages({
        'string.base': 'O email é um campo de texto',
        'string.email': 'Formato de e-mail inválido',
        'any.required': 'O email é obrigatório!',
        'string.empty': 'O email é obrigatório!'
      }),
    senha: joi.string().min(6).required().messages({
        'string.base': 'A senha  é um campo de texto',
        'string.min': 'No minimo 6 caracteres',
        'any.required': 'A senha é obrigatória!',
        'string.empty': 'A senha  é obrigatória!'
      }),
});

module.exports = {
    esquemaUsuarioCadastro,
    esquemaLogin,
};