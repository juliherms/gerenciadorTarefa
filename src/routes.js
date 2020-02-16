import Router from  'express';
import TarefaController from './app/controllers/TarefaController';

//minhas configuracoes de rota

const routes = new Router();

routes.post('/tarefas', TarefaController.store);

export default routes;