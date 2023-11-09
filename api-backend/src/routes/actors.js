const { Router } = require('express');
const queries = require('../queries');

const router = Router();

router.get('/', async (req, res) => {
    const query = await queries.getAllActors();
    return res.status(200).json(query);
});

router.get('/:id', async (req, res) => {
    const {id} = req.params;
    const query = await queries.getActorsById(id);
    if (query.lenght === 0) {
        return res.status(400).json({ message: 'Actor not found'});
    }
    return res.status(200).json(query);
});

router.post('/', async (req, res) => {
    const { first_name, last_name} = req.body;
    const query = await queries.createActor(first_name, last_name);
        return res.status(201).json(query);
});

module.exports = router;