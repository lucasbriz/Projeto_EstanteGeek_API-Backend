const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(cors());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');
    res.setHeader('Access-Control-Allow-Origin', 'https://estantegeekwebsite.z15.web.core.windows.net/');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

app.use('/editions', controllers.editions);
app.use('/profiles', controllers.profiles);

app.get('/', (req, res) => res.send('Hello, World'));
app.listen(port, () => console.log('Example app listening on port'));