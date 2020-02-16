const { Router } = require('express');

//minhas configuracoes de rota

const routes = new Router();

routes.get('/', (req,res) => {
    return res.json({ message : 'Hello World' })
})

module.exports = routes;