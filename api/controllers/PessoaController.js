// Pessoa maiúsculo porque vai ser uma classe

const database = require('../models');

class PessoaController { //async => vai ter que esperar algumas coisas acontecer para ai sim devolver a resposta
    static async pegaTodasAsPessoas(req, res) { //static => posso chamar essemétodo sem que criar uma nova instancia no código (new pessoaController)
        try{
            const todasAsPessoas = await database.Pessoas.findAll() //consulta a tabela de pessoas e traz o resultado 
            return res.status(200).json(todasAsPessoas) //findAll() substitui =>  select * from Pessoas;    ......  no banco de dados MYSQL
        } 
        catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async pegaUmaPessoa(req, res) {
        const { id } = req.params
        try {
            const umaPessoa = await database.Pessoas.findOne({where: {id: Number(id)}}) //esse segundo id é esse == const { id } = req.params
                                                                                        //esse primeiro id é o nome da coluna == coluna id
            return res.status(200).json(umaPessoa)
        } catch (error){
            return res.status(500).json(error.message)
        }
    }

    static async criarPessoa(req, res) {
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa) //outro metodo da ferramentea create
            return res.status(200).json(novaPessoaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async atualizaPessoa(req, res) {
        const {id} = req.params
        const novaInfos = req.body
        try {
            await database.Pessoas.update(novaInfos, {where: {id:Number(id)}})
            const pessoaAtualizada = await database.Pessoas.findOne({
                where:{
                    id: Number(id)
                }
            })
            return res.status(200).json(pessoaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

    static async apagaPessoa(req, res) {
        const {id} = req.params
        try{
            await database.Pessoas.destroy({where: {id:Number(id)}})  // destroy metodo do sequlize.
            return res.status(200).json({ menssagem: `is ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    
}

module.exports = PessoaController
