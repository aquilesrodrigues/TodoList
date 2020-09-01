module.exports = function(app){
    const usuarioR = require("../controllers/usuariosController.js")
    app.route("/usuarios")
    .get(usuarioR.listartodos)
    .post(usuarioR.criaregistro)
}