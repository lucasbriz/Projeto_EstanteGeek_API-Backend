const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

var allowedOrigins = [
    'https://estantegeekwebsite.z15.web.core.windows.net',
    'https://estante-geek.azurewebsites.net',
    'http://localhost:5173'
];

app.use(cors());

app.use('/editions', controllers.editions);
app.use('/profiles', controllers.profiles);

app.get('/', (req, res) => res.send('Hello, World'));
app.listen(port, () => console.log('Example app listening on port'));