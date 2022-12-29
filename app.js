require('dotenv').config();
const express = require('express');
const hbs = require('hbs');
const app = express();
const port = process.env.PORT;

// handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

app.use( express.static('\public') );

app.get('/', function (req, res) {
  res.render('home', {
    nombre: 'Fox Moyano',
    titulo: 'Curso de Node'
  });
});

app.get('/generic', function (req, res) {
  res.render('generic', {
    nombre: 'Fox Moyano',
    titulo: 'Curso de Node'
  });
});

app.get('/elements', function (req, res) {
  res.render('elements', {
    nombre: 'Fox Moyano',
    titulo: 'Curso de Node'
  });
});

app.get('/romy', function (req, res) {
    res.send('Welcome Romy');
});

app.use( express.static('\hola-mundo') );

app.get('/*', function (req, res) {
  res.send('404 | Page not found');
});
  
app.listen(port);