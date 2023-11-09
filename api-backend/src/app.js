const express = require('express');
const actors = require('./routes/actors');
const edicao = require('./routes/edicao')

const app = express();

app.use(express.json());

const PORT = 3302;

//app.use('/actors', actors);
app.use('/edicao', edicao)

app.listen(PORT, () => {
    console.log(`Executando a aplicação na porta ${PORT}`);
});