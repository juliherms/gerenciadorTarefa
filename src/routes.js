import Router from  'express';
import Tarefa from './app/model/tarefa';

//minhas configuracoes de rota

const routes = new Router();

routes.get('/', async (req,res) => {

    const tarefa = await Tarefa.create({
        descricao: 'Estudar Node',
        status: 1
    });

    return res.json(tarefa);
})

export default routes;