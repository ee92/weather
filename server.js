const express = require('express');
const hbs = require('hbs');
const fs = require('fs');

const port = process.env.PORT || 3000;
var app = express();

hbs.registerPartials(__dirname + '/views/partials')
app.set('view engine', 'hbs');

app.use((req, res, next) => {
  var now = new Date().toString();
  var log = `${now}: ${req.method} ${req.url}`;
  console.log(log)
  fs.appendFile('server.log', log + '\n', (err) => {
    if (err) {
      console.log(err)
    }
  });
  next();
})

// app.use((req, res, next) => {
//   res.render('maintenance.hbs');
// });

app.use(express.static(__dirname + '/public'));

hbs.registerHelper('getYear', () => {
  return new Date().getFullYear();
});

hbs.registerHelper('screamIt', (str) => {
  return str.toUpperCase();
});

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

app.listen(port, () => {
  console.log(`Server is up on port ${port}`);
});
