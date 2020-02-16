const express = require('express');
const routes = require('./routes');

class App {

    //instancio meu servidor
    constructor() {
        this.server = express();
        this.middlewares();
        this.routes();
    }

    //concentro todos os midlewares da minha app
    middlewares(){
        //habilita a app para receber requisicoes json
        this.server.use(express.json());
    }

    //concentro todas as rotas da minha app
    routes(){
        this.server.use(routes);
    }
}
module.exports = new App().server;