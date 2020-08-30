module.exports = function(app){
    const usuarios = require('../controllers/usuariosController.js')
    app.route('/usuarios')
    .get(usuarios.listAll)
    .post(usuarios.createOne) 
}