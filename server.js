const express = require('express');
const app = express();
const bodyParser = require("body-parser");
const port = process.env.PORT || 3000;
const routes = require("./api/routes/usuarioRoutes.js")

routes(app);

app.listen(port);
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
/*Rota raiz.*/
app.route('/').get((req, res)=>{res.send('API todoList - Certo no método GET')});



console.log('servidor funcionando, na porta:', port);