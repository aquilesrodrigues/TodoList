const usuario = require('../models').Usuario


exports.listAll = (req, res) => {
  let usuario = 
  [
      {
         nome: 'teste 01',
         email: 'teste@email.com'
      },
      {
        nome: 'teste 02',
        email: 'teste2@email.com'
     }
  ]
  res.send(usuario)
}

exports.createOne = (req, res) => {
   console.log(usuario)
   const { nome, email} = req.body
   usuario.create({nome, email}).then(
       usuario => {res.send(usuario)}).cath(
         error => {res.send(error)}) 


}