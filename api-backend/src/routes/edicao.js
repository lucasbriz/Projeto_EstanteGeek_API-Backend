const { Router } = require('express');
const queries = require('../queries');

const router = Router();

router.post('/', async (req, res) => {
    const {titulo, autor, selo, ano, num_paginas, condicao_novo} = req.body;
    const query = await queries.createEdition(titulo, autor, selo, ano, num_paginas, condicao_novo);
        return res.status(201).json(query);
});

module.exports = router;