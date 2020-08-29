exports.listAll = (req, res) => {
  let usuarios = [
      {
         nome: 'teste 01',
         email: 'teste@email.com'
      },
      {
        nome: 'teste 01',
        email: 'teste@email.com'
     },
  ]
  res.send(usuarios)
}

exports.createOne = (req, res) => {
    let response = {
        message: 'Usuário criado com sucesso', 
        data: req.body
    }
    res.send(response)
}