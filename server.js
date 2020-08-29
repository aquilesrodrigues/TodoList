const port = process.env.PORT || 3000;

const bodyParser = require("body-parser");
const routes = require("./src/routes/usuarioRoutes.js");

const express = require('express');
const app = express();

app.listen(port);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
/*Rota raiz.*/
app.route("/").get((req, res)=>{res.send("API todoList - Certo no método GET")});

console.log('servidor funcionando, na porta:', port);