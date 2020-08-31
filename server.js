const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = process.env.PORT || 3000;
const routes = require("./src/api/routes/usuarioRoutes.js")

app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({ extended: true }));
app.listen(port);
app.route('/').get((req, res)=>{res.send('API todoList - Certo no método GET')});

/* Usar sempre depois dos demais app.useRota */
routes(app);

console.log('servidor funcionando, na porta:', port);