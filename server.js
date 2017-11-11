const express = require('express');
const bodyParser = require('body-parser');
const hbs = require('hbs');
const path = require('path');


// Iniciar la applicacion:
module.exports.app = express();
const app = module.exports.app;

const port = process.env.PORT || 3000;

hbs.registerPartials(__dirname + '/views/partials');
app.set('view engine', 'hbs');


// Middleware:
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.get('/', (req, res) => {
  res.render('home.hbs');
});

const home = require('./controllers/home');

// Iniciar el servidor:
app.listen(port, () => {
  console.log(`Server is up on port ${port}.`);
});
