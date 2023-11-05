const express = require('express');
const app = express();

app.use(express.json());

const PORT = 3302;

app.listen(PORT, () => {
    console.log(`Executando a aplicação na porta ${PORT}`);
});