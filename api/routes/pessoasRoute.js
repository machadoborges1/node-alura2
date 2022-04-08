const { Router } = require('express')
//const { pegaTodasAsPessoas } = require('../controllers/PessoaController')
const PessoaController = require('../controllers/PessoaController')

const router = Router()

//const pessoaaController = new PessoaController  // não precisa porque colocamos o metodo como estatico.

router.get("/pessoas", PessoaController.pegaTodasAsPessoas)
router.get('/pessoas/:id', PessoaController.pegaUmaPessoa) // esse pois pontos : antes de id === indica que vai ter um parametro
router.post('/pessoas', PessoaController.criarPessoa)
router.put('/pessoas/:id', PessoaController.atualizaPessoa)
router.delete('/pessoas/:id', PessoaController.apagaPessoa)

module.exports = router