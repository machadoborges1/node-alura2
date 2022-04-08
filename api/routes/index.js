const bodyParser = require('bodyParser')
const pessoas = require('./pessoasRoute')

module.exports = app => {
    app.use(bodyParser.json())
    app.use(pessoas) //pessoas vai ficar como intermediário.  // estara o "banco de dados" de pessoas

    // app.get('/', (req, res) => res.send("hello teste"))  // nçao precisa mais do teste.
}