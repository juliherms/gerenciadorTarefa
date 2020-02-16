import Tarefa from '../model/tarefa';

class TarefaController{

    //metodo responsavel por cadastrar uma tarefa
    async store(req,res){

        const tarefa = await Tarefa.create(req.body);
        
        return res.json(tarefa);
    }

    //metodo responsável por atualizar uma tarefa
    async update(req,res){


        const { id } = req.body; 

        const tarefa = await Tarefa.findByPk(id);
        

        //chama o metodo de alterar tarefa
        const tarefaAlterada = await Tarefa.update(req.body);

        return res.json(tarefaAlterada);
    }

}

export default new TarefaController();