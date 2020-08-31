const UsuarioC = require("../models").Usuario

/*Acesso ao banco,verificação etc..*/
exports.listAll = (req, res) =>{
   UsuarioC.findAll().then(usuariosC=>{
    res.send(usuariosC);  
   }).catch(error=>{
       
   })
    
}

exports.createone = (req, res) =>{
   console.log(UsuarioC)
   const {nome,email} = req.body
   UsuarioC.create({nome,email}).then(UsuarioC=>{
       res.send(UsuarioC)
   }).catch(error=>{
       res.send(error)
   })

}