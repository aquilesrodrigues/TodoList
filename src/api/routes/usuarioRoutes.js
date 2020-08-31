module.exports = function(app){
    const usuarioR = require("../controllers/usuariosController.js")
    app.route("/usuarios")
    .get(usuarioR.listAll)
    .post(usuarioR.createone)
}