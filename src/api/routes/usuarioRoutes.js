module.exports = function(app){
    const usuarioR = require("../controllers/usuariosController.js")
    app.route("/usuario")
    .get(usuarioR.listartodos)
    .post(usuarioR.criaregistro)
}