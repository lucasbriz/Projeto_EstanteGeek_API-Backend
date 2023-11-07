const { Router } = require('express');
const queries = require('../queries');

const router = Router();

router.get('/', async (req, res) => {
    const query = await queries.getAllActors();
    return res.status(200).json(query);
});

module.exports = router;