const { Router } = require('express');
const queries = require('../profileQueries');

const router = Router();

router.post('/', async (req, res) => {
    const {nome, nome_usuario, email, senha} =  req.body;
    const query = await queries.createProfile(nome, nome_usuario, email, senha);
        return res.status(201).json(query);
});

module.exports = router;