const express = require('express');
const hbs = require('hbs');

var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');
app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
})

hbs.registerHelper('screamIt', (str) => {
  return str.toUpperCase();
})

app.get('/',(req, res) => {
  res.render('home.hbs', {
    header: 'welcome home',
    creator: 'Egor Egorov'
  });
});

app.get('/about',(req, res) => {
  res.render('about.hbs', {
    header: 'welcome home',
    homie: 'Harambe',
    creator: 'Egor Egorov'
  });
});

app.listen(3000);
