const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json()) //esse use avisa que tará algum meio de campo entre as requisiçoes. nesse caso esse ira converter para json os dados 

const port = 3000

app.get('/teste', (req, res) => res
    .status(200)
    .send({mensagem: 'boas-vindas'}))

app.listen(port, () => console.log(`porta ${port}`))

module.exports = app
