const { Router } = require('express');
const queries = require('../profileQueries');

const router = Router();

router.post('/', async (req, res) => {
    const {nome, nome_usuario, email, senha} =  req.body;
    const query = await queries.createProfile(nome, nome_usuario, email, senha);
        return res.status(201).json(query);
});

router.get('/', async (req, res) => {
    const query = await queries.getAllProfiles();
    return res.status(200).json(query);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const query = await queries.getProfileById(id);
    if (query.lenght ===0) {
        return res.status(400).json({message: 'Perfil não encontrado'});
    }
    return res.status(200).json(query);
});

module.exports = router;