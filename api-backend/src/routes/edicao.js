const { Router } = require('express');
const queries = require('../queries');

const router = Router();

router.get('/', async (req, res) => {
    const query = await queries.getAllEditions();
    return res.status(200).json(query);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const query = await queries.getEditionById(id);
    if (query.lenght ===0) {
        return res.status(400).json({message: 'Edição não encontrada'});
    }
    return res.status(200).json(query);
});

router.post('/', async (req, res) => {
    const {titulo, autor, selo, ano, num_paginas, condicao_novo} = req.body;
    const query = await queries.createEdition(titulo, autor, selo, ano, num_paginas, condicao_novo);
        return res.status(201).json(query);
});

module.exports = router;