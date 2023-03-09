require("dotenv").config();
const express = require("express");
const { rotas } = require("./rotas");

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.use(rotas);

app.listen(PORT, () => {
  console.log(`Servidor inicializado`);
});