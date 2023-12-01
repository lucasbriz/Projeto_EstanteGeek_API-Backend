const express = require('express');
const edicao = require('./routes/edicao');
const perfil = require('./routes/perfil');

const app = express();

app.use(express.json());

const PORT = 3302;

app.use('/edicao', edicao);
app.use('/perfil', perfil);

app.listen(PORT, () => {
    console.log(`Executando a aplicação na porta ${PORT}`);
});