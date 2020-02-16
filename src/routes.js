import Router from  'express';
import TarefaController from './app/controllers/TarefaController';

//minhas configuracoes de rota

const routes = new Router();

routes.post('/tarefas', TarefaController.store);

routes.put('/tarefas',TarefaController.update);

export default routes;