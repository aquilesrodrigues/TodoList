const express = require('express')

const app = express()

const port = process.env.port || 3001

app.listen(port)

console.log('servidor funcionando, na porta:', port)