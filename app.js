const yargs = require('yargs');
const geocode = require('./geocode/geocode');
const weather = require('./weather/weather.js');

const argv = yargs
.options({
  a: {
    demand: true,
    alias: 'address',
    describe: 'Address to find weather for',
    string: true
  }
})
.help()
.alias('help','h')
.argv;

geocode.geocodeAddress(argv.address, (err, res) => {
  if (err){
    console.log(err);
  } else {
    var lat = (res.location.lat);
    var lng = (res.location.lng);
    weather.getWeather(lat, lng, (err, res) => {
      if (err){
        console.log(err);
      } else {
        console.log(res);
      }
    })
  }
});
