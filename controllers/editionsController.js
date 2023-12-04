const {Router} = require('express');
const {Edition} = require('../models');

const router = Router();

router.get('/', async (req, res) => {
    const editions = await Edition.findAll();
    res.status(200).json(editions);
});

router.get('/:id', async (req, res) => {
    const editions = await Edition.findByPk(req.params.id);
    res.status(200).json(editions);
});

router.post('/', async (req, res) => {
    const {titulo, autor, editora, ano} = req.body;
    const newEdition = Edition.create({titulo, autor, editora, ano});
    res.status(200).json({message: 'Edição cadastrada com sucesso!'});
});

module.exports = router;