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

app.use(cors({
    origin: function(origin, callback){
        // allow requests with no origin 
        // (like mobile apps or curl requests)
        if(!origin) return callback(null, true);
        if(allowedOrigins.indexOf(origin) === -1){
          var msg = 'The CORS policy for this site does not ' +
                    'allow access from the specified Origin.';
          return callback(new Error(msg), false);
        }
        return callback(null, true);
      }
}));

app.use('/editions', controllers.editions);
app.use('/profiles', controllers.profiles);

app.get('/', (req, res) => res.send('Hello, World'));
app.listen(port, () => console.log('Example app listening on port'));