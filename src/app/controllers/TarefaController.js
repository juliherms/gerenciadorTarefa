import Tarefa from '../model/tarefa';

class TarefaController{

    //metodo responsavel por cadastrar uma tarefa
    async store(req,res){

        const tarefa = await Tarefa.create(req.body);
        
        return res.json(tarefa);
    }

}

export default new TarefaController();