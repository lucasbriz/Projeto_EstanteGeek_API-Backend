const express = require('express');
const bodyParser = require('body-parser');
const controllers = require('./controllers');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

var corsOptions = {
    origin: '*',
}

app.use(cors(corsOptions));

app.use('/editions', controllers.editions);
app.use('/profiles', controllers.profiles);

app.get('/', (req, res) => res.send('Hello, World'));
app.listen(port, () => console.log('Example app listening on port'));