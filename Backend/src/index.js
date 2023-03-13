require("dotenv").config();
const express = require("express");
const cors = require("cors");
const mogoose = require("mongoose");

const { rotas } = require("./rotas");

const app = express();
const PORT = process.env.PORT || 8000;
const DB_USER = process.env.DB_USER;
const DB_PASS = process.env.DB_PASS;

app.use(cors());
app.use(express.json());

app.use(rotas);

mogoose.connect(`mongodb+srv://${DB_USER}:${DB_PASS}@cluster0.ds7yxva.mongodb.net/test`)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Servidor inicializado`);
        })
        }).catch((err) => {
            console.log(err);
});
