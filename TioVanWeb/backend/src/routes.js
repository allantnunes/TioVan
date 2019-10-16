const express = express('express');

const routes = express.Router();

routes.post('/motorista/cadastro_motorista', (req, res) => {
    return res.json(req.body);
});

module.exports = routes;
