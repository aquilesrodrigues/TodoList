const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json()); 

const port = process.env.PORT || 3000;
const routes = require("./src/api/routes/usuarioRoutes.js")

app.listen(port);

/*Usar sempre depois dos demais app.useRota raiz.*/
routes(app);
app.route('/').get((req, res)=>{res.send('API todoList - Certo no método GET')});



console.log('servidor funcionando, na porta:', port);