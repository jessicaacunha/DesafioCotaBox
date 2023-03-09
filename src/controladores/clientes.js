const ClienteModel = require("../modelos/Clientes");

class ControleCliente {
    async  cadastrarCliente(req, res) {
        const { nome, sobrenome, participacao } = req.body;
      
        try {
            if (!nome || !sobrenome || !participacao) {
                return res.status(400).json({ mensagem: 'Todos os campos são obrigatórios' });
            }
        
            const cliente = await ClienteModel.create(req.body);
            const result = await ClienteModel.aggregate([ { $group: { _id: null, totalParticipacao: { $sum: '$participacao' } } },]);

            const totalParticipacao = result[0].totalParticipacao;
            if (totalParticipacao > 100) {
                await ClienteModel.findByIdAndDelete(cliente._id);

                return res.status(400).json({ mensagem: 'Porcentagem excedida' });
            }
            
            if(!cliente){
                return res.status(400).json({ mensagem: 'Erro ao cadastrar cliente' });
            }
        
            res.status(201).json({ cliente, totalParticipacao });
        } catch (error) {
            res.status(400).json({ mensagem: 'Erro interno no servidor' });
        }
    }
    async  listarClientes(req, res) {
        try {
            const clientes = await ClienteModel.find();

            res.status(201).json({ clientes });
        } catch (error) {
            res.status(400).json({ mensagem: 'Erro ao enconta cliente' });
        }
    }
}
 


module.exports = new ControleCliente();
