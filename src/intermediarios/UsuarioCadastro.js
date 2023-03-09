const validarUsuario = (esquema) => async (req, res, next) => {
    try {
      await esquema.validateAsync(req.body);
      next();
    } catch (error) {
      return res.status(400).json({ mensagem: error.message });
    }
  };

  const validarLogin = (esquema) => async (req, res, next) => {
    try {
      await esquema.validateAsync(req.body)
      next()
    } catch (error) {
      return res.status(400).json({ mensagem: error.message })
    }
  }
  
  module.exports = {
    validarUsuario,
    validarLogin
  };