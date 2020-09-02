const UsuarioC = require("../models").Usuarios

/*Acesso ao banco,verificação etc..*/
exports.listartodos = (req, res) =>{
   UsuarioC.findAll().then(usuarios=>{
    res.send(Usuarios);  
   }).catch(error=>{
       
   })
    
}

exports.criaregistro = (req, res) =>{
   console.log(UsuarioC)
   const {nome,email} = req.body
   UsuarioC.create({nome,email}).then(Usuarios=>{
       res.send(Usuarios)
   }).catch(error=>{
       res.send(error)
   })

}